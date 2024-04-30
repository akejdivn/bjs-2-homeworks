function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  this.marks.push(...marks)
}
Student.prototype.getAverage = function () {
  if (Array.isArray(this.marks) ){
    return 0
  } else { 
    for( let propery in this.marks){
        let sum = 0;
       return Math.round((sum += propery) / this.marks.length)
    }
  }
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks
  this.reason = reason
}

