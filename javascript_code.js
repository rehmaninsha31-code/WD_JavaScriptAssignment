// 1
{
  console.log("Hello JavaScript");
  console.log(10 + 20);
}

// 2
{
  // This is a single-line comment
  /*
   This is a
   multi-line comment
  */
  console.log("Hello");
}

// 3
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);

  let x = 10;
  x = 20;
  console.log(x);

  const y = 10;
  try {
    y = 20;
  } catch (error) {
    console.log(error.message);
  }
}

// 4
{
  let college = "United University";
  function show() {
    console.log(college);
  }
  show();

  function test() {
    let x = 10;
    console.log(x);
  }
  test();
  try {
    console.log(x);
  } catch (error) {
    console.log(error.message);
  }

  if (true) {
    let x = 10;
    const y = 20;
    console.log(x);
    console.log(y);
  }
  try {
    console.log(x);
  } catch (error) {
    console.log(error.message);
  }

  if (true) {
    var p = 10;
    let q = 20;
  }
  console.log(p);
  try {
    console.log(q);
  } catch (error) {
    console.log(error.message);
  }
}

// 5
{
  let college = "United University";
  function teacher() {
    let subject = "JavaScript";
    function lecture() {
      let topic = "Scope";
      console.log(college);
      console.log(subject);
      console.log(topic);
    }
    lecture();
  }
  teacher();
}

// 6
{
  let name = "Rahul";
  let age = 20;
  let passed = true;
  let x;
  let y = null;
  console.log(typeof name);
  console.log(typeof age);
  console.log(typeof passed);
  console.log(typeof x);
  console.log(typeof y);

  let big = 12345678901234567890n;
  let id = Symbol("id");
  console.log(big);
  console.log(id);
}

// 7
{
  let a = 10;
  let b = a;
  b = 20;
  console.log(a);
  console.log(b);

  let student1 = {
    name: "Rahul"
  };
  let student2 = student1;
  student2.name = "Amit";
  console.log(student1.name);
}

// 8
{
  let x = "10";
  console.log(typeof x);
  let y = Number(x);
  console.log(y);
  console.log(typeof y);

  console.log(String(100));
  console.log(Number("100"));
  console.log(Boolean(1));
  console.log(Boolean(0));
}

// 9
{
  let a = 10;
  let b = 3;
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
  console.log(a ** b);

  let x = 10;
  x++;
  console.log(x);
  x--;
  console.log(x);
}

// 10
{
  let x = 10;
  x += 5;
  console.log(x);
  x -= 2;
  console.log(x);
  x *= 2;
  console.log(x);
  x /= 2;
  console.log(x);
}

// 11
{
  console.log(10 > 5);
  console.log(10 < 5);
  console.log(10 >= 10);
  console.log(10 == "10");
  console.log(10 === "10");
}

// 12
{
  let age = 20;
  let student = true;
  console.log(age >= 18 && student);
  console.log(age >= 18 || student);
  console.log(!student);
}

// 13
{
  let marks = 75;
  if (marks >= 40) {
    console.log("Pass");
  }
}

// 14
{
  let marks = 35;
  if (marks >= 40) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

// 15
{
  let marks = 78;
  if (marks >= 90) {
    console.log("A+");
  } else if (marks >= 75) {
    console.log("A");
  } else if (marks >= 60) {
    console.log("B");
  } else if (marks >= 40) {
    console.log("C");
  } else {
    console.log("Fail");
  }
}

// 16
{
  let age = 20;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }

  let result = age >= 18 ? "Adult" : "Minor";
  console.log(result);
}

// 17
{
  let day = 2;
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    default:
      console.log("Invalid day");
  }
}

// 18
{
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

// 19
{
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}

// 20
{
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);

  let j = 10;
  while (j < 5) {
    console.log(j);
  }

  let k = 10;
  do {
    console.log(k);
  } while (k < 5);
}

// 21
{
  for (let i = 1; i <= 10; i++) {
    if (i == 5) {
      break;
    }
    console.log(i);
  }
}

