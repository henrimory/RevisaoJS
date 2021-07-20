window.addEventListener('load', start);
function start(){
    let nameInput = document.querySelector('#nameInput');
    nameInput.addEventListener('keyup', countLetters);

    let form = document.querySelector('form');
    form.addEventListener('submit', cancelLoad);

    function cancelLoad(evento){
        evento.preventDefault();

    }


    function countLetters(event){
        let letters = event.target.value;
        
        let span = document.getElementById('nameSize');
        span.textContent = letters.length;
    }
}