//объектно-ориентированное программирование:
// 1. Наследование
// 2. Инкапсуляция
// 3. Обстракция
// 4. Полиморфизм
// _____________________________
// _____________________________

//Наследование
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   walk = () => {
//     console.log("Animal is walkin");
//   };

//   eat = () => {
//     console.log("Animal is easting");
//   };
// }

// class Cat extends Animal {
//   constructor(name, age) {
//     super(name, age);
//     this.type = "cat";
//   }
// }

// const mysa = new Cat("mysa", 4);

// mysa.eat();
// ________________________________________

//Инкапсуляция
// function User(login) {
//   this.login = login;
//   //   this._password = password; //приватные поля делаются через нижнее подчеркивание

//   Object.defineProperty(this, "password", {
//     get() {
//       return "**********";
//     },
//     set(newPassword) {
//       if (
//         newPassword.toUpperCase() === newPassword ||
//         newPassword.toLowerCase() === newPassword ||
//         newPassword.length < 8
//       ) {
//         console.log("not allowed password");
//       } else {
//         this._password = newPassword;
//       }
//     },
//   });
// }

// const testUser = new User("Ivan");

// console.log((testUser.password = "Qqqqqqqqqqqq"));
// _________________________________________________________

//Полиморфизм
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello = function () {
//     return `my name is ${this.name}`;
//   };
// }

// const myCrew = [
//   new User("Ivan"),
//   new User("Kostik"),
//   new User("Artem"),
//   new User("Dimon"),
// ];

// const crewNames = myCrew.map((user) => {
//   return user.sayHello();
// });

// console.log(myCrew, crewNames);
// ________________________________________________

//Обстракция
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Cat extends Animal {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }

//   sleep = function () {
//     console.log(`${this.name} is sleeping`);
//   };
// }

// function hunt() {
//   console.log(`${this.name} is hunting`);
// }

// function learnHunting(cat) {
//   cat.hunt = hunt;
//   return cat;
// }

// const murka = new Cat("murka", 28);
// const pushok = learnHunting(new Cat("pushok", 2));
// __________________________________________________________

//рекурсия - это произведение всех меньших чисел
// function calcFactorial(n) {
//   if (n <= 1) return 1;
//   return n * calcFactorial(n - 1);
// }
// console.log(calcFactorial(5));

//второй пример этой же функcalcFactorial
// function calcFactorial(num) {
//   if (num === 0) return 1;
//   return num * calcFactorial(num - 1);
// }
// console.log(calcFactorial(5));
