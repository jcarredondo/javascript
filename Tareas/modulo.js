console.log(2 * 3 + 1); 
console.log(2 ** 4); 
console.log(5 * 1); 
console.log(8 **2 - 5 ** 2); 
//
console.log(4 * 5 === 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);  
console.log(25 > 1);  
console.log(2 + 2 * 2 != 4);
//
console.log(true || false);  
console.log(false || ! false);  
console.log(false || false || true);  
console.log(true || false && false && true);
//
let ancho = prompt("Ingresa el ancho", 0);
let alto = prompt("Ingresa la altura", 0);
let largo = prompt("Ingresa el largo", 0);
let volume = ancho * alto * largo;
alert(`El volumen de la caja es ${volume}`);
//
let contactos = [{
    name: "Miguel Mendoza",
    phone: "(591) 71926495",
    email: "mmiguel@institute.br"
    }, {
    name: "Riana Mendizabal",
    phone: "(591) 75689124",
    email: "rianam@dictor.com"
    }, {
    name: "Jorge Gutierrez",
    phone: "(671) 080001111",
    email: "libero@vallis.edu"
    }];
    
    let nuevoContacto = {
        name: "Juan Carlos Arredondo",
        phone: "(591) 79851993",
        email: "jcarredondov@hotmail.com"
    };
    contactos.push(nuevoContacto);
    
    
    let ultimo = contactos.length - 1;
    
    console.log(`${contactos[0].name} / ${contactos[0].phone} / ${contactos[0].email}`);
    console.log(`${contactos[ultimo].name} / ${contactos[ultimo].phone} / ${contactos[ultimo].email}`);
    
