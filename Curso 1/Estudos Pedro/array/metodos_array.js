let arr = [1, 2, 3, 4, 5];

arr.forEach(function(el, index, array){
    console.log(el);
    console.log(index);
    console.log(array);
})

let dobroArr = arr.map((el) => el * 2); 