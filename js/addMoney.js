/**
 * 1. add evdtnt listener to add money button (formsubmit)
 * and prevent page reload 
 * 
 * 2.get user input money 
 * 
 * 3. verify pin [will wrong: alert set and will right: allow to add the number to the account]
 * 
 * 4. get the current balance
 * 
 * 5. update the balance in the dom
 */

document.getElementById('btn-add-money').addEventListener('click', function(event){
 event.preventDefault();
    // console.log('ok reload')

    //::::  get amount and pin
     const inputAmount = parseFloat(document.getElementById('input-add-money').value);
     const inputPin = document.getElementById('pin-number').value;

    // :::: verify
    if(inputPin === '1234'){
        //:::: add money to the account
        const balance = parseFloat(document.getElementById('account-balance').innerText);
        const updateBalance = balance + inputAmount
        // 
        // ::::: update balance  and clear
        document.getElementById('account-balance').innerText = updateBalance;
        // chat gpt
        document.getElementById('input-add-money').value = '';  // clear amount input
        document.getElementById('pin-number').value = '';  // clear pin input

    }
    else{
       alert('failed to add money. please input correct info')
    }

})


// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     //:::: prevent default behavior to stop page reload
//     event.preventDefault();
    
//     //:::: get amount and pin
//     const inputAmountElement = document.getElementById('input-add-money');
//     const inputAmount = parseFloat(inputAmountElement.value);
//     const inputPinElement = document.getElementById('pin-number');
//     const inputPin = inputPinElement.value;

//     //:::: verify
//     if(inputPin === '1234'){
//         //:::: add money to the account
//         const balance = parseFloat(document.getElementById('account-balance').innerText);
//         const updateBalance = balance + inputAmount;

//         //:::: update balance in the DOM
//         document.getElementById('account-balance').innerText = updateBalance;

//         //:::: clear input fields
//         inputAmountElement.value = ''; // clear amount input
//         inputPinElement.value = ''; // clear pin input
//     }
//     else{
//        alert('failed to add money. please input correct info');
//     }
// });




// meeee




// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     event.preventDefault();
//        // console.log('ok reload')
   
//        //::::  get amount and pin
//        //  const inputAmountP = document.getElementById('input-add-money');
//         const inputAmount = parseFloat(document.getElementById('input-add-money').value);
//         const inputPin = document.getElementById('pin-number').value;
//        //  console.log(inputAmount, inputPin)
   
//        // :::: verify
//        if(inputPin === '1234'){
//            //:::: add money to the account
//            const balance = parseFloat(document.getElementById('account-balance').innerText);
//            // console.log(typeof inputAmount)
//            const updateBalance = balance + inputAmount
//            // 
//            // ::::: update balance 
//            document.getElementById('account-balance').innerText = updateBalance;
//            inputAmountP.value = '';
//            inputPin.value = '';
   
//            // chat gpt
//            // document.getElementById('input-add-money').value = '';  // clear amount input
//            // document.getElementById('pin-number').value = '';  // clear pin input
   
//        }
//        else{
//           alert('failed to add money. please input correct info')
//        }
   
//    })
   
