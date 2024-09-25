
let accountBalance = 5500;
    

document.getElementById('donationBtn').addEventListener('click', () => {
  document.getElementById('donationSection').style.display = 'block';
  document.getElementById('historySection').style.display = 'none';
});

function toggleButton(activeButton) {
    const donationBtn = document.getElementById('donationBtn');
    const historyBtn = document.getElementById('historyBtn');
    const donationSection = document.getElementById('donationSection');
    const historySection = document.getElementById('historySection');

    if (activeButton === 'donation') {
        // Toggle button styles
        donationBtn.classList.add('active');
        donationBtn.classList.remove('inactive');
        historyBtn.classList.add('inactive');
        historyBtn.classList.remove('active');
        
        // Show donation section, hide history section
        donationSection.style.display = 'block';
        historySection.style.display = 'none';

        // If you want to link to a different page, you can use the window.location.href
        // window.location.href = 'donation-page-url.html'; // Uncomment this to link to donation page
    } 
    else {
        // Toggle button styles
        historyBtn.classList.add('active');
        historyBtn.classList.remove('inactive');
        donationBtn.classList.add('inactive');
        donationBtn.classList.remove('active');

        // Show history section, hide donation section
        historySection.style.display = 'block';
        donationSection.style.display = 'none';
    }
}     
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

   