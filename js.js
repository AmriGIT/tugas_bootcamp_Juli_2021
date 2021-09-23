
function clickButton() {
    let halamanUtama = document.querySelector(".halamanUtama")
    let divLogin = document.querySelector(".login")
    const username = document.fLogin.username
    const password = document.fLogin.password
    console.log(username.value);
    console.log(password.value);
    username.add
    if (username.value == "AmriFathoni" && password.value == "123456") {
        halamanUtama.classList.remove("hiden")
        divLogin.classList.add("hiden")

    } else {
        alert("Username And Password Wrong!!")
        username.value = ""
        password.value = ""
    }
}