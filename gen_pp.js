const qrcode = require('qrcode')
const generatePayload = require('promptpay-qr')
const mobileNumber = '0815782792' //รหัสพร้อมเพย์เช่นเบอร์โทรหรือรหัสประชาชน
const amount = 10 //ราคาพื้นฐานที่จะทำการโอน
const payload = generatePayload(mobileNumber , {amount})

//ตำแหน่งของรูป qrcode ที่จะสร้างมา

qrcode.toFile('./imageQR/result.png',payload,function(err){
    if (err) throw err
    console.log("Complete");
})