// WIFI
let submitWifi = document.getElementById('submit-wifi')

submitWifi.addEventListener('click', generateWifiQrCode)

function generateWifiQrCode() {
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('closeBtn');
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

    overlay.style.display = 'flex'
    closeBtn.style.display = 'flex'

    closeBtn.addEventListener('click', closeQr)
    
    function closeQr() {
            closeBtn.style.display = 'none'
            overlay.style.display = 'none'
            qrcodeContainer.innerHTML = ''
    }
}