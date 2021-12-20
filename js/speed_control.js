// Tezlik cheklovi 70KM/SOAT
// 5km/soat -> 1 point
// 12 pointda -> GUVOHNOMA olib qo'yiladi

const SPEED_LIMIT = 70;
const KM_PR_POINT =5;
const MAX_POINTS = 12
cheekSpeed(130);
function cheekSpeed(speed) {
    if(speed<SPEED_LIMIT+KM_PR_POINT)
        console.log('OK');
    else {
        let points =Math.floor( (speed-SPEED_LIMIT)/KM_PR_POINT);
        if(points>=MAX_POINTS){
            console.log('Guvohnoma olib qo\'yildi')
        }
        else {
            console.log(points);
        }
    }
}