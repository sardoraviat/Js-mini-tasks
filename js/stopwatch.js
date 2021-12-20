console.log("What problem");



window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('btn-start');
    var buttonStop = document.getElementById('btn-stop');
    var buttonReset = document.getElementById('btn-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    // 8600 0604 4922 3891
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }

//     var seconds = 00;
//     var tens = 00;
//     var appendTens = document.getElementById("tens")
//     var appendSeconds = document.getElementById("seconds")
//     var buttonStart = document.getElementById('button-start');
//     var buttonStop = document.getElementById('button-stop');
//     var buttonReset = document.getElementById('button-reset');
//     var Interval ;

//     buttonStart.onclick = function() {
//         clearInterval(Interval);
//         Interval = setInterval(startTimer, 10);
//     }

//     buttonStop.onclick = function() {
//         clearInterval(Interval);
//     }


//     buttonReset.onclick = function() {
//         clearInterval(Interval);
//         tens = "00";
//         seconds = "00";
//         appendTens.innerHTML = tens;
//         appendSeconds.innerHTML = seconds;
//     }



//     function startTimer () {
//         tens++;

//         if(tens <= 9){
//             appendTens.innerHTML = "0" + tens;
//         }

//         if (tens > 9){
//             appendTens.innerHTML = tens;

//         }

//         if (tens > 99) {
//             console.log("seconds");
//             seconds++;
//             appendSeconds.innerHTML = "0" + seconds;
//             tens = 0;
//             appendTens.innerHTML = "0" + 0;
//         }

//         if (seconds > 9){
//             appendSeconds.innerHTML = seconds;
//         }




// }
// //
// // const timer = document.getElementById('stopwatch');
// //
// // var hr = 0;
// // var min = 0;
// // var sec = 0;
// // var stoptime = true;
// //
// // function startTimer() {
// //     if (stoptime == true) {
// //         stoptime = false;
// //         timerCycle();
// //     }
// // }
// // function stopTimer() {
// //     if (stoptime == false) {
// //         stoptime = true;
// //     }
// // }
// //
// // function timerCycle() {
// //     if (stoptime == false) {
// //         sec = parseInt(sec);
// //         min = parseInt(min);
// //         hr = parseInt(hr);
// //
// //         sec = sec + 1;
// //
// //         if (sec == 60) {
// //             min = min + 1;
// //             sec = 0;
// //         }
// //         if (min == 60) {
// //             hr = hr + 1;
// //             min = 0;
// //             sec = 0;
// //         }
// //
// //         if (sec < 10 || sec == 0) {
// //             sec = '0' + sec;
// //         }
// //         if (min < 10 || min == 0) {
// //             min = '0' + min;
// //         }
// //         if (hr < 10 || hr == 0) {
// //             hr = '0' + hr;
// //         }
// //
// //         timer.innerHTML = hr + ':' + min + ':' + sec;
// //
// //         setTimeout("timerCycle()", 1000);
// //     }
// // }
// //
// // function resetTimer() {
// //     timer.innerHTML = '00:00:00';
// // }
