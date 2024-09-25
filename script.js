//blog section-btn


document.getElementById('donation-btn').addEventListener('click', function () {
  const donationSection = document.getElementById('donation-section');
  donationSection.classList.remove('hidden');
  const historySection = document.getElementById('history-section');
  historySection.classList.add('hidden');
})
/**
 * history button
 */
document.getElementById('history-btn').addEventListener('click', function () {
  const donationSection = document.getElementById('history-section');
  donationSection.classList.remove('hidden');
  const donationSectionHide = document.getElementById('donation-section');
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

  const nohakhaliBalance = parseFloat(document.getElementById('nohakhali-balance').innerText);
  const donateNohakhali = nohakhaliBalance + inputNohakhali;
  document.getElementById('nohakhali-balance').innerText = donateNohakhali;
  const donateMainBalance = parseFloat(document.getElementById('main-balance').innerText);
  if (inputNohakhali > donateMainBalance) {
    alert('insufficient fund! pls income much and much');
    return;
  }
  const afterNohakhaliDonate = donateMainBalance - inputNohakhali;
  document.getElementById('main-balance').innerText = afterNohakhaliDonate;
  /*history-section*/
  const historyItem = document.createElement('div');
  historyItem.className = 'bg-white p-3 rounded-md mt-2';
  historyItem.innerHTML = `
  <p>${inputNohakhali},Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
  <p>Date:${new Date().toLocaleDateString()}</P>

  `
  const historyContainer = document.getElementById('history-section');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  
});
// common function
function getInputValue(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}
function innerTextValue(id) {
  const getInnerTextValue = parseFloat(document.getElementById(id).innerText);
  return getInnerTextValue;
}

// feni-donate-section
document.getElementById('feni-btn').addEventListener('click', function () {
  const feniInput = getInputValue('input-feni');
  if (isNaN(feniInput) || feniInput <= 0) {
    alert('invalid input');
    return;
  }
  const feniBalance = innerTextValue('feni-initial-bal');
  document.getElementById('feni-initial-bal').innerText = feniBalance + feniInput;
  const afterDonateFeni = innerTextValue('main-balance');
  if (feniInput > afterDonateFeni) {
    alert('insufficient fund! pls income more and more');
    return;
  }
  document.getElementById('main-balance').innerText = afterDonateFeni - feniInput;

  /*history-section*/
  const historyItem = document.createElement('div');
  historyItem.className = 'bg-white p-3 rounded-md mt-2';
  historyItem.innerHTML = `
    <p>${feniInput},Taka Donate for Flood Relief in -2024 at Feni, Bangladesh</p>
    <p>Date:${new Date().toLocaleDateString()}</P>
  
    `
  const historyContainer = document.getElementById('history-section');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

});

/**
 * Quota Movement-donation
 */
document.getElementById('quota-btn').addEventListener('click', function () {
  const quotaInput = getInputValue('quota-input-value');
  if (isNaN(quotaInput) || quotaInput <= 0) {
    alert('invalid input');
    return;
  }

  const quotaDonateInitail = innerTextValue('quota-donate-initail');
  const totalQutabal = document.getElementById('quota-donate-initail').innerText = quotaDonateInitail + quotaInput;

  const afterDonateQuta = innerTextValue('main-balance');
  if (quotaInput > afterDonateQuta) {
    alert('insufficient balance!')
    return;
  }
  document.getElementById('main-balance').innerText = afterDonateQuta - quotaInput;

  /*history-section*/
  const historyItem = document.createElement('div');
  historyItem.className = 'bg-white p-3 rounded-md mt-2';
  historyItem.innerHTML = `
   <p>${quotaInput},Taka Donate for Quota Movement in -2024 at, Bangladesh</p>
   <p>Date:${new Date().toLocaleDateString()}</P>
 
   `
  const historyContainer = document.getElementById('history-section');
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

});
// function for donation alert
function alertFun(id) {
  document.getElementById(id).addEventListener('click', function () {
    alert(`
      Congratulation !
      you have donated for humankind`);
    return;
  })
}
alertFun('nohakhali-btn');
alertFun('feni-btn');
alertFun('quota-btn');