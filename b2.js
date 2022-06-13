// 1. Var

const Name = document.getElementById('urName');

Name.addEventListener('change', (event)=> {
    let inpName = event.target.value;
    console.log(inpName);
    event.target.value='';
})

// 2. if/else 
const age = document.getElementById('urAge');

age.addEventListener('change', (event)=> {
    let inpAge = event.target.value;
    if (inpAge > 30) {
        console.log('adult')
    } else {
        console.log('kids')
    }
})

// 3. funtion 
function myFunction() {
    
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;

    function addTwoFunction(a, b) {
      a = +a;
      b = +b;
      let sum = a+b;
      console.log(a,' + ', b, ' = ', sum)
      }
      addTwoFunction(x,y);
      document.getElementById('num1').value = '';
      document.getElementById('num2').value = '';
  }


// 4. array
const classmate = [];
const frName = document.getElementById('urFrs');

frName.addEventListener('change', (event)=> {
    let inpFr = event.target.value;
    classmate.push(inpFr)
    event.target.value='';
    console.log(classmate)
})

// 5. object

function Function() {
    
    let fName = document.getElementById("frsName").value;
    let Phone = document.getElementById("frsPhone").value;
    
    let favorFrs = document.getElementById("frsFavor").value;

    function in4FR(frname, phoneN, animal) {
        const in4 ={
        name : frname,
        phoneNum:phoneN,
        favor : animal,
}
      
      console.log(in4)
      }
      in4FR(fName,Phone,favorFrs);
      document.getElementById('frsName').value = '';
      document.getElementById('frsPhone').value = '';
      document.getElementById('frsFavor').value = '';
  }




// const fName= document.getElementById('frsName');
//     fName.addEventListener('change', (event)=> {
//         let inpfName = event.target.value;
//         in4.name = inpfName;
//         event.target.value='';
        
//     })
// console.log(in4)
    

    
//     const Phone = document.getElementById('frsPhone');
//     const Ins = document.getElementById('frsIg');
//     const favorFrs = document.getElementById('frsFavor');

    

    
