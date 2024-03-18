// random OTP genrator code start =====================================
// let randomvalues = "123456789";
// let password = "";
// for (let i = 0; i < 4; i++) {
//   let randomnumber = Math.floor(Math.random() * randomvalues.length);
//   password += randomvalues[randomnumber];
// }

// document.bulao.style.innerText = password
// let task = document.getElementById("bulao");
// task.innerText = password;

// random OTP genrator code end =====================================


// random COLOUR genrator code START ---------------------------------------
function dabaya(){
  let letters = "ABCDEF0123456789";
  let color = "#";
  for (let i = 0 ; i < 6 ; i++){
    color += letters[Math.floor(Math.random() * 16)];

  }
  document.body.style.backgroundColor = color
  let task = document.getElementById("count")
  task.innerText = color
}
// random COLOUR genrator code END ---------------------------------------

