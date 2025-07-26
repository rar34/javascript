const student = {
    name: "Abul Hossain",
    age: 18,
    roll: 15,
    section: "Science",
    Address: "Mymensingh"
}



// console.log(student.name)
// console.log(student["section"])

// const key = Object.keys(student)

// console.log(key)

for( const prop in student){
    // console.log(prop)
    console.log(prop + ":" + student[prop])
}