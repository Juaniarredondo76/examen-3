var estado = prompt ('Fijo o temporal')
var trabajador = prompt('Ingrese el nombre sabiendo que es fijo temporal');
var horas = prompt('Ingrese el numero de horas trabajadas');
var salarico = prompt (' ingrese el salario basico por horas');
var deduciones = prompt ('ingrese la deducciones si ere trabajador fijo o temporal');
var bonificacion = prompt ('ingrese la bonificacion asignada');
var total  
var msg

if ( trabajador == 'Fijo' || trabajador == 'fijo' ){
 Total = horas * salarico + deduciones + bonificacion  
    }
    else if  (( trabajador == 'Temporal' || trabajador == 'temporal')){
     Total = 60000000 + horas
    }
    msg = alert ('El trabajador' + trabajador+ 'tiene un estado ' + estado + 'porque tuvo un' + total)
   