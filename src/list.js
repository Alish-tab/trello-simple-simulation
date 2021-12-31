import { creatList } from './functions'
import { getCardInput } from './card'

export const app = () => {
    const listsDiv = document.getElementById('lists')

const addAnotherList = document.getElementById('add-list__creat')

const inputDiv = document.querySelector('.input-div')
const listInput = document.getElementById('add-list__input')

const confirmAddList = document.getElementById('add-list__confirm-btn')
const cancelAddList = document.getElementById('add-list__cancel-btn')



/************************* add another list **********************/
addAnotherList.addEventListener('click' , () => {
    if(addAnotherList.classList.contains('visible')){
        addAnotherList.classList.remove('visible')
    }
    addAnotherList.classList.add('hidden')
    inputDiv.classList.remove('hidden')
    inputDiv.classList.add('visible')
    listInput.focus()
})




/************************get title of list **********************/
listInput.addEventListener('input' , event => {

    if(event.target.value.trim() !== ""){
        confirmAddList.disabled = false
    }else{
        confirmAddList.disabled = true
    }
    
})



/**************************Confirm Add List *********************/
confirmAddList.addEventListener('click' , () => {
    creatList(listInput.value , listsDiv)

    listInput.value = ''
    inputDiv.classList.remove('visible')
    inputDiv.classList.add('hidden')
    addAnotherList.classList.remove('hidden')
    addAnotherList.classList.add('visible')

    getCardInput()
})




/**************************Cancel Add List **********************/
cancelAddList.addEventListener('click' , () => {
    inputDiv.classList.remove('visible')
    inputDiv.classList.add('hidden')
    addAnotherList.classList.remove('hidden')
    addAnotherList.classList.add('visible')
    listInput.value = ''
})



}