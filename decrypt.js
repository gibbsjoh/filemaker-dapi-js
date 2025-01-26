function hexToAscii(hex) {
    let asciiStr = '';
    for (let i = 0; i < hex.length; i += 2) {
        asciiStr += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return asciiStr;
}

function decryptCreds(theString){
    var theDecryptedItem = CryptoJS.AES.decrypt(theString, "mySecret");
    var thePlaintext = hexToAscii(theDecryptedItem);
    return thePlaintext;

}
// var encryptedAES = CryptoJS.AES.encrypt("Message", "LutzShampoo");
// console.log(encryptedAES);
// theString = encryptedAES.toString(CryptoJS.AES.Utf8);
// console.log(theString);

// //decrypt
// var thePassword = CryptoJS.AES.decrypt(theString, "LutzShampoo");
// //console.log(thePassword.toString(CryptoJS.AES.Utf8));
// var thePlaintext = thePassword.toString(CryptoJS.AES.Utf8);
// thePlaintext = hexToAscii(thePlaintext);
// console.log(thePlaintext);
// //var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, "My Secret Passphrase");

