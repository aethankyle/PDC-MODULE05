let car = {
    Brand : "Toyota",
    Variant : "Wigo",
    Tramsmission : "Automatic",
    Lights : {
        Front :"LED",
        Rear : "LED/Bulb",
        Signal : "Bulb"
    },
    displayBrand(){
        alert(this.Brand);
        
    }
}

class myCar {
    constructor (brand, variant, transmission){
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}