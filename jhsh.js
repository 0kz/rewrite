
 [rewrite_local]
 # 掌上公交微信小程序去除广告（2022-03-01）
 https:\/\/yunbusiness\.ccb\.com\/clp_coupon\/txCtrl\?txcode=A3341C113$ url script-response-body https://raw.githubusercontent.com/0kz/rewrite/master/jhsh.js

 [mitm]
 hostname=yunbusiness.ccb.com

 ***********************************/
// 替换 "SURPLUS_STOCK":"0" 为 "SURPLUS_STOCK":"30000"
jsonData = $response.body.replace(/"SURPLUS_STOCK":"0"/g, '"SURPLUS_STOCK":"30000"').replace(/"SYSTEM_TIME":"([^"]+)"/g, '"SYSTEM_TIME":"2024-04-19 10:30:00"');

// 替换 "SYSTEM_TIME":"([^"]+)" 为 "SYSTEM_TIME":"2024-04-19 10:30:00"


$done({ body: JSON.stringify(obj) });
