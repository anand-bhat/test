import datetime
import getopt
import json
import sys


def valueIfGraded(grade, value):
    return (value if grade != '' else '-')


def booleanToYesNo(value):
    return ('Yes' if value else 'No')


def getExtraHostData(jsonData, host, key):
    defaultValue = '-'
    for hostRecord in jsonData:
        if host == hostRecord.get('host', ''):
            return hostRecord.get(key, '')
        if hostRecord.get('host', '') == '*':
            defaultValue = hostRecord.get(key, '')
    return defaultValue


def openSslCcsValue(value):
    return ('Test failure' if value == -1
            else 'Unknown' if value == 0
            else 'No' if value == 1
            else 'Possibly' if value == 2
            else 'Yes' if value == 3
            else '-')


def openSSLLuckyMinus20Value(value):
    return ('Test failure' if value == -1
            else 'Unknown' if value == 0
            else 'No' if value == 1
            else 'Yes' if value == 2
            else '-')


def weakDHValue(value):
    return ('No' if value == 0
            else 'No; but does not use custom primes' if value == 1
            else 'Yes' if value == 2
            else 'No')


def lacksFSValue(value):
    return ('Yes' if value in [0, 1]
            else 'No' if value in [2, 4]
            else '')


def poodleTlsValue(value):
    return ('Test timeout' if value == -3
            else 'No' if value == -2
            else 'Test failure' if value == -1
            else 'Unknown' if value == 0
            else 'No' if value == 1
            else 'Yes' if value == 2
            else '-')


def isBitSet(x, n):
    return (x & 2**n != 0)


def updateCounts(table, key):
    if key in table:
        table[key] = table[key] + 1
    else:
        table[key] = 1
    return table


def printCount(table, key, printVal, extra):
    if key in table:
        print('[\'' + printVal + '\', ' + str(table[key]) + extra)


