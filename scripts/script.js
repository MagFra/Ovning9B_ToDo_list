const form = document.querySelector('#inputForm');
const formBtn = document.querySelector('#formBtn');
const output = document.querySelector('#output');
// ================================================
const list = []; // To store the ToDo:s.
// ================================================


form.addEventListener('submit', (e) => {
    e.preventDefault();

    toList();

    e.target.reset();

    console.log(list);
})


// ================================================
function toList() {
    let text = document.querySelector('#text').value;
    let klart = document.querySelector('#klart').value;
    list.push(new ToDo(text, klart));

    // Anropa "Skriv ut" läggtill till lista.
}
// ================================================


// ================================================
function formatera(index) {
    let struken = '';
    if (list[+index].done) {
        struken = ' struken';
    }
    return `<div id="${+index}" class="todo${struken}">${list[+index].output}</div>`;
}
// ================================================


// ================================================
class ToDo {
    done = false;
    constructor(text, datum) {
        this.text = text;
        this.datum = datum;
    }

    output() {
        return `<p>${this.text}</p><p>${this.datum}</p>`;
    }
}