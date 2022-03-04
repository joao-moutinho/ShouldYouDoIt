
function loadGifs(){
   fetch('https://shouldyoudoit.herokuapp.com/all')
   .then( response => response.json())
   .then(json => showGifs(json));

 

}

function showGifs(json){

   json.forEach(element => {
       if(element.msg == "do it"){
          let do_it = document.querySelector(".do-it-list");
          do_it.innerHTML += `<img src="${element.img}" width="160px" height="160px" />`
       }else{
        let dont_do_it = document.querySelector(".dont-do-it-list");
        dont_do_it.innerHTML += `<img src="${element.img}" width="160px" height="160px" />`
       }
   })
}