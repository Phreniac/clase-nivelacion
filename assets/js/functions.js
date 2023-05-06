// alert('Hola Mundo!');
// const num = 10;
// const str = 'Soy un string';
// const bool = true;
// const arr = ['Texto 1', 'Texto2'];s
const array = ['valor 1', 'valor2'];
array[1] = 'valor 3';
console.log('array', array);

const obj = {
    nombre: 'Objeto',
    numero: 20
}
obj.nombre = 'Objeto con otro nombre';
console.log('Objeto', obj);

// let nulo = null;

// console.log(typeof num, num);
// console.log(typeof str, str);
// console.log(typeof bool, bool);
// console.log(typeof arr, arr);
// console.log(typeof obj, obj);

let x = 2;
let z = 1;
let y = 5;
let w = 21;

// let titulo_1 = document.getElementById('titulo_1');

// console.log('elemento h1', titulo_1);

// if((x <= z && w > y) || w === 20){
//     titulo_1.innerHTML = 'Entra a la condicion';
// }else{
//     titulo_1.innerHTML = 'No entra a la condicion';
// }
// switch (true) {
//     case x < 4 && x > z:
//         console.log('x es menor a 4');
//         break;
//     case 5:
//         console.log('x es igual a 3');
//         break;
//     case 7:
//         console.log('x es igual a 3');
//         break;
//     case 8:
//         console.log('x es igual a 3');
//         break;
//     default:
//         console.log('Este es el caso por defecto');
// }

let array1 = [1,4,6,23,54];
let array2 = [[4,2,3],[10,22,34],[53,78,99]];


const tname = ['Nombre','Apellido','Dirección'];
const t_head = document.getElementById('t_head');

// let t_head_content = `<tr>
//     <th>${tname[0]}</th>
//     <th>${tname[1]}</th>
//     <th>${tname[2]}</th>
//     </tr>`;

// ejemplo de for para llenar una fila de cabecera en una tabla
let thead_content_start = `<tr>`;
const thead_content_end = `</tr>`;

for (let i = 0; i < tname.length; i++) {
    let th = `<th>${tname[i]}</th>`;
    thead_content_start += th;
}
thead_content_start += thead_content_end;
t_head.innerHTML = thead_content_start;



// for (let i = 0; i < array2.length; i++) {
//     console.log('i',i, array2[i]);
//     for (let j = 0; j < array2.length; j++) {
//         console.log('j',j,array2[i][j]);
//     }
// }
// array2.forEach(i => {
//     console.log(i);
//     i.forEach(j =>{
//         console.log(j);
//     })
// });

//ejemplo de for in, recorriendo un objeto
let persona = {
    nombre:'Jorge',
    direccion:'Hormazabal',
    telefono:'123',
    email:'123@123.com',
}

for (const llave in array1) {
    console.log(key, array1[llave]);
}



