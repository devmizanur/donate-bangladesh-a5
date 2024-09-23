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
})