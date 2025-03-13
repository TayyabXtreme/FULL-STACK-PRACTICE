function fetchData(callback:(namr:string)=>void){
    setTimeout(()=>{
        callback('Ali');
    }, 2000);
    callback('Anees');
}

function greet(name:string){
    console.log( `Hello ${name}`);
}


fetchData(greet)


