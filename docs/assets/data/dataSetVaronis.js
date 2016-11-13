var dataSet = [
['', 'Varonis', 'av-external-de.varonis.com', '198.231.26.26', 'No HTTPS', '2016-11-12', 'No secure protocols supported', 'Computer Security', '?', '?', '', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Varonis', 'av-external-de.varonis.com', '198.231.26.23', 'No HTTPS', '2016-11-12', 'No secure protocols supported', 'Computer Security', '?', '?', '', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Varonis', 'central.varonis.com', '198.231.27.44', 'Could not connect', '2016-11-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Varonis', 'ir.varonis.com', '206.200.251.19', 'Could not connect', '2016-11-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Varonis', 'survey.varonis.com', '198.231.27.48', 'Could not connect', '2016-11-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Varonis', 'mailout.varonis.com', '198.231.27.132', 'Could not connect', '2016-11-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Varonis', 'mailout.varonis.com', '198.231.27.131', 'Could not connect', '2016-11-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Varonis', 'cards.varonis.com', '50.17.240.68', 'T/ A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'crm.varonis.com', '23.6.72.130', 'B', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'downloads.varonis.com', '23.6.72.130', 'B', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'go.varonis.com', '104.196.44.111', 'T/ A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'sites.varonis.com', '104.196.141.10', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'www.varonis.com', '104.196.44.111', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'jp.varonis.com', '104.196.31.58', 'T/ A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'id.varonis.com', '198.231.27.59', 'B', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'mail.varonis.com', '198.231.27.40', 'A-', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'my.varonis.com', '104.41.153.33', 'B', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'partners.varonis.com', '198.231.27.133', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'support-dn.varonis.com', '198.231.27.49', 'B', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'hub.varonis.com', '23.15.9.147', 'T/ A-', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', 'Varonis', 'hub.varonis.com', '23.15.9.137', 'T/ A-', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', 'Varonis', 'sip-external-us.varonis.com', '198.231.27.194', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'sip-external-us.varonis.com', '198.231.27.197', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'dn-il.varonis.com', '91.208.129.46', 'A-', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'owa.varonis.com', '198.231.27.166', 'B', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'support.varonis.com', '198.231.27.38', 'B', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'varonis.com', '104.196.44.111', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'vpn-isr.varonis.com', '91.208.129.50', 'A-', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'webconf-external-de.varonis.com', '198.231.26.25', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'webconf-external-de.varonis.com', '198.231.26.22', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'sip-external-il.varonis.com', '91.208.129.194', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'sip-external-il.varonis.com', '91.208.129.197', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'blog.varonis.com', '198.74.59.80', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'connect.varonis.com', '2600:1408:10:19c:0:0:0:19dd', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'connect.varonis.com', '2600:1408:10:1a1:0:0:0:19dd', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'connect.varonis.com', '23.6.20.192', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'fridge.varonis.com', '54.235.116.11', 'T/ A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'dn-us.varonis.com', '198.231.27.36', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'dn-us.varonis.com', '198.231.27.34', 'A-', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'm-il-s.varonis.com', '91.208.129.205', 'Could not connect', '2016-11-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Varonis', 'training.varonis.com', '198.231.27.107', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'sip-external-de.varonis.com', '198.231.26.24', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'sip-external-de.varonis.com', '198.231.26.21', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'skills.varonis.com', '198.231.27.41', 'F', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'info.varonis.com', '184.27.45.177', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'info.varonis.com', '184.27.45.168', 'A', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Varonis', 'cs.varonis.com', '198.231.27.37', 'C', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Varonis', 'web.varonis.com', '23.15.9.178', 'T/ A-', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', 'Varonis', 'web.varonis.com', '23.15.9.137', 'T/ A-', '2016-11-12', 'Ready', 'Computer Security', '?', '?', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
];
var chartData = [
['Grade', 'Number of sites', { role: 'style' }],
['A', 10, 'color: YellowGreen'],
['A-', 4, 'color: LightGreen'],
['B', 7, 'color: Orange'],
['C', 11, 'color: Orange'],
['T/ A', 4, 'color: Red'],
['T/ A-', 4, 'color: Red'],
['F', 1, 'color: Red'],
['No HTTPS', 2, 'color: Red'],
['Could not connect', 6, 'color: Gray'],
];
