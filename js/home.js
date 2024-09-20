

// add money
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        //1. prevent page reload 
        event.preventDefault();

        //2. get input amount and PIN
        const addMoneyInput = document.getElementById('input-add-money').value;
        const pinNumber = document.getElementById('pin-number').value;

        // 3. verify pin
        if(pinNumber === '1234'){
            console.log('add money done')
            // 4. get current balance
            const balance =document.getElementById('account-balance').innerText;
            // console.log(typeof balance)

            // 5. add new and current balance
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance)

            // 6. update the balance
            document.getElementById('account-balance').innerText = newBalance;
            
        }
        else{
            console.log('failed to add money')
        }
    })