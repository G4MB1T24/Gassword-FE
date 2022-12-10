import CryptoJS from 'crypto-js'

const Decrypter = (password) => {
    const enc_key = localStorage.getItem("enc_key")
    if (!enc_key) {
        alert("No Enckey")
    }
    const Decrypt = CryptoJS.AES.decrypt(password, enc_key).toString(CryptoJS.enc.Utf8)
    return Decrypt
    
}

export default Decrypter