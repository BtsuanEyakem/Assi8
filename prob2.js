const Student = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
}

Student.prototype.computeAverage = function(){
    return this.grades.reduce((accum,curr,i,aray)=>accum+curr/aray.length,0);
}
Student.prototype.printInfo = function(){
    console.log(`${this.firstName} ${this.lastName} => Average: `+ this.computeAverage())
}

let stu1 = new Student("mimi","eyk");
stu1.inputNewGrade(67);
stu1.inputNewGrade(80);
stu1.printInfo();
// console.log(stu1.firstName);
// console.log(stu1.grades);
// console.log(stu1.computeAverage());