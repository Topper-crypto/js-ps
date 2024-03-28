
function encryptPassword(password) {
    const passwordArray = password.split('');
    const mid = Math.floor(passwordArray.length / 2);
    
    for (let i = 0; i < mid; i++) {
        const temp = passwordArray[i];
        passwordArray[i] = passwordArray[mid + i];
        passwordArray[mid + i] = temp;
    }

    return passwordArray.join('');
}

function checkPassword(encryptedPassword, originalPassword) {
    if (!encryptedPassword || !originalPassword) {
        return false;
    }

    function crypt(password) {
        const passwordArray = password.split('');
        const mid = Math.floor(passwordArray.length / 2);
        for (let i = 0; i < mid; i++) {
            const temp = passwordArray[i];
            passwordArray[i] = passwordArray[mid + i];
            passwordArray[mid + i] = temp;
        }
        return passwordArray.join('');
    }

    return originalPassword === crypt(encryptedPassword);
}

const password = "password";
const encryptedPassword = encryptPassword(password);
console.log("Зашифрованный пароль:", encryptedPassword);

const isPasswordCorrect = checkPassword(encryptedPassword, password);
console.log("Пароль верный?", isPasswordCorrect);
