function myFunction() {
    let answer =+ document.getElementById('input').value;
    if(typeof answer !=='number') {
        document.getElementById('javob').innerHTML = 'Siz son kiritmadingiz.Xatolik';
    }
    if ((answer %3 === 0)&&(answer %5 === 0)){
        document.getElementById('javob').innerHTML='Fizz-Buzz';
    }
    if ((answer %3 !== 0)&&(answer %5 !== 0)) {
        document.getElementById('javob').innerHTML = document.getElementById('input').value;
    }
    if (answer %3 === 0){
        document.getElementById('javob').innerHTML='Fizz';
    }
    if (answer %5 === 0){
        document.getElementById('javob').innerHTML='Buzz';
    }

}