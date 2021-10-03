


document.addEventListener("click", e => {
    console.log(e);
    if (e.target.getAttribute("proses"))
    fnRegistred2()
})

var arrayData = [];
const PusharrayDatas = (user, fullName, jk, agama, hobi, alamat) => {
    arrayData.push({
        user,
        fullName,
        jk,
        agama,
        hobi,
        alamat
    })
}
var numbpages = Math.ceil(arrayData.length / records_per_page);
const fnRegistred2 = (page) => {
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
        var btn_next = document.getElementById("btn_next");
        var btn_prev = document.getElementById("btn_prev");
        var listing_table = document.getElementById("listingTable");
        var page_span = document.getElementById("page");

        if (page < 1) page = 1;
        if (page > numbpages) page = numbpages;

        PusharrayDatas(user, fullName, jk, agama, hobi, alamat)
        document.querySelector('table>tbody').innerHTML = ""
        for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
            const data = arrayData[i]
            document.querySelector('table>tbody').innerHTML += `
            <tr>
            <td>${i + 1}</td>
            <td>${data.user}</td>
            <td>${data.fullName}</td>
            <td>${data.jk}</td>
            <td>${data.agama}</td>
            <td>${data.hobi}</td>
            <td>${data.alamat}</td>

            </tr>
            `
        }
        page_span.innerHTML = page;

        if (page == 1) {
            btn_prev.style.visibility = "hidden";
        } else {
            btn_prev.style.visibility = "visible";
        }

        if (page == numPages()) {
            btn_next.style.visibility = "hidden";
        } else {
            btn_next.style.visibility = "visible";
        }

    }


}


var current_page = 1;
var records_per_page = 5;


function prevPage() {
    if (current_page > 1) {
        current_page--;
        fnRegistred2(current_page);
    }
}

function nextPage() {
    if (current_page < numPages()) {
        current_page++;
        fnRegistred2(current_page);
    }
}



function numPages() {
    return Math.ceil(arrayData.length / records_per_page);
}



const __init = () => {
    fnRegistred2(1)
}

