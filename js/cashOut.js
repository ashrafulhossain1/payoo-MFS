document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut =document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('cash-out-pin').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const cashOutNumber = parseFloat(cashOut);

        const updateBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = updateBalance;
        
    }
    else{
        alert('WRONG INFO')
    }
})