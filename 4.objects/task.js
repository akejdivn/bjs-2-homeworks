function Student(name, gender, age, marks) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
 if(("this.marks") in Student === true)
    this.marks.push(...marks)
  
  } 
  Student.prototype.getAverage = function () {
    if(Array.isArray(this.marks) === true){
   for (let i = 0; i < this.marks.length; i++){
     let sum = 0;
     sum += this.marks[i];
     let average = sum / this.marks.length;
     return average;
   } 
      
    }
    return 0
  }



Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason
}

let student1 = new Student("Tony", "male", 37);

console.log(student1.getAverage()); // должен вывестись ноль

student1.addMarks(4,4,4);

console.log(student1.getAverage());