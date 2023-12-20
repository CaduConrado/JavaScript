const cachorro = {
    raca: "Not Definedd",
    uivar: function (){
        console.log("auauau");
    },
    rosnar: function(){
        console.log("grrrrrrrr");
    }, 
    setRaca: function (raca){
        this.raca = raca;
    },
    getRaca: function(){
        return this.raca;
    }
}

cachorro.uivar();
cachorro.rosnar();
console.log(cachorro.raca);
cachorro.setRaca("Pastor Alemão");
console.log(cachorro.getRaca());