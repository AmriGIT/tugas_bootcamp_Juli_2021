
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
var fnRegister3 = (FullName,userName) =>({
    FullName,
    userName
})

var  arrayData   = [];
var addBtn = document.querySelector('.addBtn');
function dataku(FullName, userName) {
    this.FullName = FullName;
    this.userName = userName;
  }
  document.addEventListener("click", e =>{
      console.log(e);
      if(e.target.getAttribute("proses"))
      fnRegistred2()
  })

const fnRegistred2 = () =>{
    const user = document.form1.userName.value
    const fullName = document.form1.FullName.value
    const jk = document.form1.gender.value
    const agama = document.form1.agama.value
    const password = document.form1.password.value
    const passwordConf = document.form1.iPasswordConf.value
    const alamat = document.form1.alamat.value
    const hobi = document.querySelector("[name='hobbies']:checked")?.value
    if (!password == passwordConf) {
        alert("Isi Password tidak sama")
    }else{

        arrayData.push({
            user,
            fullName,
            jk,
            agama,
            hobi,
            alamat
        })
        console.table(arrayData)
        document.querySelector('table>tbody').innerHTML =""
        for (var index = 0; index < arrayData.length; index++) {
            const data = arrayData[index]
            document.querySelector('table>tbody').innerHTML +=`
            <tr>
            <td>${index+1}</td>
            <td>${data.user}</td>
            <td>${data.fullName}</td>
            <td>${data.jk}</td>
            <td>${data.agama}</td>
            <td>${data.hobi}</td>
            <td>${data.alamat}</td>
            
            </tr>
            `
            console.log(data.hobi)
        }
    }

    
}

const __init = () =>{
    fnRegister2()
}

