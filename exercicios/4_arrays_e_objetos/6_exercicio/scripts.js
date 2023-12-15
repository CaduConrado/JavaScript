function verifica(array){
    if(array.length < 5){
        console.log("Poucos elementos.");
    }else{
        console.log("Muitos elementos.");
    }
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3];

verifica(array1);
verifica(array2);