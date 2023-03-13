//  CHOOSE OUR COLORS
choosecolor = () => {
   setTimeout(() => {
      setTimeout(() => {
         setTimeout(() => {
            document.querySelector(".choose_colors").style.background = "rgba(0,0,0,.7)"
         }, 500)
         document.querySelector(".click_me").style.transition = "2s"
         document.querySelector(".click_me").style.top = "140px"
      }, 1000)
      document.querySelector(".choose_colors").style.transition = "1.5s"
      document.querySelector(".choose_colors").style.marginTop = "0px"
      document.querySelector(".choose_button").style.display = "none"
   }, 500)
}

//  Get the inputs empty array
const inpustArray = [].slice.call(document.querySelectorAll('.choose_colors input'))
// listen for changes
inpustArray.forEach(input => input.addEventListener('change', inputUpdate))
//  Add variable to var(--(id element))
function inputUpdate(e) {
   document.documentElement.style.setProperty(`--${this.id}`, this.value)
}

//  SET THE MENU ELEMENTS      
(set_elemts = () => {
   //  Select all .menu_class
   for (let b = 0; b < document.querySelectorAll(".menu_class").length; b++) {
      //  Create i x article tag behind first_layer
      for (let m = 0; m < 15; m++) {
         (() => {
            let behindFirstLayer = document.getElementById("menu_3d").querySelectorAll(".menu_class")[b]
            let article = document.createElement("article");
            behindFirstLayer.appendChild(article);
         })()
         //  Setting z-inex and add style to acrticle tag
         let firstLayer = document.querySelectorAll(".first_layer")[b]
         let artLayer = document.querySelectorAll(".menu_class")[b].getElementsByTagName('article')
         firstLayer.style.zIndex = artLayer.length
         for (let i = 0; i < artLayer.length; i++) {
            artLayer[i].style.zIndex = -i
            artLayer[i].style.right = i * -1 + "px"
            artLayer[i].style.top = i * -0.5 + "px"
         }
      }
   }
})()

click_me = () => {
   const menuStyle =
      'position: relative;' +
      'display: flex;' +
      'flex-direction: column; ' +
      'justify-content: normal;' +
      'align-items: normal;' +
      'gap: 5px;' +
      'width: 100%;' +
      'height: calc(100vh - 180px);' +
      'top: 0;' +
      'left: -120px;'
   const menu3D = document.querySelector("#menu_3d")
   menu3D.style.cssText = menuStyle

   const icon = document.querySelectorAll(".first_layer ion-icon")
   for (let j = 0; j < icon.length; j++) {
      icon[j].style.cssText = 'color: var(--text_color)'
   }

   const style = document.createElement("style")
   style.innerHTML = '.menu_class:hover{left: 100px;top: 25px;}.choose_colors,.click_me{display:none}.content_holder{display:block}'
   let section = document.querySelector('#menu_3d')
   section.parentNode.insertBefore(style, section)
}
