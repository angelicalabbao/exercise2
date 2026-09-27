let school = "NorthWest Samar State University";
let section = "BSIT-3C";
let passingScore = 75;



let students = ["angelica", "vivian", "jelyza"];
let subjects = ["Science", "Math", "English"];
let scores = [85, 70, 90];



let schoolInfo = {
    name: "NorthWest Samar State University",
    city: "Calbayog"
};

let courseInfo = {
    course: "BSIT",
    year: 3
};




class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}




class Student extends Person {

    study() {
        console.log(this.name + " is studying.");
    }

    showGrade() {
        console.log(this.name + "'s grade: " + this.grade);
    }
}



class Teacher extends Person {

    teach() {
        console.log(this.name + " is teaching.");
    }
}



class Course {

    #courseName;

    constructor(courseName) {
        this.#courseName = courseName;
    }

    showCourse() {
        console.log("Course: " + this.#courseName);
    }
}



class BankAccount {

    #money;

    constructor(money) {
        this.#money = money;
    }

    showMoney() {
        console.log("Money: " + this.#money);
    }
}



let student1 = new Student("Angelica", 20);
student1.grade = 85;

let student2 = new Student("Vivian", 21);
student2.grade = 70;

let teacher1 = new Teacher("Mr. Cruz", 35);

let course1 = new Course("Bachelor of Science in Information Technology");



student1.introduce();

student1.study();

student1.showGrade();

teacher1.teach();

course1.showCourse();



let people = [student1, teacher1];

for (let person of people) {
    person.introduce();
}

if (scores[0] >= passingScore) {
    console.log("Angelica passed.");
}

if (scores[1] >= passingScore) {
    console.log("Jelyza passed.");
} else {
    console.log("Vivian failed.");
}

if (scores[2] >= 90) {
    console.log("Angelica has an excellent score.");
}

console.log("STUDENTS:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("SUBJECTS:");

for (let subject of subjects) {
    console.log(subject);
}

console.log("SCORES:");

let i = 0;

while (i < scores.length) {
    console.log(scores[i]);
    i++;
}


console.log("School: " + schoolInfo.name);
console.log("City: " + schoolInfo.city);
console.log("Section: " + section);
console.log("Course: " + courseInfo.course);
console.log("Year: " + courseInfo.year);
