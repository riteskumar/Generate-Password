const passwordBox = document.querySelector("#Password");

const len = 16;
const button = document.querySelector("button");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "1234567890";
const symb = "@#$%^&*()_+~{}[]></-=?";
const allLen = upperCase + lowerCase + num + symb;
const createPass = function () {
	let pass = "";
	pass += upperCase[Math.floor(Math.random() * upperCase.length)];
	pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	pass += num[Math.floor(Math.random() * num.length)];
	pass += symb[Math.floor(Math.random() * symb.length)];
	while (len > pass.length) {
		pass += allLen[Math.floor(Math.random() * allLen.length)];
	}
	passwordBox.value = pass;
};
function copyPass() {
	passwordBox.select();
	navigator.clipboard.writeText(passwordBox.value);
    if(passwordBox.value !== ''){
        alert("Password Copied");
    }	
}