let names = [
    "joão",
    "maria",
    "julia",
    "giorgian",
    'socorro',
    "júnior",
    "joão"
]



function loadNames() {

    let listItems = ''

    for (indice in names) {

        let name = names[indice];

        listItems += `
        <li class="list-group-item">
        ${name}
        </li>`
    }

    document.getElementById("list").innerHTML = listItems;
}

function searchNames() {

    let search = document.getElementById("campName").value;
    let listItems = ''

    for (indice in names) {

        let name = names[indice];
        if (search == name) {
            listItems += `
        <li class="list-group-item">
        ${name}
        </li>`
        }
    }
    document.getElementById("list").innerHTML = listItems;
}