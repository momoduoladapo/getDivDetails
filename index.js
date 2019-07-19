let testArrays = {
  
  product101 :{
  'Business Plan': 'https://google.com',
  'Feasibility Report': 'https://stackoverflow.com',
  },

  product102 : {
    'Business Plan': 'https://ibm.com',
    'Feasibility Report': 'https://apple.com',
  },

  product103 : {
    'Business Plan': 'https://w3schools.com',
    'Feasibility Report': 'https://codecanyon.com',
  },

  product104 :{
    'Business Plan': 'https://git.com',
    'Feasibility Report': 'https://youtube.com',
  },

};


  const forms = document.querySelectorAll("form");
  for (const form of forms) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const formSelect = event.target.querySelector("select")
      window.location.assign(testArrays[formSelect.id][formSelect.value]);
    });
  }





/*

//Getting the Div Contents with Options and Putting Into LocalStorage
console.log('The first console message');

let testArrays = {
  
  'product101' :{
  'Business Plan': 'http://localhost/projects/richbury/product/aqua-culture-and-poultry/',
  'Feasibility Report': 'http://localhost/projects/richbury/product/beehives/',
  'bizPlanReport': 'http://localhost/projects/richbury/product/broccoli-cultivation-richbury/'
  },

  'product102' : {
    'Business Plan': 'http://localhost/projects/richbury/product/aqua-culture-and-poultry/1',
    'Feasibility Report': 'http://localhost/projects/richbury/product/beehives/1',
    'bizPlanReport': 'http://localhost/projects/richbury/product/broccoli-cultivation-richbury/1'
  },

  'product103' : {
    'Business Plan': 'http://localhost/projects/richbury/product/aqua-culture-and-poultry/2',
    'Feasibility Report': 'http://localhost/projects/richbury/product/beehives/2',
    'bizPlanReport': 'http://localhost/projects/richbury/product/broccoli-cultivation-richbury/2'
  },

  'product104' :{
    'Business Plan': 'http://localhost/projects/richbury/product/aqua-culture-and-poultry/3',
    'Feasibility Report': 'http://localhost/projects/richbury/product/beehives/3',
    'bizPlanReport': 'http://localhost/projects/richbury/product/broccoli-cultivation-richbury/3'
  },

 'product105' : {
    'Business Plan': 'http://localhost/projects/richbury/product/aqua-culture-and-poultry/4',
    'Feasibility Report': 'http://localhost/projects/richbury/product/beehives/4',
    'bizPlanReport': 'http://localhost/projects/richbury/product/broccoli-cultivation-richbury/4'
  }

};



  const forms = document.querySelectorAll(".form");
  for (const form of forms) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();



      let package = this.querySelector('.package').value;

      if(package == 'Business Plan'){
        let link = this.querySelector('.submit').href = testArrays.product101.Business Plan;
        let message = this.querySelector('.submit').innerText = 'Try ' + package;
      } 
      else if(package == 'Feasibility Report'){
        let link = this.querySelector('.submit').href = testArrays.product102.Feasibility Report;
        let message = this.querySelector('.submit').innerText = 'Try ' + package;
      } 
      else {
          alert('You must select an option');
      }; 
    });
  }


*/