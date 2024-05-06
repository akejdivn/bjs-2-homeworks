function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  let marks = [];
  this.marks = marks
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  if(Student.hasOwnProperty(this.marks) ){
      this.marks.push(...marks)  
  } 
  return 0
  }
  Student.prototype.getAverage = function () {
    if(Array.isArray(this.marks) === true){
    let result = this.marks.reduce((acc, item) =>{
       acc + item
       return result
      }
    ) 
    }
     
    }



Student.prototype.exclude = function (reason) {
  delete setSubject.subject;
  delete Student.marks;
  this.reason = exclude
}

