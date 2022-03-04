

let checktext = function () {
  text = document.querySelector(".input");

  if (text.value === "") {
    console.log("nao tem nada");

    let modal = document.querySelector(".modal");
    modal.style.display = "flex";

    var btn = document.querySelector(".btn-modal");
    btn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }else{
    let section = document.querySelector(".section")
    section.style.height = "100%"
    let btn_decide = document.querySelector(".btn");
    

    let div_buttons = document.querySelector(".form-buttons");
    div_buttons.append(btn_decide);
    div_buttons.style.display = "flex";
   
     let gif_text = document.querySelector(".gif-text");
     gif_text.style.display = "flex";

     gif_text.innerHTML = `<p>Em espera</p>
                           <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"/>`;


   fetch('https://shouldyoudoit.herokuapp.com/?search=ir%20as%20compras')
          .then( response => response.json())
          .then(json =>  receveData(json));
      
          
         function receveData(json){

            let gif_text = document.querySelector(".gif-text");
            gif_text.innerHTML = `<p>${json.msg}</p> 
                               <img src=${json.img} />`;

   }
}
}