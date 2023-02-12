let s = document.querySelector('.select');
let w = document.querySelector('.wrapper');

s.addEventListener('click', function () {
    showWrapper()
})

w.addEventListener('click', function (event) {
    s.textContent = event.target.textContent;
    showWrapper()
})

function showWrapper() {
    if (w.hidden == true) {
        w.hidden = false;
    } else {
        w.hidden = true;
    }

}