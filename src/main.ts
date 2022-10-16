/*-----Problem No.01----*/
// 1. Write a TypeScript program to list the properties of a TypeScript object

console.log(`/*-----Problem No.01----*/
List the properties of a Object
`)

interface student {
    name: string,
    class: string,
    rollNo?: number
}

const student = {
    name: "Mubeen Yasin",
    class: "ix",
    rollNo: 64318,
}

console.log(`
Name    = ${student.name}
Class   = ${student.class}
Roll No = ${student.rollNo}
`)

/*-----Problem No.02----*/
// 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

console.log(`
/*-----Problem No.02----*/
Delete the rollno property from the Object
`)

console.log(`Properties of Object "Studen" befor deleting`)
for (let property in student) {
    console.log(property)
}

delete student.rollNo // to delete a property of an object
console.log(`Properties of Object "Student" after deleting`)
for (let property in student) {
    console.log(property)
}

/*-----Problem No.03----*/
console.log(`
/*-----Problem No.03----*/
get the length of a TypeScript object
`)
console.log(`Length of Object Student's Properties = ${Object.keys(student).length}`)

/*-----Problem No.04----*/
console.log(`
/*-----Problem No.04----*/
display the reading status
`)

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

library.forEach(obj => {
    console.log(`
        Author        : ${obj.author}
        Title         : ${obj.title}
        ReadingStatus : ${obj.readingStatus}`)
})

/*-----Problem No.05----*/
console.log(`
/*-----Problem No.05----*/
Get the volume of a Cylinder with four decimal places
`)
// Volume of Cylender  V = πr2h => where r is the radius and h is the height of the cylinder

//1st Methood to create and call a class
// class crCylinderVolum1st {
//     pi: number = 10
//     h: number = 15
//     r: number = 3.14

//     v:number = this.pi * this.h * this.r

// }
// const cylinderVolum1st = new crCylinderVolum1st()
// console.log( cylinderVolum1st.v )


// 2nd Methood to create and call a class
class crCylinderVolum2nd {
    pi: number
    h: number
    r: number
    constructor(h: number, r: number) {
        this.h = h
        this.r = r
    }
    // Methood to calculate the Volume of Cylender
    calculate(): void {
        console.log((3.14 * this.h * this.r).toFixed(4))
    }
}
const cylinderVolum2nd = new crCylinderVolum2nd(10, 15) // Class instance
cylinderVolum2nd.calculate()

/*-----Problem No.06----*/
console.log(`
/*-----Problem No.06----*/
Bubble Sort algorithm
`)
//  Expected Output : [-2, 0, 1, 3, 4, 6]

let Data: number[] = [6, 4, 0, 3, -2, 1]

function swap(array: number[], a: number, b: number) {
    let temp: number = array[a]
    array[a] = array[b]
    array[b] = temp
}

function bubbleSort(array: number[]) {
    let xlength: number = array.length

    for (let i = 0; i < xlength; i++) {
        for (let j = 0; j < xlength - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }
    return array
}

console.log('The Array = [6, 4, 0, 3, -2, 1]')
console.log('Bubble Sorted Output = ', bubbleSort(Data))

/*-----Problem No.07----*/
console.log(`
/*-----Problem No.07----*/
returns a subset of a string
`)
//  Sample Data: dog
//  Expected Output: ["d", "do", "dog", "o", "og", "g"]

function subsetOfString(str: string) {
    let subset = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            let slicer: string = str.slice(i, j)  // (i=0, i=1 > d), (i=0, j=2 > do), (i=0, j=3 > dog), (i=1, j=2 > o), (i=1, j=3 > og), (i=2 > g)  
            subset.push(slicer);
        }
    }
    console.log(`[${subset}]`);
}
let str: string = 'dog'
console.log(`The String = "${str}"
Expected Output`)
subsetOfString(str)

/*-----Problem No.08----*/
console.log(`
/*-----Problem No.08----*/
create a Clock
`)
function showClock() {

    let time = new Date(); // parent function 
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    console.log(`${hour}:${min}:${sec}`)


}
showClock()

/*-----Problem No.09----*/
console.log(`
/*-----Problem No.09----*/
calculate the area and perimeter of a circle
`)
// perimeter = 2*pi*r
// area = pi*r**2

class calculateAreaPerimeter {
    radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    perimeter(): void {
        let result: number = 2 * Math.PI * this.radius
        console.log(`Perimeter of the Ciecle = ${result.toFixed(4)}`)
    }

    area(): void {
        let result: number = Math.PI * this.radius ** 2
        console.log(`Area of the Ciecle = ${result.toFixed(4)}`)
    }
}

