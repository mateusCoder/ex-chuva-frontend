CreateTopic = (displayBlock, displayNone) => {
   let changeToNone = document.querySelector(`.${displayBlock}`)
   let chageToBlock = document.querySelector(`.${displayNone}`)

   changeToNone.style.display = 'none'
   chageToBlock.style.display = 'block'
}

ChangeDisplay = (display) => {
   let changeDisplay = document.querySelector(`.${display}`)

   if (changeDisplay.style.display == 'none') {
      changeDisplay.style.display = 'block'
   } else {
      changeDisplay.style.display = 'none'
   }
}

Expand = () => {
   const seeMore = document.querySelector('.see-more')
   const textAbstract = document.querySelector('.text-abstract')

   textAbstract.style.height = 'auto'
   seeMore.style.display = 'none'
}






