// let object = {
//   name: "Ikrom",
//   age: "1"
  
// };
// let name = document.querySelector(".name")
// let age = document.querySelector(".age")
// let btn = document.querySelector(".btn")

// function array(object){
//   for( let i = 0; i< object.length ; i++){
//     let clone = template.cloneNode(true)
//     let name1 = clone.querySelector(".name1")
//     name1.appenChild(document.createTextNode.object[i].name1)
//   }
// }
// render(object) 


function km(event){
    let result = []
    if(event[event.length-2] === "k"){
      for(let i = 0; i<event.length; i++ ){
        if(Number(event[i] || Number(event[i]) === 0)){
          result+=event[i]
        }
      }
  }
  result = Number(result) * 1000
  console.log(result+ "m");
}
km("10km")