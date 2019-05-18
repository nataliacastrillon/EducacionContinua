const fs = require('fs');
const opciones = {
	identificador: {
		demand: true,
		alias: 'i'
	},
	nombre: {
		demand: true, 
		alias: 'n'
	},
	cedula: {
		demand: true, 
		alias: 'c'
	}
}

const argv = require('yargs')
	.command('inscribir', 'Inscripcion a cursos', opciones)
	.argv;


let cursos = [{
		id: 1,
		nombre: 'Personas y teoria del negocio juridico',
		duracion: 60,
		valor: 120000
	},{
		id: 2,
		nombre: 'Teoria general del proceso',
		duracion: 45,
		valor: 64000
	},{
		id: 3,
		nombre: 'Derechos constitucionales',
		duracion: 40,
		valor: 85000
	},{
		id: 4,
		nombre: 'Derecho penal especial',
		duracion: 60,
		valor: 96000
	}
];


if(typeof argv.i === 'undefined'){

	//Historia de usuario 1 
	let imprimirCursos=(curso, cont, callback)=>{
	 	setTimeout(function(){ 		
	 		let cadena = 'Id: ' + curso.id + '\n' +
	 					 'Nombre curso: ' + curso.nombre + '\n' +
	 					 'Duracion: ' + curso.duracion + '\n' + 	
	 					 'Valor: ' + curso.valor + '\n' +
	 					 '**********************************\n';
	 		callback(cadena);
	 	}, (i*2*1000))
	}


	for(var i = 0; i<cursos.length; i++){
		imprimirCursos(cursos[i], i, function(resultado){
		console.log(resultado);
	})
		
	};
}else{
	//Historia de usuario 1 
	let val = cursos.find(function(element) {
	  return element.id == argv.i;
	});
	if(val != undefined){
		let text = 'El estudiante ' + argv.n + ' con cedula ' + argv.c + '\r\n' +
				   'se matriculo al siguiente curso: '	+ '\r\n' +
				   '**********************************\r\n' +
				   'Id: ' + val.id + '\r\n' +
				   'Nombre curso: ' + val.nombre + '\r\n' +
				   'Duracion: ' + val.duracion + '\r\n' + 	
				   'Valor: ' + val.valor + '\r\n' +
				   '**********************************\r\n';
		fs.writeFile('inscribir.txt', text, (err)=>{
		if (err) throw (err);
		console.log('Se ha creado el archivo indicando que se matriculo al siguiente curso: '	+ '\n' +
				   '**********************************\n' +
				   'Id: ' + val.id + '\n' +
				   'Nombre curso: ' + val.nombre + '\n' +
				   'Duracion: ' + val.duracion + '\n' + 	
				   'Valor: ' + val.valor + '\n' +
				   '**********************************\n'
			);
		});

	}else{
		console.log('No se ha encontrado un curso con el id ingresado ' + '\n' +
					'Acontinuacion se listan los cursos disponibles: ' );
		for(var i = 0; i<cursos.length; i++){
		console.log( 'Id: ' + cursos[i].id + '\n' +
 					 'Nombre curso: ' + cursos[i].nombre + '\n' +
 					 'Duracion: ' + cursos[i].duracion + '\n' + 	
 					 'Valor: ' + cursos[i].valor + '\n' +
 					 '**********************************');
		}
	}
}




