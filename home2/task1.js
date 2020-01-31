function crtPassword(len) {
    let password = "";
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
    for (let i = 0; i < len; i++) {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
}


function* genPassword(len) {
    yield crtPassword(len);
}


console.log(genPassword(4).next().value);
console.log(genPassword(8).next().value);
console.log(genPassword(16).next().value);
console.log(genPassword(32).next().value);
console.log(genPassword(64).next().value);
console.log(genPassword(256).next().value);