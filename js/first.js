
// noakhali
    document.getElementById('noa-donate').addEventListener('click', function (event) {
    event.preventDefault();
    
    const balance = parseFloat(document.getElementById('balance').innerText);
    const inputValue = parseFloat(document.getElementById('noa-input').value);

   
    if (balance === 0 || inputValue > balance) {
        alert('You do not have sufficient balance');
    } 
   
    else if (!isNaN(inputValue) && inputValue > 0 && inputValue !== null) {
    
        const preDonationAmt = parseFloat(document.getElementById('noa-balance').innerText);
        const inputValue1 = parseFloat(inputValue);
        const newDonationAmt = preDonationAmt + inputValue1;
        document.getElementById('noa-balance').innerText = newDonationAmt;
        
        
        const newBalance = balance - inputValue1;
        document.getElementById('balance').innerText = newBalance;

        
        document.getElementById('noa-input').value = '';

       
        const modal = document.getElementById('my-modal');
        modal.classList.add('modal-open');
        const closeModalBtn = document.getElementById('close');
        closeModalBtn.addEventListener('click', function () {
            modal.classList.remove('modal-open');
        });

    } else {
        alert('Invalid input');
    }
});


// feni
document.getElementById('fenidonate').addEventListener('click', function (event) {
    event.preventDefault();
    
    const balance = parseFloat(document.getElementById('balance').innerText);
    const inputValue = parseFloat(document.getElementById('feninput').value);

   
    if (balance === 0 || inputValue > balance) {
        alert('You do not have sufficient balance');
    } 
    
    else if (!isNaN(inputValue) && inputValue > 0 && inputValue !== null) {
        
       
        const preDonationAmt = parseFloat(document.getElementById('fenibalance').innerText);
        const inputValue1 = parseFloat(inputValue);
        const newDonationAmt = preDonationAmt + inputValue1;
        document.getElementById('fenibalance').innerText = newDonationAmt;
        
        
        const newBalance = balance - inputValue1;
        document.getElementById('balance').innerText = newBalance;

        document.getElementById('feninput').value = '';

        const modal = document.getElementById('my-modal2');
        modal.classList.add('modal-open');
        
        const closeModalBtn = document.getElementById('close1');
        closeModalBtn.addEventListener('click', function () {
            modal.classList.remove('modal-open');
        });

    } else {
        alert('Invalid input');
    }
});

// quota


document.getElementById('qmdonate').addEventListener('click', function (event) {
    event.preventDefault();
    
    const balance = parseFloat(document.getElementById('balance').innerText);
    const inputValue = parseFloat(document.getElementById('qminput').value);

    
    if (balance === 0 || inputValue > balance) {
        alert('You do not have sufficient balance');
    } 
    
    else if (!isNaN(inputValue) && inputValue > 0 && inputValue !== null) {
        
        
        const preDonationAmt = parseFloat(document.getElementById('quotabalance').innerText);
        const inputValue1 = parseFloat(inputValue);
        const newDonationAmt = preDonationAmt + inputValue1;
        document.getElementById('quotabalance').innerText = newDonationAmt;
        
       
        const newBalance = balance - inputValue1;
        document.getElementById('balance').innerText = newBalance;

       
        document.getElementById('qminput').value = '';

        
        const modal = document.getElementById('my-modal3');
        modal.classList.add('modal-open');
        
       
        const closeModalBtn = document.getElementById('close3');
        closeModalBtn.addEventListener('click', function () {
            modal.classList.remove('modal-open');
        });

    } else {
        alert('Invalid input');
    }
});












// // quota movement

// document.getElementById('qmdonate').addEventListener('click', function (event) {
//     event.preventDefault();
    
//     const balance = parseFloat(document.getElementById('balance').innerText);
//     const inputValue = parseFloat(document.getElementById('qminput').value);

//     if (balance === 0 || inputValue > balance) {
//         alert('You do not have sufficient balance');
//     } else if (!isNaN(inputValue) && inputValue > 0 &&inputValue !== null) {
//         alert('Donation Successful!');
        
        
//         const preDonationAmt = parseFloat(document.getElementById('quotabalance').innerText);
//         const inputValue3 = parseFloat(inputValue);
//         const newDonationAmt = preDonationAmt + inputValue3;
//         document.getElementById('quotabalance').innerText = newDonationAmt;
        
        
//         const newBalance = balance - inputValue3;
//         document.getElementById('balance').innerText = newBalance;

        
//         document.getElementById('qminput').value = '';

//         const s = "flood at Feni, Bangladesh";
//         const div = join(inputValue3, s);
//         const p = document.createElement("p");

//         const now = new Date();
//         const dateTimeString = `Date : ${now.toString()}`;
//         p.innerText = dateTimeString;
//         div.appendChild(p);
//         appendChild('transaction', div);
// // model3
// const modal = document.getElementById('my-modal3');
// const openModalBtn = document.getElementById('fenidonate');
// const closeModalBtn = document.getElementById('close');
// modal.classList.add('modal-open');
// closeModalBtn.addEventListener('click', function () {
//     modal.classList.remove('modal-open');
// });


//     } else {
//         alert('Invalid input');
//     }
// })












































