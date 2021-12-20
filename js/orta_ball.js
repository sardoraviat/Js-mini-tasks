// 0-55: => qoniqarsiz
// 56-70: => qoniqarli
// 71-85  => yaxshi
// 86-100 => a'lo
let baholar = [88, 96, 99, 96, 95, 71];
let ball = 0;
let natija = 0;

function calculate(baholar) {
    // for (let key in baholar){
    //     ball += baholar[key];
    // }
    for(let i = 0; i < baholar.length; i++){
        ball += baholar[i]
        natija = ball/6;
    }
    if (natija <= 55){
        console.log('qoniqarsiz')
    }
    if((natija >=56) && (natija <=70) ){
        console.log('qoniqarli')
    }
    if((natija >=71) && (natija <=85) ){
        console.log('yaxshi')
    }
    if((natija >=86) && (natija <=100) ){
        console.log('a\'lo')
    }


    console.log(natija);
}

calculate(baholar)




