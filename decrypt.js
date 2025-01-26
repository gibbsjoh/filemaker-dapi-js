function hexToAscii(hex) {
    let asciiStr = '';
    for (let i = 0; i < hex.length; i += 2) {
        asciiStr += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return asciiStr;
}

function decryptCreds(theString){
    var theDecryptedItem = CryptoJS.AES.decrypt(theString, "MySecret");
    var thePlaintext = theDecryptedItem.toString(CryptoJS.AES.Utf8)
    thePlaintext = hexToAscii(thePlaintext);
    //console.log(thePlaintext)
    return thePlaintext;

}
