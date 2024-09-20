// show the cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    // remove and add
   document.getElementById('cash-out-form').classList.remove('hidden')
   document.getElementById('add-money-form').classList.add('hidden')

})

// show add money form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    
    // remove and add
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})