def main(argv):
    domainsFile = ''
    ssllabsReportsFile = ''

    try:
        opts, args = getopt.getopt(
            argv, 'h:d:s', ['domainsfile=', 'ssllabsreportsfile='])
    except getopt.GetoptError:
        print('createDataSet.py -d <domainsJSON> -s <SSLLabsReportsJSON>')
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print('createDataSet.py -d <domainsJSON> -s <SSLLabsReportsJSON>')
            sys.exit()
        elif opt in ('-d', '--domainsfile'):
            domainsFile = arg
        elif opt in ('-s', '--ssllabsreportsfile'):
            ssllabsReportsFile = arg

    if not domainsFile or not ssllabsReportsFile:
        print('createDataSet.py -d <domainsJSON> -s <SSLLabsReportsJSON>')
        sys.exit(2)

    with open(domainsFile, 'r') as myfile:
        domains = myfile.read()

    domainsJSON = json.loads(domains)

    with open(ssllabsReportsFile, 'r') as myfile:
        ssllabsReports = myfile.read()

    ssllabsJSON = json.loads(ssllabsReports)

    counts = {}
    hostsFromSSLLabsReport = []

    print('var dataSet = [')

    for labsReport in ssllabsJSON:
        host = labsReport['host']
        status = labsReport['status']
        hostsFromSSLLabsReport.append(host)

        org = getExtraHostData(domainsJSON, host, 'organization')
        industry = getExtraHostData(domainsJSON, host, 'industry')
        hostPurpose = getExtraHostData(domainsJSON, host, 'hostPurpose')
        httpsBehavior = getExtraHostData(domainsJSON, host, 'httpsBehavior')
        issueReport = getExtraHostData(domainsJSON, host, 'issueReport')
        statusMessage = labsReport.get('statusMessage', '')

        if status != 'READY':
            if (statusMessage == 'Unable to resolve domain name'):
                grade = 'Unknown domain'
            elif (status == 'ERROR'):
                grade = 'Scan error'

            dataSetValues = ['', org, host, '-', grade, '-',
                             statusMessage, industry, hostPurpose,
                             httpsBehavior, issueReport, '-', '-', '-', '-',
                             '-', '-', '-', '-', '-', '-', '-', '-', '-', '-',
                             '-', '-', '-', '-', '-', '-', '-', '-', '-']
            print(dataSetValues, ',')
            counts = updateCounts(counts, grade)
            continue

        for endpoint in labsReport['endpoints']:
            ipAddress = endpoint['ipAddress']
            grade = endpoint.get('grade', '')
            statusMessage = endpoint.get('statusMessage', '')

            if 'details' not in endpoint:
                continue

            testTime = datetime.datetime.fromtimestamp(
                endpoint['details'].get(
                    'hostStartTime', 0)/1000.0).strftime('%Y-%m-%d')

            supportsRc4 = valueIfGraded(
                grade, booleanToYesNo(
                    endpoint['details'].get('supportsRc4', False)))

            lacksFS = valueIfGraded(
                grade, lacksFSValue(
                    endpoint['details'].get('forwardSecrecy', '-')))

            rc4WithModern = valueIfGraded(
                grade, booleanToYesNo(
                    endpoint['details'].get('rc4WithModern', False)))

            heartbleed = valueIfGraded(
                grade, booleanToYesNo(
                    endpoint['details'].get('heartbleed', False)))

            poodle = valueIfGraded(
                grade, booleanToYesNo(
                    endpoint['details'].get('poodle', False)))

            poodleTls = valueIfGraded(
                grade, poodleTlsValue(
                    endpoint['details'].get('poodleTls', '-')))

            freak = valueIfGraded(
                grade, booleanToYesNo(endpoint['details'].get('freak', False)))

            logjam = valueIfGraded(
                grade, booleanToYesNo(
                    endpoint['details'].get('logjam', False)))

            openSslCcs = valueIfGraded(
                grade, openSslCcsValue(
                    endpoint['details'].get('openSslCcs', '-')))

            openSSLLuckyMinus20 = valueIfGraded(
                grade, openSSLLuckyMinus20Value(
                    endpoint['details'].get('openSSLLuckyMinus20', '-')))

            insecureRenegotiation = valueIfGraded(
                grade, booleanToYesNo(
                    isBitSet(endpoint['details'].get('renegSupport', 0), 0)))

            lacksSecureRenegotiation = valueIfGraded(
                grade, booleanToYesNo(
                    not isBitSet(
                        endpoint['details'].get('renegSupport', 0), 1)))

            weakPrivateKey = valueIfGraded(
                grade, booleanToYesNo(
                    endpoint['details']['key'].get('strength', -1) <= 1024))

            sslv2 = False
            sslv3 = False
            notls = True
            notlsv12 = True

            for protocol in endpoint['details']['protocols']:
                protocolName = protocol['name']
                protocolVersion = protocol['version']

                if (protocolName == 'SSL'):
                    if (protocolVersion == '2.0'):
                        sslv2 = True
                        continue
                    elif (protocolVersion == '3.0'):
                        sslv3 = True
                        continue
                elif (protocolName == 'TLS'):
                    notls = False
                    if (protocolVersion == '1.2'):
                        notlsv12 = False

            drownVulnerable = valueIfGraded(
                grade, booleanToYesNo(
                    sslv2 or
                    endpoint['details'].get('drownVulnerable', False)))

            sslv2 = valueIfGraded(grade, booleanToYesNo(sslv2))
            sslv3 = valueIfGraded(grade, booleanToYesNo(sslv3))
            notls = valueIfGraded(grade, booleanToYesNo(notls))
            notlsv12 = valueIfGraded(grade, booleanToYesNo(notlsv12))

            supportsAnonSuites = False
            weakDH = False
            if 'list' in endpoint['details']['suites']:
                for suite in endpoint['details']['suites']['list']:
                    if not supportsAnonSuites and 'anon' in suite['name']:
                        supportsAnonSuites = True
                    if not weakDH and suite.get('dhStrength', 99999) <= 1024:
                        weakDH = True

            supportsAnonSuites = valueIfGraded(
                grade, booleanToYesNo(supportsAnonSuites))

            weakDH = valueIfGraded(grade, booleanToYesNo(weakDH))

            rc4Only = valueIfGraded(
                grade, booleanToYesNo(
                    endpoint['details'].get('rc4Only', False)))

            hasIncompleteChain = valueIfGraded(
                grade, booleanToYesNo(isBitSet(
                    endpoint['details']['chain'].get('issues', 0), 1)))

            trustIssues = False
            if (grade == 'M' or grade == 'T'):
                trustIssues = True
                grade = grade + '/ ' + endpoint.get('gradeTrustIgnored', '')
            elif (grade == 'F' and
                  endpoint['details']['cert'].get('issues', 0) != 0):
                trustIssues = True

            trustIssues = valueIfGraded(
                    grade, booleanToYesNo(trustIssues))

            if (grade == ''):
                if (statusMessage == 'No secure protocols supported'):
                    grade = 'No HTTPS'
                elif (statusMessage == 'Unable to connect to the server'):
                    grade = 'Could not connect'
                else:
                    grade = 'Scan error'

            counts = updateCounts(counts, grade)

            dataSetValues = ['', org, host, ipAddress, grade, testTime,
                             statusMessage, industry, hostPurpose,
                             httpsBehavior, issueReport, heartbleed,
                             openSslCcs, openSSLLuckyMinus20, freak, logjam,
                             poodleTls, drownVulnerable, sslv2,
                             supportsAnonSuites, rc4Only,
                             insecureRenegotiation, notls, trustIssues, poodle,
                             notlsv12, rc4WithModern, supportsRc4, sslv3,
                             weakDH, hasIncompleteChain, weakPrivateKey,
                             lacksFS, lacksSecureRenegotiation]
            print(dataSetValues, ',')

    for hostRecord in domainsJSON:
        host = hostRecord.get('host', '')
        httpsBehavior = hostRecord.get('httpsBehavior', '')
        if (host == '' or host == '*' or
                httpsBehavior == 'Not used for HTTP/ HTTPS' or
                host in hostsFromSSLLabsReport):
            continue

        org = hostRecord.get('organization', '')
        industry = hostRecord.get('industry', '')
        hostPurpose = hostRecord.get('hostPurpose', '')
        issueReport = hostRecord.get('issueReport', '')
        dataSetValues = ['', org, host, '-', 'Not scanned', '-', 'Not scanned',
                         industry, hostPurpose, httpsBehavior, '-', '-', '-',
                         '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-',
                         '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
        print(dataSetValues, ',')
        counts = updateCounts(counts, 'Not scanned')

    print('];')

    print('var chartData = [')
    print('[\'Grade\', \'Number of sites\', { role: \'style\' }],')

    printCount(counts, 'A+', 'A+', ', \'color: Green\'],')
    printCount(counts, 'A', 'A', ', \'color: YellowGreen\'],')
    printCount(counts, 'A-', 'A-', ', \'color: LightGreen\'],')
    printCount(counts, 'B', 'B', ', \'color: Orange\'],')
    printCount(counts, 'C', 'C', ', \'color: Orange\'],')
    printCount(counts, 'D', 'D', ', \'color: Red\'],')
    printCount(counts, 'E', 'E', ', \'color: Red\'],')
    printCount(counts, 'M', 'M', ', \'color: Red\'],')
    printCount(counts, 'M/ A+', 'M/ A+', ', \'color: Red\'],')
    printCount(counts, 'M/ A', 'M/ A', ', \'color: Red\'],')
    printCount(counts, 'M/ A-', 'M/ A-', ', \'color: Red\'],')
    printCount(counts, 'M/ B', 'M/ B', ', \'color: Red\'],')
    printCount(counts, 'M/ C', 'M/ C', ', \'color: Red\'],')
    printCount(counts, 'M/ D', 'M/ D', ', \'color: Red\'],')
    printCount(counts, 'M/ E', 'M/ E', ', \'color: Red\'],')
    printCount(counts, 'M/ F', 'M/ F', ', \'color: Red\'],')
    printCount(counts, 'T', 'T', ', \'color: Red\'],')
    printCount(counts, 'T/ A+', 'T/ A+', ', \'color: Red\'],')
    printCount(counts, 'T/ A', 'T/ A', ', \'color: Red\'],')
    printCount(counts, 'T/ A-', 'T/ A-', ', \'color: Red\'],')
    printCount(counts, 'T/ B', 'T/ B', ', \'color: Red\'],')
    printCount(counts, 'T/ C', 'T/ C', ', \'color: Red\'],')
    printCount(counts, 'T/ D', 'T/ D', ', \'color: Red\'],')
    printCount(counts, 'T/ E', 'T/ E', ', \'color: Red\'],')
    printCount(counts, 'T/ F', 'T/ F', ', \'color: Red\'],')
    printCount(counts, 'F', 'F', ', \'color: Red\'],')
    printCount(counts, 'No HTTPS', 'No HTTPS', ', \'color: Red\'],')
    printCount(counts, 'Scan error', 'Scan error', ', \'color: Gray\'],')
    printCount(counts, 'Not scanned', 'Not scanned', ', \'color: Gray\'],')
    printCount(counts, 'Unknown domain', 'Unknown domain',
               ', \'color: Gray\'],')
    printCount(counts, 'Could not connect', 'Could not connect',
               ', \'color: Gray\'],')

    print('];')

if __name__ == '__main__':
    main(sys.argv[1:])
