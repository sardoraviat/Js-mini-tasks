
function myFunction(){
    let summa = +document.getElementById('input').value;
    let a = 0
    for(let i=0; i <= summa; i++){
        if( (i % 3 === 0 ) || (i % 5 === 0))
        a +=i;
    }
    
      
    document.getElementById('javob').innerHTML=a;

}