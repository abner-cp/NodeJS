const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => { //función que retorna una promesa

    
    return new Promise(( resolve, reject ) => { //declaración de promesa

        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado ) //operador ternario
            ? resolve( empleado )
            : reject( `No existe empleado con id ${ id }` );
    });
}

const getSalario = () => { //función que retorna una promesa

    return new Promise(( resolve, reject ) => { //declaración de promesa

        const salario = salarios.find( s => s.id === id )?.salario;

        ( salario ) 
            ? resolve( salario )
            : reject( `No existe salario con id ${ id }` );
    });
}


const getInfoUsuario = async( id ) => {

    try {  //se utiliza para manejor de errores async await
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El salario del empleado: ${ empleado } es de ${ salario }`;
        
    } catch (error) {
        throw error; //throw lanza el reject de la promesa (error)
    }
}


const id = 3;

getInfoUsuario( id )
    .then( msg => {
        console.log('TODO BIEN!')
        console.log(msg) 
    })
    .catch( err => {
        console.log('TODO MAL!') //captura el reject de la promesa
        console.log( err ) 
    });


