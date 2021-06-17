CreateTopic = (displayBlock, displayNone) =>{
        let changeToNone = document.querySelector(`.${displayBlock}`)
        let chageToBlock =  document.querySelector(`.${displayNone}`)

        changeToNone.style.display = 'none'
        chageToBlock.style.display = 'block'
}
