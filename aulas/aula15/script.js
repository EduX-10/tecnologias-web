//Variáveis

const pi = 3.141592;
var nome = "Teste";
let idade = 67;

//Tipos de dados

var string = "texto";
var number = 10;
var boolean = (4 === "4");
var undefined;
object = {nome: 'Edu', idade: '19'};
array = [1,2,3,4,5];
let legal;
legal = 1;
console.log(legal);
legal = "p";

//For in

nums = [10,20,30,40];
for(let a in nums){
    console.log(nums[a]);
}

//Funções de array

let frutas = ["banana", "maçã", "uva", "tanjerina"];

frutas.push("pêra"); //Adiciona na última posição
frutas.pop; //Remove a última posição

//frutas.forEach(item => console.log(item));
//frutas.map(item => console.log(item));

const n = frutas.filter(item => item.includes("n")).map(item => console.log(item));
