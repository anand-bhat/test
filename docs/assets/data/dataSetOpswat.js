var dataSet = [
['', '-', 'citrix.opswat.com', '198.27.132.13', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'gearssdk.opswat.com', '0:0:0:0:0:0:0:1', 'Scan error', '2016-10-31', 'IP address is from private address space (RFC 1918)', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'gearssdk.opswat.com', '127.0.0.1', 'Scan error', '2016-10-31', 'IP address is from private address space (RFC 1918)', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'hash04.metascan-online.com', '54.93.80.44', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'hash01.metadefender.com', '54.86.221.210', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'mail.opswat.com', '97.74.135.111', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'metascanclient.metadefender.com', '54.251.107.218', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'o1.hermes.opswat.com', '198.21.2.224', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'files.opswat.com', '198.27.132.7', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'scan.metadefender.com', '198.27.132.45', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'Test failure', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'scan46.metadefender.com', '198.27.132.46', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'Test failure', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'scan51.metadefender.com', '198.27.132.51', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'Test failure', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'offlineupdate-us.dl.opswat.com', '54.183.164.118', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'offlineupdate2.dl.opswat.com', '54.183.164.118', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'metascan.dl.opswat.com', '54.174.97.110', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'images.cdn.opswat.com', '23.61.194.51', 'T/ A-', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'images.cdn.opswat.com', '23.61.194.187', 'T/ A-', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'my.opswat.com', '104.218.200.95', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'opswat.com', '52.8.150.78', 'A+', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'offlineupdate05.dl.opswat.com', '54.229.143.120', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'onlineupdate02.dl.opswat.com', '54.72.89.160', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'live.metadefender.com', '52.9.94.16', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'live.metadefender.com', '52.8.188.201', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'hashlookup.metascan-online.com', '52.32.88.187', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'hashlookup.metascan-online.com', '52.42.180.225', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'metadefender.com', '52.9.77.220', 'B', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No'] ,
['', '-', 'metadefender.com', '52.9.93.252', 'B', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No'] ,
['', '-', 'software.opswat.com', '54.241.248.142', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'api.metadefender.com', '52.37.83.85', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'api.metadefender.com', '52.24.231.228', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'api.metadefender.com', '52.41.156.9', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'api.metadefender.com', '52.88.237.135', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'staging.metadefender.com', '52.9.75.5', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'staging.metadefender.com', '54.183.9.113', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'trust.opswat.com', '54.187.44.163', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'trust.opswat.com', '35.160.228.21', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'trust.opswat.com', '52.89.61.71', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'watch.opswat.com', '54.69.33.194', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'watch.opswat.com', '54.200.130.28', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'certification.opswat.com', '52.8.150.78', 'A+', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.opswat.com', '54.183.181.249', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.opswat.com', '52.52.5.4', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'hermes.opswat.com', '167.89.125.30', 'T/ B', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No'] ,
['', '-', 'gears.opswat.com', '52.38.97.207', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'gears.opswat.com', '54.69.144.5', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'cdn.metadefender.com', '52.84.213.210', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'cdn.metadefender.com', '52.84.213.227', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'cdn.metadefender.com', '52.84.213.193', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'cdn.metadefender.com', '52.84.213.131', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'cdn.metadefender.com', '52.84.213.57', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'cdn.metadefender.com', '52.84.213.36', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'cdn.metadefender.com', '52.84.213.188', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'cdn.metadefender.com', '52.84.213.170', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'metascan-online.com', '52.9.77.220', 'B', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No'] ,
['', '-', 'metascan-online.com', '52.9.93.252', 'B', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No'] ,
['', '-', 'hashlookup.metadefender.com', '52.37.83.85', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'hashlookup.metadefender.com', '52.24.231.228', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'hashlookup.metadefender.com', '52.41.156.9', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'hashlookup.metadefender.com', '52.88.237.135', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'metascan02.dl.opswat.com', '54.72.13.34', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'scanner.metadefender.com', '54.241.252.195', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'onlineupdate.dl.opswat.com', '54.67.6.71', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'staging.opswat.com', '54.67.100.176', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'staging.opswat.com', '52.8.81.168', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'ipscan.metadefender.com', '52.37.83.85', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'ipscan.metadefender.com', '52.24.231.228', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'ipscan.metadefender.com', '52.41.156.9', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'ipscan.metadefender.com', '52.88.237.135', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'scan.metascan-online.com', '198.27.132.45', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'Test failure', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'go.opswat.com', '136.146.44.18', 'A-', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', '-', 'www2.opswat.com', '136.147.104.34', 'T/ A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'portal.opswat.com', '54.93.195.50', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'files.cdn.opswat.com', '23.61.194.51', 'T/ A-', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'files.cdn.opswat.com', '23.61.194.187', 'T/ A-', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'www.metadefender.com', '52.84.213.182', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.metadefender.com', '52.84.213.88', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.metadefender.com', '52.84.213.228', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.metadefender.com', '52.84.213.163', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.metadefender.com', '52.84.213.196', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.metadefender.com', '52.84.213.77', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.metadefender.com', '52.84.213.137', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.metadefender.com', '52.84.213.136', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'scan49.metadefender.com', '198.27.132.49', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'offlineupdate04.dl.opswat.com', '54.183.164.118', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'ipscan.metascan-online.com', '52.32.88.187', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'ipscan.metascan-online.com', '52.42.180.225', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'hash03.metadefender.com', '54.255.209.125', 'Could not connect', '2016-10-31', 'Unable to connect to the server', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', '-', 'videos.cdn.opswat.com', '23.61.194.51', 'T/ A-', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'videos.cdn.opswat.com', '23.61.194.187', 'T/ A-', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'onlineupdates.cdn.opswat.com', '23.61.194.51', 'T/ A-', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'onlineupdates.cdn.opswat.com', '23.61.194.187', 'T/ A-', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes'] ,
['', '-', 'api.metascan-online.com', '52.32.88.187', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'api.metascan-online.com', '52.42.180.225', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'myportal.opswat.com', '54.93.195.50', 'A', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', '-', 'www.metascan-online.com', '52.9.77.220', 'B', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No'] ,
['', '-', 'www.metascan-online.com', '52.9.93.252', 'B', '2016-10-31', 'Ready', '-', '-', '-', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No'] ,
];
var chartData = [
['Grade', 'Number of sites', { role: 'style' }],
['A+', 2, 'color: Green'],
['A', 64, 'color: YellowGreen'],
['A-', 1, 'color: LightGreen'],
['B', 6, 'color: Orange'],
['T/ A', 1, 'color: Red'],
['T/ A-', 8, 'color: Red'],
['T/ B', 1, 'color: Red'],
['Scan error', 2, 'color: Gray'],
['Could not connect', 11, 'color: Gray'],
];
