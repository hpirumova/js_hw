//1st task

function max_element(array){
  let max = array[0];
  for( let i = 1; i < array.length; i++){
    if(max < array[i]){
      max = array[i];
    }
  }
  console.log(max);
}

max_element(array = [2, 6, 5, 87, 3])

//2nd task

let array = [];
for (let i = 0; i < 8; i++){
  array[i] = [];
  for(let j = 0; j < 8; j++){
    if ( i% 2 === 0) {
      array[i][j] = j % 2 === 0 ? 'white' : 'black';

    }
    else{
    array[i][j] = j % 2 === 0 ? 'black' : 'white';
    }
  }
}
console.log(array);

//3rd task

let course1 = {
  name : " Intro to programming ",
  instructor : " Bob ",
  instr_name() {
    console.log(this.instructor);
  }
}

let course2 =  {
  name : " OOP " ,
  instructor :  " Jim " ,
  instr_name() {
    console.log(this.instructor);
  }
}

course2.instr_name.call(course1);
