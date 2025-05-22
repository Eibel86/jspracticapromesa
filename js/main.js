///////PRACTICA PROMESA  
const idButton = document.querySelector("#idButton");
const container = document.getElementById('container');
// // ///EVENTO
idButton.addEventListener("click", (ev)=>{
   //llamar a una función
   getApiData()
});
// //FUNCIONES
const api=()=>{

     return new Promise((resolve, reject) => {
        const isOk=false;
        setTimeout (()=>{
            if (isOk){
                let objApi = {
                    id: "1",
                    nombre: "Abel",
                    mail: "abel@gmail.com",  
                };
                resolve (objApi);
                } else {
                reject ("Error. No encontrado");
                }
        },2000);  
    })
}
// // ///INVOCAR FUNCIONES

const getApiData=()=>{
    api() 
        .then((respuesta) => {
            container.innerHTML=`<p>${respuesta.nombre} - ${respuesta.mail}</p>`;
        }) 
        .catch((error) => {
            container.innerHTML = error;
        })
        .finally(() => {
            console.log("fin de buscar");
        }) 

}
