//blog section-btn


document.getElementById('donation-btn').addEventListener('click',function(){
  const donationSection=document.getElementById('donation-section');
donationSection.classList.remove('hidden');
const historySection=document.getElementById('history-section');
historySection.classList.add('hidden');
})
/**
 * history button
 */
document.getElementById('history-btn').addEventListener('click',function(){
  const donationSection=document.getElementById('history-section');
donationSection.classList.remove('hidden');
const donationSectionHide=document.getElementById('donation-section');
donationSectionHide.classList.add('hidden');

})
//history button-end
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
// donation button
/**
document.getElementById('donation-btn').addEventListener('click',function(){
  const donationSection=document.getElementById('donation-section');
donationSection.classList.remove='hidden';
console.log(donationSection);

})*/