/*-----Problem No.01----*/
// 1. Write a TypeScript program to list the properties of a TypeScript object
console.log("/*-----Problem No.01----*/\nList the properties of a Object\n");
var student = {
    name: "Mubeen Yasin",
    "class": "ix",
    rollNo: 64318
};
console.log("\nName    = ".concat(student.name, "\nClass   = ").concat(student["class"], "\nRoll No = ").concat(student.rollNo, "\n"));
/*-----Problem No.02----*/
// 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
console.log("\n/*-----Problem No.02----*/\nDelete the rollno property from the Object\n");
console.log("Properties of Object \"Studen\" befor deleting");
for (var property in student) {
    console.log(property);
}
delete student.rollNo; // to delete a property of an object
console.log("Properties of Object \"Student\" after deleting");
for (var property in student) {
    console.log(property);
}
/*-----Problem No.03----*/
console.log("\n/*-----Problem No.03----*/\nget the length of a TypeScript object\n");
console.log("Length of Object Student's Properties = ".concat(Object.keys(student).length));
/*-----Problem No.04----*/
console.log("\n/*-----Problem No.04----*/\ndisplay the reading status\n");
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
    }
];
library.forEach(function (obj) {
    console.log("\n        Author        : ".concat(obj.author, "\n        Title         : ").concat(obj.title, "\n        ReadingStatus : ").concat(obj.readingStatus));
});
/*-----Problem No.05----*/
console.log("\n/*-----Problem No.05----*/\nGet the volume of a Cylinder with four decimal places\n");
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
var crCylinderVolum2nd = /** @class */ (function () {
    function crCylinderVolum2nd(h, r) {
        this.h = h;
        this.r = r;
    }
    // Methood to calculate the Volume of Cylender
    crCylinderVolum2nd.prototype.calculate = function () {
        console.log((3.14 * this.h * this.r).toFixed(4));
    };
    return crCylinderVolum2nd;
}());
var cylinderVolum2nd = new crCylinderVolum2nd(10, 15); // Class instance
cylinderVolum2nd.calculate();
/*-----Problem No.06----*/
console.log("\n/*-----Problem No.06----*/\nBubble Sort algorithm\n");
//  Expected Output : [-2, 0, 1, 3, 4, 6]
var Data = [6, 4, 0, 3, -2, 1];
function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
function bubbleSort(array) {
    var xlength = array.length;
    for (var i = 0; i < xlength; i++) {
        for (var j = 0; j < xlength - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
console.log('The Array = [6, 4, 0, 3, -2, 1]');
console.log('Bubble Sorted Output = ', bubbleSort(Data));
/*-----Problem No.07----*/
console.log("\n/*-----Problem No.07----*/\nreturns a subset of a string\n");
//  Sample Data: dog
//  Expected Output: ["d", "do", "dog", "o", "og", "g"]
function subsetOfString(str) {
    var subset = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j < str.length + 1; j++) {
            var slicer = str.slice(i, j); // (i=0, i=1 > d), (i=0, j=2 > do), (i=0, j=3 > dog), (i=1, j=2 > o), (i=1, j=3 > og), (i=2 > g)  
            subset.push(slicer);
        }
    }
    console.log("[".concat(subset, "]"));
}
var str = 'dog';
console.log("The String = \"".concat(str, "\"\nExpected Output"));
subsetOfString(str);
/*-----Problem No.08----*/
console.log("\n/*-----Problem No.08----*/\ncreate a Clock\n");
function showClock() {
    var time = new Date(); // parent function 
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    console.log("".concat(hour, ":").concat(min, ":").concat(sec));
}
showClock();
/*-----Problem No.09----*/
console.log("\n/*-----Problem No.09----*/\ncalculate the area and perimeter of a circle\n");
// perimeter = 2*pi*r
// area = pi*r**2
var calculateAreaPerimeter = /** @class */ (function () {
    function calculateAreaPerimeter(radius) {
        this.radius = radius;
    }
    calculateAreaPerimeter.prototype.perimeter = function () {
        var result = 2 * Math.PI * this.radius;
        console.log("Perimeter of the Ciecle = ".concat(result.toFixed(4)));
    };
    calculateAreaPerimeter.prototype.area = function () {
        var result = Math.PI * Math.pow(this.radius, 2);
        console.log("Area of the Ciecle = ".concat(result.toFixed(4)));
    };
    return calculateAreaPerimeter;
}());
var circleArea = new calculateAreaPerimeter(10);
var circlePerimeter = new calculateAreaPerimeter(5);
circleArea.area();
circlePerimeter.perimeter();
/*-----Problem No.10----*/
//10. Write a TypeScript program to sort an array of TypeScript objects.   
console.log("\n/*-----Problem No.10----*/\nsort an array of TypeScript objects\n");
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
var lib = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
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
];
console.log('The Unsorted Object', lib[0]);
console.log('The Sorted Object');
var _loop_1 = function (i) {
    var sorted = Object.keys(lib[i]).sort();
    // console.log('Sorted = ', sorted)
    var sortedWithValues = sorted.reduce(function (a, key) {
        // console.log(a)
        // console.log('Key Of Lib:', key)
        // console.log('Property of Lib: ', lib[0][key])
        a[key] = lib[i][key];
        // console.log(a)
        return a;
    }, {});
    console.log("".concat(lib[i]), sortedWithValues);
};
for (var i = 0; i < lib.length; i++) {
    _loop_1(i);
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
console.log('Object Propotype =>', Object.prototype);
var objA = {
    name: "Mubeen",
    fName: "Yasin",
    age: 40
};
console.log("\n/*-----Problem No.13----*/\nretrieve all the names of object's own and inherited properties\n");
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
