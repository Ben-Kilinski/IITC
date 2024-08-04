/*let students = [
    { id: "1", name: "omer", grade: 100 },
    { id: "2", name: "avi", grade: 80 },
    { id: "3", name: "gaga", grade: 60 }
]

let names = ["baba", "ben", "john"]
function createPeople(names) {
    let newArray = []
    for (let i = 0; i < names.length; i++) {
        let nameObjc = { name: names[i] };
        newArray.push(nameObjc);
    }
    console.log(newArray);
}
createPeople(names)

/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/


let employees = [
    { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
    { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
    { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
    { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
    { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
    { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

function groupBy(array, key) {
  let result = {};  // Inicializa um objeto vazio para armazenar os resultados agrupados

  // Itera sobre cada objeto no array usando um loop for tradicional
  for (let i = 0; i < array.length; i++) {
      let keyValue = array[i][key];  // Obtém o valor da propriedade especificada

      if (!result[keyValue]) {  // Se o valor da chave não existir no objeto resultado, cria um array vazio para ele
          result[keyValue] = [];
      }

      result[keyValue].push(array[i]);  // Adiciona o objeto atual ao array correspondente ao valor da chave
  }

  return result;  // Retorna o objeto agrupado
}
console.log(groupBy(employees, "department"));




/*
{
  Engineering: [
    { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
  ],
  Marketing: [
    { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
    { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
    { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
  ]
}
*/


