
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


const fnRegister = () =>{
    const FName = document.form1.FullName.value
    const age = document.form1.Age.value
    console.log(FName)
    console.log(age)
    let view = document.querySelector(".view")
    view.innerHTML = "Full Nama : "+FName + "<br> "+"Usia : " + age
}   

const fnRegister2 = (FullName,iDate,iEmail, Age) =>{
    FullName,
    iDate,
    iEmail,
    Age
    let view = document.querySelector(".view")
    view.innerHTML = "Full Nama : "+FullName + "<br> " + " Tanggal Lahir : "+ iDate +"<br>" +" Email "+ iEmail
}
const fnRegister3 = (FullName,userName) =>({
    FullName,
    userName
})

const fnRegistred = () =>{
    const user = document.form1.userName.value
    const fullName = document.form1.FullName.value

    var array = fnRegister3(fullName,user)

      let isiNama = document.querySelector(".isiNama")
      let isiUser = document.querySelector(".isiuser")
      isiNama.innerHTML += array.FullName + "</br>"
      isiUser.innerHTML += array.userName+ "</br>"
      
    
}



