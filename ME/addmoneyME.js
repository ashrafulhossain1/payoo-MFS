document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
       // console.log('ok reload')
   
       //::::  get amount and pin
       const InputTk = document.getElementById('input-add-money')
       const inputAmount =parseFloat(InputTk.value);
   
       const inputPass = document.getElementById('pin-number')
       const inputPin =inputPass.value;
   
   
       // :::: verify
       if(inputPin === '1234'){
           //:::: add money to the account
           const balance = parseFloat(document.getElementById('account-balance').innerText);
           // console.log(typeof inputAmount)
           const updateBalance = balance + inputAmount
           // 
           // ::::: update balance 
           document.getElementById('account-balance').innerText = updateBalance;
           InputTk.value = '';
           inputPass.value = '';
   
       }
       else{
          alert('failed to add money. please input correct info')
       }
   
   })
   