// 22
{
  for (let i = 1; i <= 5; i++) {
    if (i == 3) {
      continue;
    }
    console.log(i);
  }
}

// 23
{
  function greet() {
    console.log("Hello Students");
  }
  greet();
}

// 24
{
  function greet(name) {
    console.log("Hello " + name);
  }
  greet("Rahul");
  greet("Amit");
}

// 25
{
  function add(a, b) {
    return a + b;
  }
  let result = add(10, 20);
  console.log(result);
}

// 26
{
  const add = function (a, b) {
    return a + b;
  };
  console.log(add(10, 20));
}

// 27
{
  const add = (a, b) => {
    return a + b;
  };
  console.log(add(10, 20));

  const add2 = (a, b) => a + b;
  console.log(add2(10, 20));
}

// 28
{
  let students = ["Rahul", "Amit", "Neha"];
  console.log(students);
  console.log(students[0]);
  console.log(students[1]);
}

// 29
{
  let students = ["Rahul", "Amit", "Neha"];
  students[1] = "Priya";
  console.log(students);
}

// 30
{
  let students = ["Rahul", "Amit"];
  students.push("Neha");
  console.log(students);
  students.pop();
  students.shift();
  students.unshift("Priya");
  console.log(students);
}

// 31
{
  let numbers = [10, 20, 30, 40];
  console.log(numbers.length);
}

// 32
{
  let students = ["Rahul", "Amit", "Neha"];
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
}

// 33
{
  let students = ["Rahul", "Amit", "Neha"];
  for (let student of students) {
    console.log(student);
  }
}

// 34
{
  let numbers = [10, 20, 30];
  numbers.forEach(function (number) {
    console.log(number);
  });

  numbers.forEach(number => console.log(number));
}

// 35
{
  let numbers = [1, 2, 3, 4];
  let squares = numbers.map(function (number) {
    return number * number;
  });
  console.log(squares);
}

// 36
{
  let marks = [35, 67, 89, 42, 25];
  let passed = marks.filter(function (mark) {
    return mark >= 40;
  });
  console.log(passed);
}

// 37
{
  let marks = [35, 67, 89, 42];
  let result = marks.find(mark => mark > 80);
  console.log(result);
}

// 38
{
  let numbers = [10, 20, 30, 40];
  let total = numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
  console.log(total);
}

// 39
{
  let name = "JavaScript";
  console.log(name.length);
  console.log(name.toUpperCase());
  console.log(name.toLowerCase());
  console.log(name.charAt(0));
}

// 40
{
  let text = "Hello JavaScript";
  console.log(text.includes("Java"));
  console.log(text.startsWith("Hello"));
  console.log(text.endsWith("Script"));
  console.log(text.indexOf("Java"));
}

// 41
{
  let name = "Rahul";
  let age = 20;
  console.log("My name is " + name + " and my age is " + age);
  console.log(`My name is ${name} and my age is ${age}`);
}

// 42
{
  let student = {
    name: "Rahul",
    age: 20,
    course: "BCA"
  };
  console.log(student.name);
  console.log(student.age);
  console.log(student.course);
}

// 43
{
  let student = {
    name: "Rahul",
    greet: function () {
      console.log("Hello " + this.name);
    }
  };
  student.greet();
}

// 44
{
  let student = {
    name: "Rahul",
    age: 20
  };
  student.city = "Prayagraj";
  delete student.age;
  console.log(student);
}

// 45
{
  let student = {
    name: "Rahul",
    address: {
      city: "Prayagraj",
      state: "UP"
    }
  };
  console.log(student.address.city);
}

// 46
{
  let student = {
    name: "Rahul",
    age: 20
  };
  let { name, age } = student;
  console.log(name);
  console.log(age);
}

// 47
{
  let a = [1, 2, 3];
  let b = [...a, 4, 5];
  console.log(b);

  let student = {
    name: "Rahul",
    age: 20
  };
  let updatedStudent = {
    ...student,
    age: 21
  };
  console.log(updatedStudent);
}

