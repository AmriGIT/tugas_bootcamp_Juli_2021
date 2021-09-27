
var list = []
var pageList = [];
var currentPage = 0;
var numberPerPage = 10;
var numberOfPages = 0;
const PusharrayDatas = (user, fullName, jk, agama, hobi, alamat) => {
    list.push({
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
function makeList() {
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
    } else {

        PusharrayDatas(user, fullName, jk, agama, hobi, alamat)
        document.querySelector('table>tbody').innerHTML = ""
        for (x = 0; x < list.length; x++) {
            const data = list[x]
            document.querySelector('table>tbody').innerHTML += `
            <tr>
            <td value='${x + 1}'>${x + 1}</td>
            <td>${data.user}</td>
            <td>${data.fullName}</td>
            <td>${data.jk}</td>
            <td>${data.agama}</td>
            <td>${data.hobi}</td>
            <td>${data.alamat}</td>

            </tr>
            `
            numberOfPages = getNumberOfPages();
        }

    }
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

function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
}

function drawList() {
    // const nomr = document.getElementsByTagName('td').value;
    document.getElementById("list").innerHTML = "";
    for (r = 0; r < pageList.length; r++) {
        document.getElementById("list").innerHTML += Object.values(pageList[r]) + "<br/>";
    }
}

function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

function load() {
    makeList();
    loadList();
}

window.onload = load;
