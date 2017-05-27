var dataSet = [
['', 'Silent Circle', 'phone.silentcircle.com', '54.173.57.42', 'B', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'No', 'No', 'Yes', 'No'] ,
['', 'Silent Circle', 'business.silentcircle.com', '139.162.193.54', 'A', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'www.silentcircle.com', '139.162.193.54', 'A', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'silentcircle.com', '139.162.193.54', 'A', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'blog.silentcircle.com', '139.162.193.54', 'A', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'home.silentcircle.com', '139.162.193.54', 'A', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'stats.silentcircle.com', '52.29.106.166', 'A+', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'stats.silentcircle.com', '52.59.86.152', 'A+', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'accounts.silentcircle.com', '52.28.141.209', 'A+', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'accounts.silentcircle.com', '52.28.113.105', 'A+', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'accounts.silentcircle.com', '52.29.250.134', 'A+', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
['', 'Silent Circle', 'accounts.silentcircle.com', '54.93.157.151', 'A+', '2017-05-27', 'Ready', 'Communications', '?', '?', '-', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'] ,
];
var chartDataSummary = [
['Grade', 'Number of sites', {role: 'style'}],
['A+', 6, 'color: Green'],
['A', 5, 'color: YellowGreen'],
['B', 1, 'color: Orange'],
];
var chartDataCountsByOrg = [
['Organization', {label: 'A+', type: 'number'}, {label: 'A', type: 'number'}, {label: 'A-', type: 'number'}, {label: 'B', type: 'number'}, {label: 'C', type: 'number'}, {label: 'D', type: 'number'}, {label: 'E', type: 'number'}, {label: 'T', type: 'number'}, {label: 'F', type: 'number'}, {label: 'No HTTPS', type: 'number'}, {label: 'Scan error', type: 'number'}, {label: 'Not scanned', type: 'number'}],
['Silent Circle', 6, 5, null, 1, null, null, null, null, null, null, null, null],
];
