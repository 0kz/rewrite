
// 替换 "SURPLUS_STOCK":"0" 为 "SURPLUS_STOCK":"30000"
jsonData = $response.body.replace(/"SURPLUS_STOCK":"0"/g, '"SURPLUS_STOCK":"30000"').replace(/"SYSTEM_TIME":"([^"]+)"/g, '"SYSTEM_TIME":"2024-04-19 10:30:00"');

// 替换 "SYSTEM_TIME":"([^"]+)" 为 "SYSTEM_TIME":"2024-04-19 10:30:00"


$done({ body: JSON.stringify(obj) });
