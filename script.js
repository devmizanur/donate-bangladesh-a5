document.getElementById('nohakhali-btn').addEventListener('click', function () {

  //nohakhali input

  const inputNohakhali = parseFloat(document.getElementById('input-nohakhali').value);
  if (isNaN(inputNohakhali)) {
    alert('invalid input');
    return;
  }

  const nohakhaliBalance =parseFloat(document.getElementById('nohakhali-balance').innerText);
  const donateNohakhali=nohakhaliBalance+inputNohakhali;
  document.getElementById('nohakhali-balance').innerText=donateNohakhali;
  const donateMainBalance = parseFloat(document.getElementById('main-balance').innerText);
  if (inputNohakhali >donateMainBalance) {
    alert('insufficient fund! pls income much and much');
    return;
  }
  const afterNohakhaliDonate = donateMainBalance - inputNohakhali;
  document.getElementById('main-balance').innerText = afterNohakhaliDonate;
  /*history-section*/
  const historyItem=document.createElement('div');
  historyItem.className='bg-white p-3 rounded-md mt-2';
  historyItem.innerHTML=`
  <p>${inputNohakhali},Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
  <p>Date:${new Date().toLocaleDateString()}</P>

  `
  const historyContainer=document.getElementById('history-section');
  historyContainer.insertBefore(historyItem,historyContainer.firstChild);
  
})