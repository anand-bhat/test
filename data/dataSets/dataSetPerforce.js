var dataSet = [
['', 'Perforce', 'certification.perforce.com', '67.192.153.230', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'ftp.perforce.com', '107.1.244.159', 'No HTTPS', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'cloud-s.perforce.com', '12.234.39.144', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'forums.perforce.com', '107.1.244.142', 'No HTTPS', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'meetings.perforce.com', '-', 'Unknown domain', '-', 'Unable to resolve domain name', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'mx2a.perforce.com', '-', 'Unknown domain', '-', 'Unable to resolve domain name', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'jira.perforce.com', '12.234.39.189', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'maillist.perforce.com', '12.234.39.153', 'No HTTPS', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'ppn.perforce.com', '107.1.244.181', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'public.perforce.com', '107.1.244.150', 'No HTTPS', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'mx3.perforce.com', '12.234.39.215', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'mx3c.perforce.com', '107.1.244.215', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'mx4c.perforce.com', '107.1.244.216', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'wiki.workshop.perforce.com', '107.1.244.150', 'No HTTPS', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'customer.perforce.com', '146.20.53.189', 'T/ A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'info.perforce.com', '199.15.215.191', 'T/ A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'Test timeout', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'git.workshop.perforce.com', '107.1.244.154', 'C', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Perforce', 'feedback.perforce.com', '169.55.254.51', 'F', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Perforce', 'kb.perforce.com', '12.234.39.172', 'B', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Perforce', 'answers.perforce.com', '23.61.194.218', 'T/ A-', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Perforce', 'answers.perforce.com', '23.61.194.178', 'T/ A-', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Perforce', 'perforce.com', '146.20.53.189', 'A+', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'swarm.public.perforce.com', '107.1.244.153', 'T/ B', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'Yes'] ,
['', 'Perforce', 'helix.perforce.com', '23.92.225.144', 'F', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'www-dev.perforce.com', '146.20.53.189', 'A+', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'training.perforce.com', '31.220.69.103', 'A-', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Perforce', 'updates.perforce.com', '12.234.39.176', 'B', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Perforce', 'cloud-d.perforce.com', '12.234.39.143', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'filehost.perforce.com', '107.1.244.159', 'No HTTPS', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'go.perforce.com', '199.15.215.8', 'No HTTPS', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'mx2.perforce.com', '-', 'Unknown domain', '-', 'Unable to resolve domain name', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'mx4a.perforce.com', '12.234.39.216', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'www.perforce.com', '146.20.53.189', 'A+', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'blog.perforce.com', '146.20.53.189', 'T/ A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'www.p4helix.perforce.com', '23.92.225.143', 'F', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'cloud.perforce.com', '12.234.39.145', 'B', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Perforce', 'cloud.perforce.com', '2002:0:0:0:0:0:cea:2791', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'wayside.perforce.com', '12.234.39.189', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'package.perforce.com', '107.1.244.180', 'A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'filehost-c.perforce.com', '107.1.244.159', 'No HTTPS', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'support-survey.perforce.com', '83.138.167.179', 'T/ A-', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Perforce', 'swarm.workshop.perforce.com', '107.1.244.153', 'B', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Perforce', 'mx2c.perforce.com', '-', 'Unknown domain', '-', 'Unable to resolve domain name', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'p4helix.perforce.com', '23.92.225.143', 'F', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'workshop.perforce.com', '107.1.244.150', 'No HTTPS', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'helixprotects.perforce.com', '54.83.53.94', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'www-test.perforce.com', '146.20.53.189', 'A+', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'mx3a.perforce.com', '12.234.39.215', 'Could not connect', '2017-02-17', 'Unable to connect to the server', 'Computer Software', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Perforce', 'www.helix.perforce.com', '23.92.225.144', 'F', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'udc.perforce.com', '12.234.39.176', 'B', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Perforce', 'cdist2.perforce.com', '52.84.239.42', 'A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'cdist2.perforce.com', '52.84.239.129', 'A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'cdist2.perforce.com', '52.84.239.79', 'A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'cdist2.perforce.com', '52.84.239.229', 'A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'cdist2.perforce.com', '52.84.239.89', 'A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'cdist2.perforce.com', '52.84.239.90', 'A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'cdist2.perforce.com', '52.84.239.54', 'A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Perforce', 'cdist2.perforce.com', '52.84.239.141', 'A', '2017-02-17', 'Ready', 'Computer Software', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
];
var chartDataSummary = [
['Grade', 'Number of sites', {role: 'style'}],
['A+', 4, 'color: Green'],
['A', 9, 'color: YellowGreen'],
['A-', 1, 'color: LightGreen'],
['B', 5, 'color: Orange'],
['C', 1, 'color: Orange'],
['T/ A', 3, 'color: Red'],
['T/ A-', 3, 'color: Red'],
['T/ B', 1, 'color: Red'],
['F', 5, 'color: Red'],
['No HTTPS', 9, 'color: Red'],
['Unknown domain', 4, 'color: Gray'],
['Could not connect', 13, 'color: Gray'],
];
var chartDataCountsByOrg = [
['Organization', {label: 'A+', type: 'number'}, {label: 'A', type: 'number'}, {label: 'A-', type: 'number'}, {label: 'B', type: 'number'}, {label: 'C', type: 'number'}, {label: 'D', type: 'number'}, {label: 'E', type: 'number'}, {label: 'T', type: 'number'}, {label: 'F', type: 'number'}, {label: 'No HTTPS', type: 'number'}, {label: 'Scan error', type: 'number'}, {label: 'Not scanned', type: 'number'}],
['Perforce', 4, 9, 1, 5, 1, null, null, 7, 5, 9, null, null],
];
