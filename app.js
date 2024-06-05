
function addorder() {

    var result = document.getElementById("menu").value

    if (result == '') {
        alert("Enter a Item ")
    }
    else {

        var print = document.getElementById("print")
        var list = document.createElement("li")
        list.textContent = result
list.classList.add("link")
        print.appendChild(list)
        document.querySelector("#menu").value = ""

    }
}

function remove() {
    var a = document.getElementById("print")
    a.removeChild(a.lastElementChild)
}
