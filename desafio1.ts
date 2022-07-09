// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee = {};
employee.code = 10;
employee.name = "John";*/


interface employee  {
    nome: string,
    code: number
} 

let john : employee = {
  nome: 'John',
  code: 10
}

console.log(john)

