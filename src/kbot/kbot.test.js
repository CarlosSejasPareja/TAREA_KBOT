const Kbot = require("./Kbot");

/*console.log("Saludar a Andrés en idioma default".toUpperCase());
let kbot = new Kbot();
console.log(kbot.saludar("Andrés") == "Buenos días Andrés");

kbot = new Kbot("EN");
console.log("Saludar a Andrés en ingles".toUpperCase());
console.log(kbot.saludar("Andrés") == "Good morning Andrés");

console.log("Saludar a Andrés en espanol por la tarde".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Andrés", 14)=="Buenas tardes Andrés");

console.log("Saludar a Juan en espanol por la noche".toUpperCase());
kbot = new Kbot("ES");
console.log(kbot.saludar("Juan", 20)=="Buenas noches Juan");*/

describe("Saludor", () => {
    it("deberia Saludar a Andrés en idioma default", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés") 
        expect(resultado).toEqual("Buenas noches Andrés");
    });
   //saludar en la tarde ambos idiomas

    it("Saludar a Andrés en espanol por la tarde", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 14)
        expect(resultado).toEqual("Buenas tardes Andrés");
    });

    it("Saludar a Andrés en ingles por la tarde ", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés", 14)
        expect(resultado).toEqual("Good afternoon Andrés");
    });

    //saludar en la Noche en ambos idiomas

    it("Saludar a Andrés en espanol por la noche", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 20)
        expect(resultado).toEqual("Buenas noches Andrés");
    });

    it("Saludar a Andrés en ingles por la noche ", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Andrés", 20)
        expect(resultado).toEqual("Good evening Andrés");
    });


    
  });
  