import { creatCard } from './functions'

export const getCardInput = () => {
    const addAnotherCard = document.querySelectorAll('#add-card__creat')

    


for(const add of addAnotherCard){

    const cardInputDiv = add.parentElement.querySelector('.card-input-div')
    const cardInput = add.parentElement.querySelector('#add-card__input')
    
    const confirmAddCard = add.parentElement.querySelector('#add-card__confirm-btn')
    const cancelAddCard = add.parentElement.querySelector('#add-card__cancel-btn')
    
     if(add.classList.contains('has-eventlistener')){
        continue
    }else{
        
    add.classList.add('has-eventlistener')
    
    /***************************Add Another Card *************************/
    add.addEventListener('click' , () => {
       
        add.classList.add('hidden')
        cardInputDiv.classList.remove('hidden')
        cardInputDiv.classList.add('visible')
        cardInput.focus()
    })

    /******************************Get Title of Card **************************/
    cardInput.addEventListener('input' , event => {
        if(event.target.value.trim() !== ''){
            confirmAddCard.disabled = false
        }else{
            confirmAddCard.disabled = true
        }
    })



/******************************Confirm Add Card Btn ************************/
    confirmAddCard.addEventListener('click' , () => {
        
        
        creatCard(cardInput.value , add.parentElement)
        cardInput.value = ''
        cardInputDiv.classList.remove('visible')
        cardInputDiv.classList.add('hidden')
        add.classList.remove('hidden')
        
            
    })
        
    



/******************************Cancel Add Card Btn ************************/
    cancelAddCard.addEventListener('click' , () => {
        cardInput.value = ''
        cardInputDiv.classList.remove('visible')
        cardInputDiv.classList.add('hidden')
        add.classList.remove('hidden')
        add.classList.add('visible')
    })
 }
}



}
