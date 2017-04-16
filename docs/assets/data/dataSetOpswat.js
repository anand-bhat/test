var dataSet = [
['', 'Opswat', 'citrix.opswat.com', '198.27.132.13', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'gearssdk.opswat.com', '0:0:0:0:0:0:0:1', 'Scan error', '2017-04-12', 'IP address is from private address space (RFC 1918)', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'gearssdk.opswat.com', '127.0.0.1', 'Scan error', '2017-04-12', 'IP address is from private address space (RFC 1918)', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'hash01.metadefender.com', '54.86.221.210', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'hash03.metadefender.com', '54.255.209.125', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'hermes.opswat.com', '167.89.125.30', 'T/ B', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Opswat', 'files.cdn.opswat.com', '165.254.47.130', 'T/ A-', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Opswat', 'files.cdn.opswat.com', '165.254.47.107', 'T/ A-', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Opswat', 'images.cdn.opswat.com', '165.254.47.130', 'T/ A-', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Opswat', 'images.cdn.opswat.com', '165.254.47.107', 'T/ A-', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Opswat', 'api.metadefender.com', '35.166.143.146', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'api.metadefender.com', '52.88.249.12', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'api.metadefender.com', '54.149.120.7', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'hashlookup.metascan-online.com', '52.38.123.50', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'hashlookup.metascan-online.com', '54.187.173.81', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'hashlookup.metascan-online.com', '54.186.233.44', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'live.metadefender.com', '52.9.94.16', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'live.metadefender.com', '52.8.188.201', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'metascan.dl.opswat.com', '54.174.97.110', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'o1.hermes.opswat.com', '198.21.2.224', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'metascan02.dl.opswat.com', '54.72.13.34', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'ipscan.metascan-online.com', '52.38.123.50', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'ipscan.metascan-online.com', '54.187.173.81', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'ipscan.metascan-online.com', '54.186.233.44', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'offlineupdate-us.dl.opswat.com', '54.183.164.118', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'my.opswat.com', '104.218.200.95', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'offlineupdate04.dl.opswat.com', '54.183.164.118', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'offlineupdate2.dl.opswat.com', '54.183.164.118', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'onlineupdate02.dl.opswat.com', '54.72.89.160', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scan49.metadefender.com', '198.27.132.49', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scanner.metadefender.com', '54.241.252.195', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'onlineupdates.cdn.opswat.com', '165.254.47.130', 'T/ A-', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Opswat', 'onlineupdates.cdn.opswat.com', '165.254.47.107', 'T/ A-', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Opswat', 'portal.opswat.com', '54.153.87.163', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'staging.opswat.com', '52.8.81.168', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'staging.opswat.com', '54.241.152.173', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'software.opswat.com', '54.241.248.142', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scan.metadefender.com', '35.166.143.146', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scan.metadefender.com', '52.88.249.12', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scan.metadefender.com', '54.149.120.7', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'videos.cdn.opswat.com', '23.61.194.51', 'T/ A-', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Opswat', 'videos.cdn.opswat.com', '23.61.194.187', 'T/ A-', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No'] ,
['', 'Opswat', 'cdn.metadefender.com', '52.84.0.58', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'cdn.metadefender.com', '52.84.0.40', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'cdn.metadefender.com', '52.84.0.244', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'cdn.metadefender.com', '52.84.0.16', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'cdn.metadefender.com', '52.84.0.70', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'cdn.metadefender.com', '52.84.0.184', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'cdn.metadefender.com', '52.84.0.64', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'cdn.metadefender.com', '52.84.0.218', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'watch.opswat.com', '54.69.33.194', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'watch.opswat.com', '54.149.188.184', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'www.metadefender.com', '52.9.94.16', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'www.metadefender.com', '52.8.188.201', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'go.opswat.com', '136.146.44.18', 'A-', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No'] ,
['', 'Opswat', 'certification.opswat.com', '52.8.150.78', 'A+', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'files.opswat.com', '198.27.132.7', 'C', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'metascanclient.metadefender.com', '54.251.107.218', 'No HTTPS', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'www.opswat.com', '54.183.254.224', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'www.opswat.com', '52.52.5.4', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'mail.opswat.com', '68.178.252.115', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'mail.opswat.com', '97.74.135.111', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'mail.opswat.com', '97.74.135.218', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'mail.opswat.com', '72.167.218.192', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'mail.opswat.com', '173.201.193.200', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'myportal.opswat.com', '54.153.87.163', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'metadefender.com', '52.9.77.220', 'B', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'metadefender.com', '52.9.93.252', 'B', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'offlineupdate05.dl.opswat.com', '54.229.143.120', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'hashlookup.metadefender.com', '35.166.143.146', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'hashlookup.metadefender.com', '52.88.249.12', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'hashlookup.metadefender.com', '54.149.120.7', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'ipscan.metadefender.com', '35.166.143.146', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'ipscan.metadefender.com', '52.88.249.12', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'ipscan.metadefender.com', '54.149.120.7', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scan46.metadefender.com', '198.27.132.46', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'staging.metadefender.com', '54.183.41.192', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'staging.metadefender.com', '52.9.75.5', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scan.metascan-online.com', '52.38.123.50', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scan.metascan-online.com', '54.187.173.81', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scan.metascan-online.com', '54.186.233.44', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'onlineupdate.dl.opswat.com', '54.67.6.71', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'www.metascan-online.com', '52.9.77.220', 'B', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'www.metascan-online.com', '52.9.93.252', 'B', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'hash04.metascan-online.com', '54.93.80.44', 'Could not connect', '2017-04-12', 'Unable to connect to the server', 'Computer Security', '?', '?', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'] ,
['', 'Opswat', 'gears.opswat.com', '54.69.196.78', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'gears.opswat.com', '52.36.20.216', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'metascan-online.com', '52.9.77.220', 'B', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'metascan-online.com', '52.9.93.252', 'B', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'scan51.metadefender.com', '198.27.132.51', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'www2.opswat.com', '136.147.96.33', 'T/ A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'trust.opswat.com', '104.192.142.99', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'trust.opswat.com', '104.192.142.100', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'api.metascan-online.com', '52.38.123.50', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'api.metascan-online.com', '54.187.173.81', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Opswat', 'api.metascan-online.com', '54.186.233.44', 'A', '2017-04-12', 'Ready', 'Computer Security', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
];
var chartDataSummary = [
['Grade', 'Number of sites', {role: 'style'}],
['A+', 1, 'color: Green'],
['A', 61, 'color: YellowGreen'],
['A-', 1, 'color: LightGreen'],
['B', 6, 'color: Orange'],
['C', 1, 'color: Orange'],
['T/ A', 1, 'color: Red'],
['T/ A-', 8, 'color: Red'],
['T/ B', 1, 'color: Red'],
['No HTTPS', 1, 'color: Red'],
['Scan error', 2, 'color: Gray'],
['Could not connect', 13, 'color: Gray'],
];
var chartDataCountsByOrg = [
['Organization', {label: 'A+', type: 'number'}, {label: 'A', type: 'number'}, {label: 'A-', type: 'number'}, {label: 'B', type: 'number'}, {label: 'C', type: 'number'}, {label: 'D', type: 'number'}, {label: 'E', type: 'number'}, {label: 'T', type: 'number'}, {label: 'F', type: 'number'}, {label: 'No HTTPS', type: 'number'}, {label: 'Scan error', type: 'number'}, {label: 'Not scanned', type: 'number'}],
['Opswat', 1, 61, 1, 6, 1, null, null, 10, null, 1, 2, null],
];
