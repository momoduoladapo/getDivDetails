const forms = document.querySelectorAll(".form");

for (const form of forms) {
  form.addEventListener('submit', function(event) {

    event.preventDefault();

    let productName = this.querySelector('.productName').innerText;
    let productImg = this.querySelector('.productImg').src;
    let package = this.querySelector('.package').value;

    alert('Working See Details Below:' + '\n' + productName + '\n\n' + productImg + '\n\n' + package);

  });
}