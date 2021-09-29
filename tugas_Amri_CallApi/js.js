
var list = []
var pageList = [];
var currentPage = 1;
var numberPerPage = 10;
var numberOfPages = 1;
var usersApi =[]

const fn2 = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}



const PusharrayDatas = (nomor, name, username, email, city) => {
    list.push({
        nomor,
        name,
        username,
        email,
        address : {
            city
        }
    })
}
document.addEventListener("click", e => {
    console.log(e);
    if (e.target.getAttribute("proses"))
        makeList()

})


const callAPI = async () => {
    list = await fn2()
    console.log(list.length+1)
    loadList()
    for (let index = 0; index < list.length; index++) {
        console.log(list[index]);
        console.log(list[index].username);
        console.log(list[index].email);
        console.log(list[index].address.city)
        numberOfPages = getNumberOfPages();
        // const Name = list[index].name;
        // const username = list[index].username;
        // const email =list[index].email;
        // const city = list[index].address.city
        
    }

    
    console.timeEnd("FN1")
}
const makeList = () => {
    nomor = list.length+1
    const name = document.form1.name.value
    const username = document.form1.username.value
    const email = document.form1.email.value
    const Newcity = document.form1.city.value
    PusharrayDatas(nomor, name, username, email, Newcity)
    loadList()
    
    for (x = 0; x < list.length; x++) {
        numberOfPages = getNumberOfPages();
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


const drawList =  () => {
    
    const nomor1 = list.length
    document.querySelector('table>tbody').innerHTML = " "
    for (r = 0; r < pageList.length; r++) {
        document.querySelector('table>tbody').innerHTML += `
        <tr>
        <td >${r+1}</td>
        <td>${pageList[r].name}</td>
        <td>${pageList[r].username}</td>
        <td>${pageList[r].email}</td>
        <td>${pageList[r].address.city}</td>


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
    callAPI();

}



window.onload = load;
