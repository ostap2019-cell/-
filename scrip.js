console.log('Скрипт подключен успешно)')

const themeButton = document.querySelector('#id-theme');
console.log(themeButton);

themeButton.addEventListener("click", function(){
    console.log('Button pressed');
    document.body.classList.toggle("dark-theme")
});









































// console.log("Hello World")

// let name = "Nikita" //string 
// let Age = 7; //number
// let ttrr = true; //boolean
// let aarr = ["rgffe","rfgghhd"] //array - список, массив
// let obj = {name:"zzzczx"}

// console.log(aarr);
// console.log(typeof aarr);
// console.log(typeof Age);
// console.log(typeof obj);

// const a = 5+8;
// console.log(a);
// a === 15;
// console.log(a === 15);

// let hh ="Age";
// let ss = "55";
// let uu = "44";
// const v = name + hh;
// const v1 = ss + uu
// console.log(v);


// function greeting(name){
//     let message = `Здравствуй ${name}`
//     console.log(message);
// }

// greeting('Yana');