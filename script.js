
const toast = document.getElementById('toast');
function encrypt() {
    var text = document.getElementById("inputText").value;
    var key = document.getElementById("inputKey").value;
    var div = document.getElementById("encDiv");

    div.style = "display:block;"

    var encryptedText = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById("encrypted").value = encryptedText;
}

function decrypt() {
    var encryptedText = document.getElementById("inputText").value;
    var key = document.getElementById("inputKey").value;
    var div = document.getElementById("decDiv");

    div.style = "display:block;"

    var decryptedBytes = CryptoJS.AES.decrypt(encryptedText, key);
    var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("decrypted").value = decryptedText;
}
function copyEncText() {
    var copyText = document.getElementById("encrypted");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
    showToast("Copied the text: " + copyText.value);
}
function copyDecText() {

    var copyText = document.getElementById("decrypted");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
    showToast("Copied the text: " + copyText.value);
}

function showToast(message) {
    // Set the message

    toast.innerText = message;
    // Show the toast
    toast.style.display = 'block';
    // Hide the toast after 3 seconds
    setTimeout(function () {
        toast.style.display = 'none';
    }, 3000);
}

