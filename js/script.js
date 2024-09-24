
    // Select the buttons and sections
    const donationBtn = document.getElementById('donationBtn');
    const historyBtn = document.getElementById('historyBtn');
    const donationSection = document.getElementById('donationSection');
    const historySection = document.getElementById('historySection');

    // Add event listeners to buttons
    donationBtn.addEventListener('click', (){
      // Show Donation Section, Hide History Section
      donationSection.classList.remove('hidden');
      historySection.classList.add('hidden');

      // Toggle button styles
      donationBtn.classList.add('bg-lime-400', 'text-black');
      donationBtn.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-600');
      historyBtn.classList.remove('bg-lime-400', 'text-black');
      historyBtn.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-600');
    });

    historyBtn.addEventListener('click', (){
      // Show History Section, Hide Donation Section
      historySection.classList.remove('hidden');
      donationSection.classList.add('hidden');

      // Toggle button styles
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

   