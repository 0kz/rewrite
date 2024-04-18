const url = $request.url;
if (!$response.body) $done({});
let jsonData = JSON.parse($response.body);

// 替换 "SURPLUS_STOCK":"0" 为 "SURPLUS_STOCK":"30000"
jsonData = jsonData.replace(/"SURPLUS_STOCK":"0"/g, '"SURPLUS_STOCK":"30000"');

// 替换 "SYSTEM_TIME":"([^"]+)" 为 "SYSTEM_TIME":"2024-04-19 10:30:00"
jsonData = jsonData.replace(/"SYSTEM_TIME":"([^"]+)"/g, '"SYSTEM_TIME":"2024-04-19 10:30:00"');


$done({ body: JSON.stringify(obj) });
