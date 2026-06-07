let data=
[
  { name: "Aman", marks: 85 },
  { name: "Priya", marks: 45 },
  { name: "Rohit", marks: 72 },
  { name: "Neha", marks: 91 },
  { name: "Karan", marks: 38 }
];

const fetchStudents =()=> {
    return  new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(data);
        }, 20000);
    });
};

fetchStudents().then(data=> console.log(data));


function getStudents() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: "Aman", marks: 85 },
                { name: "Priya", marks: 45 },
                { name: "Rohit", marks: 72 },
                { name: "Neha", marks: 91 },
                { name: "Karan", marks: 38 }
            ]);
        }, 1000);
    });
}

async function analyzeMarks() {
    try {
        const students = await getStudents();
        const names = students.map(student => student.name);
        const passedStudents = students.filter(student => student.marks >= 50);
        const totalMarks = students.reduce(
            (sum, student) => sum + student.marks,
            0
        );

        const averageMarks = totalMarks / students.length;
        console.log("Names:", names);
        console.log("Passed Students:");
        console.log(passedStudents);

        console.log("Total Marks:", totalMarks);

        console.log("Average Marks:", averageMarks);
    } catch (error) {
        console.error("Error:", error);
    }
}

analyzeMarks();