export const creatList = (title , parentDiv) => {
    const list = document.createElement('div')
    list.className = 'lists__item'

    const listTitle = document.createElement('h2')
    listTitle.className = 'list-title'
    listTitle.textContent = title

    list.appendChild(listTitle)

    creatAddCardDiv(list)

    const addCardBtn = document.createElement('button')
    addCardBtn.id ='add-card__creat'
    addCardBtn.textContent = '+ Add a card'

    list.appendChild(addCardBtn)
    
    parentDiv.appendChild(list)

}



const creatAddCardDiv = (div) => {

    const inputDiv = document.createElement('div')
    inputDiv.className = 'card-input-div hidden'

    inputDiv.innerHTML = `
    <input type="text" placeholder="Enter card title..." id="add-card__input">
            
            <div class="card-input-btn">
                <button id="add-card__confirm-btn" class="add-btn" disabled= "true">Add card</button>
                <button id="add-card__cancel-btn" class="cancel-btn">X</button>

            </div>
    `

    div.append(inputDiv)
}




export const creatCard = (title , parentDiv) => {
    const cardDiv = document.createElement('div')
    cardDiv.className = 'card'

    const cardTitle = document.createElement('h2')
    cardTitle.className = 'card-title'
    cardTitle.textContent = title

    cardDiv.appendChild(cardTitle)

    parentDiv.lastElementChild.before(cardDiv)
}