const circleArea = new calculateAreaPerimeter(10)
const circlePerimeter = new calculateAreaPerimeter(5)

circleArea.area()
circlePerimeter.perimeter()

/*-----Problem No.10----*/
//10. Write a TypeScript program to sort an array of TypeScript objects.   

console.log(`
/*-----Problem No.10----*/
sort an array of TypeScript objects
`)
/*
const obj = { e: 'five', c: 'three', a: 'one', d: 'four', b: 'two' }

const sorted = Object.keys(obj).sort()
console.log(sorted)

const sortedWithValues = sorted.reduce((a, key) => {
    // console.log(a)
    // console.log(key)
    // console.log(obj[key])
    a[key] = obj[key];
    // console.log(a)
    return a
}, {})

console.log('The Object', obj)
console.log('Sorted Object', sortedWithValues)
console.log('*******************************')
*/
let lib: any = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254,
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID2: 5264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
        libraryID2: 3246
    }
]

console.log('The Unsorted Object', lib[0])

console.log('The Sorted Object')
for (let i = 0; i < lib.length; i++) {
    let sorted = Object.keys(lib[i]).sort()
    // console.log('Sorted = ', sorted)
    let sortedWithValues = sorted.reduce((a, key) => {
        // console.log(a)
        // console.log('Key Of Lib:', key)
        // console.log('Property of Lib: ', lib[0][key])
        a[key] = lib[i][key]
        // console.log(a)
        return a
    }, {})
    console.log(`${lib[i]}`, sortedWithValues)
}


// /*-----Problem No.11----*/
// // 11. Write a TypeScript function to print all the methods in an TypeScript object.

// //console.log(all_properties(Array));
// //["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

// function all_properties(arg){
//     Object.getOwnPropertyNames(arg).filter(function (a) {
//         return typeof arg[a] === 'function'
//     })
// }
console.log('Object Propotype =>', Object.prototype)

/*
var EmptyObj = 54;
console.log(Object.getOwnPropertyNames(EmptyObj).filter(function (x) {
    return typeof EmptyObj[x] === 'function'
}));

var EmptyObjP = Array.prototype;
console.log(Object.getOwnPropertyNames(EmptyObjP).filter(function (x) {
    return typeof EmptyObjP[x] === 'function'
}));

interface onj001 {
    name: string,
    age: number
}
let obj001 = {
    name: 'mubeen',
    age: 45
}
console.log(Object.getOwnPropertyNames(obj001).filter(function (x) {
    return typeof obj001[x] === 'function'
}));


// console.log(`
// /*-----Problem No.11----*/
// print all the methods in an TypeScript object
// `)


// let iArray: string[] = ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]



// /*-----Problem No.12----*/
// console.log(`
// /*-----Problem No.12----*/
// Write a TypeScript function to parse an URL

// "Panding"
// `)


// /*-----Problem No.13----*/
// //Write a TypeScript function to retrieve all the names of object's own and inherited properties.
interface types {
    name: string,
    fName: string,
    class?: string,
    age?: number,
}

let objA: types = {
    name: "Mubeen",
    fName: "Yasin",
    age: 40
}




console.log(`
/*-----Problem No.13----*/
retrieve all the names of object's own and inherited properties
`)



// /*-----Problem No.14----*/
// // 14. Write a TypeScript function to retrieve all the values of an object's properties.
// console.log(`
// /*-----Problem No.14----*/
// retrieve all the values of an object's properties.
// `)



// /*-----Problem No.15----*/
// // 15. Write a TypeScript function to convert an object into a list of `[key, value]` pairs.

// console.log(`
// /*-----Problem No.15----*/
// retrieve all the values of an object's properties.
// `)


// /*-----Problem No.16----*/
// // 16. Write a TypeScript function to get a copy of the object where the keys have become the values and the values the keys.

// console.log(`
// /*-----Problem No.16----*/
// retrieve all the values of an object's properties.
// `)



// /*-----Problem No.17----*/
// // 17. Write a TypeScript function to check whether an object contains given property.

// console.log(`
// /*-----Problem No.17----*/
// retrieve all the values of an object's properties.
// `)

/*
-----------------------
SORT A OBJECT BY VALUES
-----------------------

interface employee {
    empId: number,
    empDesignation: string
}

let employeesList: Array<employee> = [
    {empId: 20, empDesignation: 'senior engineer'},
    {empId: 14, empDesignation: 'junior engineer'},
    {empId: 25, empDesignation: 'program manager'},
    {empId: 12, empDesignation: 'director'}
]

employeesList.sort(
    (firstObject: employee, secondObject: employee) =>
        (firstObject.empDesignation > secondObject.empDesignation) ? 1 : -1
);

console.log(employeesList)

*/

