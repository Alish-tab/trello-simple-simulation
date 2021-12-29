const addAnotherList = document.getElementById('add-list__creat')

const inputDiv = document.querySelector('.input-div')
const listInput = document.getElementById('add-list__input')

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




/**************************cancel add list **********************/
cancelAddList.addEventListener('click' , () => {
    inputDiv.classList.remove('visible')
    inputDiv.classList.add('hidden')
    addAnotherList.classList.remove('hidden')
    addAnotherList.classList.add('visible')
    
})
