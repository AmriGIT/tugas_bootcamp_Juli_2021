
var list = []
var pageList = [];
var currentPage = 1;
var numberPerPage = 5;
var numberOfPages = 1;
let hobbies =[];

const PusharrayDatas = (nomor, user, fullName, jk, agama, hobi, alamat) => {
    list.push({
        nomor,
        user,
        fullName,
        jk,
        agama,
        hobi,
        alamat
    })
}
document.addEventListener("click", e => {
    console.log(e);
    if (e.target.getAttribute("proses"))
    makeList()
    
})
const makeList = () => {
    const nomor = list.length+1;
    const user = document.form1.userName.value
    const fullName = document.form1.FullName.value
    const jk = document.form1.gender.value
    const agama = document.form1.agama.value
    const password = document.form1.password.value
    const passwordConf = document.form1.iPasswordConf.value
    const alamat = document.form1.alamat.value
    const hobi = document.querySelectorAll("[type='checkbox']:checked")

    if (!password == passwordConf) {
        alert("Isi Password tidak sama")
    } else {
        for (let index = 0; index < hobi.length; index++) {
      
            hobbies += hobi[index].value
            
        }

        let hobiku = [
            hobbies
        ]
        console.log(hobiku)
        PusharrayDatas(nomor,user, fullName, jk, agama, hobbies, alamat)
        loadList()
        for (x = 0; x < list.length; x++) {
            numberOfPages = getNumberOfPages();
        }
    }

}

function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
}

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = numberOfPages;
    loadList();
}



function drawList() {
    
    document.querySelector('table>tbody').innerHTML = " "
    for (r = 0; r < pageList.length; r++) {
        document.querySelector('table>tbody').innerHTML += `
        <tr>
        <td >${pageList[r].nomor}</td>
        <td>${pageList[r].user}</td>
        <td>${pageList[r].fullName}</td>
        <td>${pageList[r].jk}</td>
        <td>${pageList[r].agama}</td>
        <td>${pageList[r].hobi}</td>
        <td>${pageList[r].alamat}</td>

        </tr>
        `
    }

    // if(currentPage <=  1) currentPage = 1
    // if(currentPage > getNumberOfPages()) currentPage = getNumberOfPages()
    // document.querySelector("#page").innerHTML = currentPage;
}

function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;

}

function load() {
    loadList();
        // if(currentPage <  1) currentPage = 1
    // if(currentPage > getNumberOfPages()) currentPage = getNumberOfPages()
    // document.querySelector("#page").innerHTML = currentPage;
    
}

let users = []
const fn1 = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

const fn2 = async () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

const callAPI = async () => {
    console.warn("diatas fn1");
    console.time("FN1")
    users = fn1()

    console.log(users[0]);
    console.timeEnd("FN1")

    console.warn("diatas fn2");
    console.time("FN2")
    users2 = await fn2()
    // console.log("user2 length:", users2.length);
    console.log(users2[0].name);
    console.log (users)
    console.timeEnd("FN2")
}
callAPI()

window.onload = load;