// 48
{
  function add(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  console.log(add(10, 20, 30, 40));
}

// 49
{
  (function () {
    console.log(x);
    var x = 10;
  })();

  try {
    console.log(y);
    let y = 10;
  } catch (error) {
    console.log(error.message);
  }
}

// 50
{
  (function () {
    greet();
    function greet() {
      console.log("Hello");
    }
  })();

  try {
    greet();
    const greet = () => {
      console.log("Hello");
    };
  } catch (error) {
    console.log(error.message);
  }
}

// 51
{
  function outer() {
    let count = 0;
    function inner() {
      count++;
      console.log(count);
    }
    return inner;
  }
  let counter = outer();
  counter();
  counter();
  counter();
}

// 52
{
  let student = {
    name: "Rahul",
    showName: function () {
      console.log(this.name);
    }
  };
  student.showName();
}

// 53
{
  let student = {
    name: "Rahul"
  };
  console.log(student.address?.city);
}

// 54
{
  let name = null;
  let result = name ?? "Unknown";
  console.log(result);

  let x = 0;
  console.log(x || 100);
  console.log(x ?? 100);
}

// 55
{
  try {
    let result = x + 10;
  } catch (error) {
    console.log("Something went wrong");
  }

  try {
    console.log("Program running");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("This always runs");
  }
}

// 56
if (typeof document !== "undefined") {
  let heading = document.getElementById("title");
  console.log(heading);
  document.getElementById("title").innerText = "Hello JavaScript";
}

// 57
if (typeof document !== "undefined") {
  let heading = document.getElementById("title");
  heading.style.color = "red";
  heading.style.fontSize = "40px";
}

// 58
if (typeof document !== "undefined") {
  function sayHello() {
    alert("Hello Students!");
  }

  let button = document.querySelector("button");
  button.addEventListener("click", function () {
    console.log("Button clicked");
  });
}

// 59
if (typeof document !== "undefined") {
  function showName() {
    let name = document.getElementById("name").value;
    document.getElementById("result").innerText = "Hello " + name;
  }
}

// 60
if (typeof document !== "undefined") {
  function validate() {
    let name = document.getElementById("name").value;
    if (name == "") {
      alert("Name is required");
      return false;
    }
    return true;
  }
}

// 61
if (typeof localStorage !== "undefined") {
  localStorage.setItem("name", "Rahul");
  let name = localStorage.getItem("name");
  console.log(name);
  localStorage.removeItem("name");
  localStorage.clear();
}

// 62
{
  let student = {
    name: "Rahul",
    age: 20
  };
  let jsonData = JSON.stringify(student);
  console.log(jsonData);

  let objectData = JSON.parse(jsonData);
  console.log(objectData.name);
}

// 63
{
  class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    showDetails() {
      console.log(this.name);
      console.log(this.age);
    }
  }
  let s1 = new Student("Rahul", 20);
  s1.showDetails();
}

// 64
{
  class Student {
    study() {
      console.log("Student is studying");
    }
  }
  class BCAStudent extends Student {
    code() {
      console.log("Student is coding");
    }
  }
  let s = new BCAStudent();
  s.study();
  s.code();
}

// 65
{
  function greet(name, callback) {
    console.log("Hello " + name);
    callback();
  }
  function finish() {
    console.log("Welcome to JavaScript");
  }
  greet("Rahul", finish);
}

// 66
{
  let promise = new Promise(function (resolve, reject) {
    let success = true;
    if (success) {
      resolve("Task completed");
    } else {
      reject("Task failed");
    }
  });

  promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

// 67
{
  function getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data received");
      }, 2000);
    });
  }

  async function showData() {
    console.log("Waiting...");
    let result = await getData();
    console.log(result);
  }
  showData();
}

// 68
{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

  async function getUsers() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await response.json();
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  }
  getUsers();
}
