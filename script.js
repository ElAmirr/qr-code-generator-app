// Url
function openUrlTab() {
    let url = 'https://magnificent-zabaione-97bb1a.netlify.app/qr_type/url.html'
    window.open(url, '_blank')
}

let openUrlTabButton = document.getElementById('openUrlTabButton')

openUrlTabButton.addEventListener('click', openUrlTab)

// Wifi
function openWifiTab() {
    let url ='https://magnificent-zabaione-97bb1a.netlify.app/qr_type/wifi.html'
    window.open(url, '_blank')
}

let openWifiTabButton = document.getElementById('openWifiTabButton')

openWifiTabButton.addEventListener('click', openWifiTab)

// Pdf
function openPdfTab() {
    let url ='https://magnificent-zabaione-97bb1a.netlify.app/qr_type/pdf.html'
    window.open(url, '_blank')
}

let openPdfTabButton = document.getElementById('openPdfTabButton')
openPdfTabButton.addEventListener('click', openPdfTab)