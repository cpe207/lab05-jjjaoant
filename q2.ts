
  interface Student {
    name: string;
    score: number;
  }


function findTopNames(students: Student[]): string[]{
  return students
  .filter(student => student.score > 8)
  .map(student => student.name)
}


const students1:Student[] = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//นางสาวธัญชนก แนนสินธิ์ 660610763