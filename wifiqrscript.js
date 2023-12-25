// WIFI
let submitWifi = document.getElementById('submit-wifi')

submitWifi.addEventListener('click', generateWifiQrCode)

function generateWifiQrCode() {
    var qrcodeContainer = document.getElementById('qrcode');

    var wifiInfo = {
        ssid: document.getElementById("ssid").value.trim(),
        password: document.getElementById("password").value.trim(),
        encryption: document.getElementById("encryption").value.trim()
    }
    console.log(wifiInfo)
    var data = `WIFI:T:${wifiInfo.encryption};S:${wifiInfo.ssid};P:${wifiInfo.password};;`;
    var qrcode = new QRCode(qrcodeContainer, {
        text: data,
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff',
    });
}