//   Clicking on the 💗 heart icon of any card will increase the count in the Navbar
  
  const loveCountSpan = document.querySelector('.love_box span');
  const cardHearts = document.querySelectorAll('.call_card i.ri-heart-line');
  const toast = document.getElementById('toast');
  let loveCount = 0;

  function showToast(message) {
    toast.textContent = message;
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 2000);
  }

  cardHearts.forEach(heart => {
    heart.addEventListener('click', () => {
      const cardName = heart.closest('.call_card').querySelector('h3').textContent;

      if (heart.classList.contains('liked')) {
        heart.classList.remove('liked');
        loveCount--;
        showToast(`Removed "${cardName}" from your fav list`);
      } else {
        heart.classList.add('liked');
        loveCount++;
        showToast(`Added "${cardName}" to your fav list`);
      }

      loveCountSpan.textContent = loveCount;
    });
  });



//  call feature 
    const coinCountSpan = document.querySelector('.coin_box span');
  let coins = parseInt(coinCountSpan.textContent) || 0;

  const callButtons = document.querySelectorAll('.call'); 
  const callHistoryBottom = document.querySelector('.call_history_bottom');

  callButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.call_card');
      const serviceName = card.querySelector('h3').textContent;
      const serviceNumber = card.querySelector('span').textContent;

      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      coins -= 20;
      coinCountSpan.textContent = coins;

      alert(`Calling ${serviceName} at ${serviceNumber}...`);

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      const historyItem = document.createElement('div');
      historyItem.classList.add('history_item');
      historyItem.innerHTML = `
        <div class="his_left">
          <h4>${serviceName}</h4>
          <p>${serviceNumber}</p>
        </div>
        <div class="his_right">
          <span>${timeStr}</span>
        </div>
      `;
      callHistoryBottom.prepend(historyItem);
    });
  });


  const clearHistoryBtn = document.querySelector('.call_his_right button');
  clearHistoryBtn.addEventListener('click', () => {
    callHistoryBottom.innerHTML = '';
  });



// copy feature 

  const copyCountSpan = document.querySelector('.copy_box span');
  let copyCount = parseInt(copyCountSpan.textContent) || 0;

  const copyButtons = document.querySelectorAll('.copy'); 

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.call_card');
      const serviceName = card.querySelector('h3').textContent;
      const serviceNumber = card.querySelector('span').textContent;

      navigator.clipboard.writeText(serviceNumber).then(() => {
        alert(`Copied ${serviceName} (${serviceNumber}) to clipboard!`);

        copyCount++;
        copyCountSpan.textContent = copyCount;

        button.innerHTML = `<i class="ri-check-line"></i> Copied`;

        button.style.background = "#4CAF50"; 
        button.style.color = "#fff";

        setTimeout(() => {
          button.innerHTML = `<i class="ri-file-copy-line"></i> Copy`;
          button.style.background = "";
          button.style.color = "";
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    });
  });