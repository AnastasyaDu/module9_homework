
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const value1 = document.querySelector('input-1').value;
  const value2 = document.querySelector('input-2').value;
  let s = document.getElementById('j-result');
  s.textContent = '';
  if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
    s.textContent = 'одно из чисел вне диапазона от 100 до 300';
    return;
  }
  // Делаем запрос за данными
  fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {
      document.getElementById('result').src = response.url;
    });

});