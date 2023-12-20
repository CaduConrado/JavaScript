let cachorro = {
    patas: 4,
    raca: "Not Defined",
    latir: function(){
        console.log("Au au");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return this.raca;
    }
}

let york = Object.create(cachorro);

york.latir();

york.setRaca("York Shire");

console.log(york.getRaca());

let viraLata = Object.create(cachorro);

viraLata.setRaca("Viralata");

console.log(viraLata.getRaca());