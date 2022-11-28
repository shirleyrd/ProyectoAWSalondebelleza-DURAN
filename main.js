//* Gestor de clientes de peluqueria, carga de datos de clientes, diagnóstico y trabajos realizados en la última visita*/

/*Carga usuario y contraseña para ingresar al sector de carga de datos.*/
let usuario = prompt ("Ingresar nombre de Usuario");
let password = 12345;
let intentoPassword = 5;
let ingresoPassword = parseInt (prompt("Ingresar contraseña"));

while (ingresoPassword != password && intentoPassword > 0) {
    intentoPassword = intentoPassword -1;
    alert (`${usuario} contraseña incorrecta! quedan ${intentoPassword} intentos!`);
    ingresoPassword = parseInt (prompt("Ingresar contraseña correcta"));   
   
    } 
    alert(`Bienvenido/a ${usuario}`); 

/*Funciones*/

function cargaCliente() {   
let nombreCliente = prompt("Ingrese nombre de cliente");
console.log(nombreCliente);
let telefonoCliente = parseInt(prompt("Ingrese número teléfono de cliente"));
console.log(telefonoCliente);
let estilista =  prompt ("Estilista responsable");
console.log(estilista);
}

function cargaTrabajoRealizado () {
    let trabajoRealizado = prompt( "Cargar trabajo realizados a cliente, y recomendaciones");
    console.log (trabajoRealizado);
    alert("Datos de cliente cargados correctamente");
}
//Carga de datos cliente//

let visitasCliente = prompt("Nuevo cliente marcar Si o No");

if (visitasCliente == "si") {
     cargaCliente();
     alert("Cargar diagnóstico inicial");
     /*Ingreso de diagnóstico si es nuevo cliente. El diagnostico es para ver el tipo de cabello del cliente y que se guarden estos datos para cualquier estilista que tenga que trabajar con el cliente. En caso de que sea un cliente recuerrente solo se carga el trabajo realizado. */
   
         
               let texturaCabello = prompt("¿Cuál es la textura del cabello del cliente? 1.Lacio, 2.Ondulado, 3.Rizado");
               switch(texturaCabello) {
                   case "Lacio":                       
                       console.log("Lacio");
                       break;
                  case "Ondulado":                       
                       console.log("Ondulado");
                       break;
                   case "Rizado":
                       alert("el cabello tiene textura rizada");
                       console.log("Rizado");
                       break;
                   default:
                       prompt("Debe selccionar una opción");
                       break;    
                }

               let grosorCabello = prompt("¿Cuál es el grosor del cabello? 1.Fino 2.Medio 3.Grueso");
               switch(grosorCabello) {
                    case "Fino":                         
                         console.log ("Fino");
                         break;
                    case "Medio":                        
                         console.log ("Medio");
                         break;
                    case "Grueso":                          
                         console.log ("Grueso");
                         break;
                    default:
                         prompt("Seleccionar una opción válida");
                         break;
                }

                let cueroCabelludo = prompt ("¿Cuál es el tipo de cuero cabelludo? 1.Seco 2.Graso 3.Normal");
                switch(cueroCabelludo) {
                     case "Seco":
                        console.log ("Cuero cabelludo seco");
                        break;
                     case "Graso":
                        console.log ("Cuero cabelludo graso");
                        break;
                     case "Normal":
                        console.log ("Cuero cabelludo normal");
                        break;
                     default:
                        prompt("Seleccionar opción valida");
                        break;
                }
             
                let trabajosTecnicos = prompt ("¿Tiene trabajos técnicos realizados?");
                let tiempoTrabajoRealizado;

                if (trabajosTecnicos == "si") {

                     let trabajosTecnicosRealizados=prompt("¿Cuál de los siguientes trabajos te haz realizado? 1.Color 2.Decoloracion 3. Alisado");
                     switch(trabajosTecnicosRealizados) {
                       case "Color":
                           console.log ("Color");
                           break;
                       case "Decoloracion":
                           console.log ("Decoloracion");
                           break;
                       case "Alisado":
                           console.log ("Alisado");
                           break;
                       default:
                           console.log ("Seleccionar una opción válida");
                           break
                     }                    

                   let tiempoTrabajoRealizado = parseInt(prompt("Meses desde último trabajo técnico?"));
                     if (tiempoTrabajoRealizado <= 3) {
                         alert ("Cabello sensibilizado, no apto paara trabajos técnicos, recomendar nutrición");
                     } else if (tiempoTrabajoRealizado > 3 && tiempoTrabajoRealizado <= 6) {
                         alert ("Cabello levemente sensibilizado, realizar tratamiento y trabajo técnico dependiendo del estado del cabello");
                     } else {
                         alert ("Cabello no tratado, apto para cualquier trabajo técnico"); 
                     }          

                cargaTrabajoRealizado ();  

                } else {
                 diagnosticoResultado = alert (`El cliente tiene el cabello ${grosorCabello} con una textura de tipo  ${texturaCabello} y el cuero cabelludo es ${cueroCabelludo}, no presenta trabajos técnicos`);
                 cargaTrabajoRealizado (); 
                }
                           
} else {
 /*Si el cliente ya estuvo anteriormente, solo se cargan datos y trabajo realizado para tener detalle de productos y técnicas utilizados.*/        
 cargaCliente()  
 cargaTrabajoRealizado ()
 }




    









 


















