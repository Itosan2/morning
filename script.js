var chkbox = document.getElementById('myCheck')
const night = document.querySelector('#night')
const morning = document.querySelector('#morning')
const morningMsg = document.querySelector('.morning-msg')
const nightMsg = document.querySelector('.night-msg')

// if (chkbox.checked == true){
//     // text.style.display = "block";
//     console.log('check');
//   } else {
//     //  text.style.display = "none";
//     console.log('none')
//   }

function togglebtn(){
    morning.classList.toggle('hidden')
    night.classList.toggle('shownight')
    morningMsg.classList.toggle('morning-text')
    nightMsg.classList.toggle('night-text')

}

chkbox.addEventListener('click',togglebtn
    
    // console.log(timeofday)
    // morning.style.display='none'
)
