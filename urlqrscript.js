// URL
let submitUrl = document.getElementById('submit-url')

submitUrl.addEventListener('click', generateUrlQrCode)

function generateUrlQrCode() {
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('closeBtn');
    var qrcodeContainer = document.getElementById('qrcode');

    let data = document.getElementById('qr-input').value
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
