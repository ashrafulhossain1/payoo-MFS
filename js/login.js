// document.getElementById('id').addEventListener('click', fun)

// // step-1; set handler
// document.getElementById('btn-login').addEventListener('click', function(event){
//     // step-2: prevent default behavior of from (reloading browser)
//     event.preventDefault(); // vejal to beginners
//     // step-3: GET THE  PHONE NO and Pin no
//     const phoneNumber =document.getElementById('phone-number').value;
//     const PinNumber = document.getElementById('pin-number').value;

//     // step-4: check pin and number valided
//     if(phoneNumber === '5' && PinNumber === '1234'){
//         console.log('your are login')
//     }
//     else{
//         alert('incorrect number or password')
//     }
// })

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber)

    if( phoneNumber === '5' && pinNumber === '1234'){
        console.log('your are trigger');
        window.location.href = '/home.html';
    }
    else{
    alert('wrong number or PIN');
    }
    
})