var dataSet = [
['', 'NSDL', 'broadside4.nsdl.com', '121.240.64.232', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', '63.mailer.nsdl.co.in', '103.52.180.63', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', '65.mailer.nsdl.co.in', '103.52.180.65', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', '66.mailer.nsdl.co.in', '103.52.180.66', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'artemis.nsdl.com', '59.163.46.28', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'edr-gstpilot.nsdl.co.in', '14.140.81.148', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'gstpilot.nsdl.co.in', '121.240.36.225', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'hermes.nsdl.com', '121.240.9.11', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'idc.nsdl.co.in', '202.162.229.210', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'mapin.nsdl.com', '203.199.101.248', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'mx2.nsdl.com', '59.163.46.12', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'mx4.nsdl.com', '59.163.46.14', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'nims.nsdl.com', '121.240.225.120', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'mx1.broadside.nsdl.com', '121.240.64.229', 'T/ B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'broadside2.nsdl.com', '121.240.64.230', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'Yes'] ,
['', 'NSDL', 'dpmshr.nsdl.com', '121.240.225.110', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'edocs.nsdl.com', '121.240.225.102', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'broadside5.nsdl.com', '121.240.64.233', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'NSDL', 'eservices.nsdl.com', '121.240.225.107', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'fpi.nsdl.co.in', '14.141.98.93', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'helios.nsdl.com', '59.163.46.29', 'T/ C', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'Yes'] ,
['', 'NSDL', 'indiabondinfo.nsdl.com', '121.240.225.116', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'egov-mag.nsdl.co.in', '121.240.9.5', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No'] ,
['', 'NSDL', 'egov-seg.nsdl.co.in', '121.240.9.5', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No'] ,
['', 'NSDL', 'nsdl.co.in', '121.240.225.117', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'rgess.nsdl.com', '121.240.225.103', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'onlineservices.cbec.nsdl.com', '203.199.101.243', 'T/ C', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'Possibly', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'uranus.nsdl.com', '59.163.46.30', 'No HTTPS', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'nsdlca.nsdl.com', '203.199.101.254', 'T/ B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.cbec.nsdl.com', '59.163.46.1', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'Possibly', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'qfi.nsdl.com', '14.141.98.90', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'webmail.nsdl.co.in', '121.240.36.254', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'Yes', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'testcra.nsdl.com', '121.240.64.236', 'T/ B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No'] ,
['', 'NSDL', 'uatmobileservice.nsdl.com', '121.240.225.119', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.dpmshr.nsdl.com', '121.240.225.110', 'T/ B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.nsdl.com', '103.26.97.204', 'No HTTPS', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'www.epass.nsdl.com', '115.112.16.88', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.evoting.nsdl.com', '121.240.225.108', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', '64.mailer.nsdl.co.in', '103.52.180.64', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'www.fpi.nsdl.co.in', '14.141.98.93', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.indiabondinfo.nsdl.com', '121.240.225.116', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'broadside3.nsdl.com', '121.240.64.231', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'broadside.nsdl.com', '121.240.64.229', 'T/ B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'cbec.nsdl.com', '59.163.46.1', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'Possibly', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'eros.nsdl.com', '59.163.46.26', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'www.onlineservices.nsdl.com', '59.163.46.18', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No'] ,
['', 'NSDL', 'hebe.nsdl.com', '59.163.46.27', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'www.npscra.nsdl.co.in', '35.154.178.144', 'A-', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.npscra.nsdl.co.in', '35.154.87.146', 'A-', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'mx3.nsdl.com', '59.163.46.13', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'edpm.nsdl.com', '121.240.225.109', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'mx5.nsdl.com', '59.163.46.15', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'nsdl.com', '103.26.97.204', 'No HTTPS', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'hercules.broadside.nsdl.com', '121.240.64.229', 'T/ B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'egov-mdm.nsdl.co.in', '121.240.9.5', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No'] ,
['', 'NSDL', 'mgpsy.nsdl.co.in', '121.240.64.226', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.gstpilot.nsdl.co.in', '121.240.36.225', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'www.nsdl.co.in', '103.26.97.204', 'No HTTPS', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'apollo.nsdl.com', '59.163.46.21', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'onlineservices.tin.nsdl.com', '203.199.101.253', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No'] ,
['', 'NSDL', 'onlineservices.nsdl.com', '59.163.46.18', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No'] ,
['', 'NSDL', 'lt.nsdl.co.in', '206.183.108.3', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'steadyassist.nsdl.com', '121.240.225.124', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.edocs.nsdl.com', '121.240.225.102', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'mx1.nsdl.com', '59.163.46.11', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'broadside1.nsdl.com', '121.240.64.229', 'T/ B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'cradashboard.nsdl.com', '121.240.9.28', 'C', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'hades.nsdl.com', '121.240.9.1', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'tin.tin.nsdl.com', '203.199.101.249', 'C', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'Possibly', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'evoting.nsdl.com', '121.240.225.108', 'T/ B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.nims.nsdl.com', '121.240.225.120', 'Could not connect', '2017-05-07', 'Unable to connect to the server', 'Securities', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'NSDL', 'www.fci.nsdl.com', '121.240.36.234', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'enps.nsdl.com', '121.240.246.29', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'NSDL', 'nsdlcas.nsdl.com', '14.141.98.92', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'www.nsdlcas.nsdl.com', '14.141.98.92', 'B', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'npscra.nsdl.co.in', '35.154.178.144', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'NSDL', 'npscra.nsdl.co.in', '35.154.87.146', 'F', '2017-05-07', 'Ready', 'Securities', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
];
var chartDataSummary = [
['Grade', 'Number of sites', {role: 'style'}],
['A-', 2, 'color: LightGreen'],
['B', 15, 'color: Orange'],
['C', 2, 'color: Orange'],
['T/ B', 8, 'color: Red'],
['T/ C', 2, 'color: Red'],
['F', 18, 'color: Red'],
['No HTTPS', 4, 'color: Red'],
['Could not connect', 26, 'color: Gray'],
];
var chartDataCountsByOrg = [
['Organization', {label: 'A+', type: 'number'}, {label: 'A', type: 'number'}, {label: 'A-', type: 'number'}, {label: 'B', type: 'number'}, {label: 'C', type: 'number'}, {label: 'D', type: 'number'}, {label: 'E', type: 'number'}, {label: 'T', type: 'number'}, {label: 'F', type: 'number'}, {label: 'No HTTPS', type: 'number'}, {label: 'Scan error', type: 'number'}, {label: 'Not scanned', type: 'number'}],
['NSDL', null, null, 2, 15, 2, null, null, 10, 18, 4, null, null],
];
