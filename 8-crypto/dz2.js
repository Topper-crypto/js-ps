function encryptPassword(password) {
    if (!password) {
        return "";
    }      
    let mid = Math.floor(password.length / 2);
    let encryptedPassword = password.substring(mid) + password.substring(0, mid);
    return encryptedPassword;
}

function checkPassword(encryptedPassword, originalPassword) {  
    if (!encryptedPassword || !originalPassword) {
        return false;
    }
    let mid = Math.floor(encryptedPassword.length / 2);
    let decryptedPassword = encryptedPassword.substring(mid) + encryptedPassword.substring(0, mid);   
    return decryptedPassword === originalPassword;
}

let password = "example123";
let encrypted = encryptPassword(password);
console.log("Зашифрованный пароль:", encrypted);
console.log("Проверка пароля:", checkPassword(encrypted, password));