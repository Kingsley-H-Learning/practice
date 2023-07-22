function random() {
  const number = document.getElementById('numberInput').value;
  console.log('nameber', number);
  const result = 1 + Math.floor(Math.random() * number);
  document.getElementById('outcome').innerHTML = result;
}
