
let accountBalance = 5500;
    

document.getElementById('donationBtn').addEventListener('click', () => {
  document.getElementById('donationSection').style.display = 'block';
  document.getElementById('historySection').style.display = 'none';
});

document.getElementById('historyBtn').addEventListener('click', () => {
  document.getElementById('donationSection').style.display = 'none';
  document.getElementById('historySection').style.display = 'block';
});


function makeDonation(donationName, inputId, amountId) {
  const inputElement = document.getElementById(inputId);
  const donationAmount = parseFloat(inputElement.value);
  const currentAmountElement = document.getElementById(amountId);
  let currentDonation = parseFloat(currentAmountElement.textContent.replace(' BDT', ''));

  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert('Please enter a valid donation amount.');
    return;
  }

  if (donationAmount > accountBalance) {
    alert('Insufficient funds. Please enter a smaller amount.');
    return;
  }

  
  accountBalance -= donationAmount;
  currentDonation += donationAmount;
  currentAmountElement.textContent = `${currentDonation} BDT`;
  document.getElementById('accountBalance').textContent = `${accountBalance} BDT`;

  
  addToHistory(donationName, donationAmount);

  
  inputElement.value = '';
}


function addToHistory(donationName, donationAmount) {
  const historyList = document.getElementById('historyList');
  const listItem = document.createElement('li');
  const date = new Date();
  const formattedDate = date.toLocaleString();

  listItem.textContent = `${formattedDate} - Donated ${donationAmount} BDT to ${donationName}`;
  historyList.appendChild(listItem);
}
    const donationBtn = document.getElementById('donationBtn');
    const historyBtn = document.getElementById('historyBtn');
    const donationSection = document.getElementById('donationSection');
    const historySection = document.getElementById('historySection');

    donationBtn.addEventListener('click', (){
      
      donationSection.classList.remove('hidden');
      historySection.classList.add('hidden');

     
      donationBtn.classList.add('bg-lime-400', 'text-black');
      donationBtn.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-600');
      historyBtn.classList.remove('bg-lime-400', 'text-black');
      historyBtn.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-600');
    });

    historyBtn.addEventListener('click', (){
     
      historySection.classList.remove('hidden');
      donationSection.classList.add('hidden');

      
      historyBtn.classList.add('bg-lime-400', 'text-black');
      historyBtn.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-600');
      donationBtn.classList.remove('bg-lime-400', 'text-black');
      donationBtn.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-600');
    });
  


    document.getElementById("donate-btn").addEventListener("click", function() {
        let amount = document.getElementById("donation-amount").value;
        if (amount && amount > 0) {
            alert("Thank you for donating " + amount + " BDT!");
        } else {
            alert("Please enter a valid donation amount.");
        }
    });

    document.getElementById("donate-btn").addEventListener("click", function() {
        let amount = document.getElementById("donation-amount").value;
        if (amount && amount > 0) {
            alert("Thank you for donating " + amount + " BDT!");
        } else {
            alert("Please enter a valid donation amount.");
        }
    });

   