

// add money
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        //1. prevent page reload 
        event.preventDefault();
        //2. get input amount and PIN
        const addMoneyInput = document.getElementById('input-add-money').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(addMoneyInput,pinNumber)
    })