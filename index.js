console.log('Application started, button yet to be clicked');


const forms = document.querySelectorAll("button[type=submit]")
for (const form of forms) {
  form.addEventListener('click', function(event) {
    let productName = document.getElementById('productName').innerText;
    let productImg = document.getElementById('productImg').src;
    let package = document.getElementById('package').value;
    
    alert('Working See Details Below:' + '\n' + productName + '\n\n' + productImg + '\n\n' + package);

    console.log('Application Ended');
  })
}



