var dataSet = [
['', '-', 'activesync.spacex.com', '64.47.164.139', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'as4.spacex.com', '64.47.164.146', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'callmgr1.spacex.com', '64.47.164.146', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'cuma.spacex.com', '64.47.117.213', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'frontline.spacex.com', '192.31.242.136', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'hermes.spacex.com', '64.47.164.144', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'hr.spacex.com', '64.47.117.221', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'legacy.spacex.com', '64.47.164.139', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'ivpn.spacex.com', '192.31.242.250', 'T/ C', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes'] ,
['', '-', 'autodiscover.spacex.com', '192.31.242.50', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'lyncav.spacex.com', '192.31.242.168', 'No HTTPS', '2016-11-12', 'No secure protocols supported', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'ivpn2.spacex.com', '192.31.242.251', 'T/ C', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes'] ,
['', '-', 'auth.spacex.com', '192.31.242.144', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'mc1-divar.spacex.com', '64.47.44.93', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'mta1.spacex.com', '192.31.242.6', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'mta2.spacex.com', '192.31.242.134', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'lync2013.spacex.com', '192.31.242.147', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'lyncdiscover.spacex.com', '192.31.242.147', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'mail.spacex.com', '192.31.242.50', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'ns1.spacex.com', '192.31.242.25', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'meet.spacex.com', '192.31.242.147', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'nsfw.spacex.com', '64.47.133.33', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'software-interview.spacex.com', '192.31.242.29', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'stfo.spacex.com', '64.47.164.129', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'svn-ext.spacex.com', '64.47.164.146', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'sip.spacex.com', '192.31.242.148', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'tyche.spacex.com', '199.175.188.53', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'send.spacex.com', '192.31.242.19', 'F', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', '-', 'spacex.com', '174.129.197.230', 'C', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'Possibly', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes'] ,
['', '-', 'video-ingest.spacex.com', '64.47.164.145', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'vpn2.spacex.com', '192.31.242.248', 'A-', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', '-', 'supplierexchange.spacex.com', '192.31.242.161', 'F', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No'] ,
['', '-', 'crl.spacex.com', '192.31.242.137', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'supplierxchange.spacex.com', '192.31.242.161', 'F', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No'] ,
['', '-', 'vpn-test.spacex.com', '192.31.242.200', 'T/ A-', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes'] ,
['', '-', 'webconf.spacex.com', '192.31.242.158', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'adfs.spacex.com', '192.31.242.45', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'Test failure', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'mail1.spacex.com', '64.47.164.146', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'mercury.spacex.com', '64.47.164.149', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'netflow.spacex.com', '64.47.164.146', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'tricaster.spacex.com', '64.47.164.138', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'customervpn.spacex.com', '192.31.242.121', 'B', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No'] ,
['', '-', 'ivpn3.spacex.com', '64.47.44.69', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'vpn.spacex.com', '192.31.242.247', 'A-', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', '-', 'mc1-ns25.spacex.com', '64.47.44.65', 'Could not connect', '2016-11-12', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'wac.spacex.com', '192.31.242.146', 'T/ B', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', '-', 'vpn1.spacex.com', '192.31.242.123', 'A-', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', '-', 'shop.spacex.com', '104.207.236.188', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.spacex.com', '23.15.7.8', 'T/ A-', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'www.spacex.com', '23.15.7.41', 'T/ A-', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'admin.spacex.com', '54.244.244.108', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'admin.spacex.com', '54.214.246.43', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'admin.spacex.com', '54.245.101.250', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'admin.spacex.com', '54.214.29.98', 'A', '2016-11-12', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
];
var chartData = [
['Grade', 'Number of sites', { role: 'style' }],
['A', 14, 'color: YellowGreen'],
['A-', 3, 'color: LightGreen'],
['B', 1, 'color: Orange'],
['C', 1, 'color: Orange'],
['T/ A-', 3, 'color: Red'],
['T/ B', 1, 'color: Red'],
['T/ C', 2, 'color: Red'],
['F', 3, 'color: Red'],
['No HTTPS', 1, 'color: Red'],
['Could not connect', 25, 'color: Gray'],
];
