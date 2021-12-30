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
    dragHandler()
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
    cardDiv.draggable = true

    const cardTitle = document.createElement('h2')
    cardTitle.className = 'card-title'
    cardTitle.textContent = title

    cardDiv.appendChild(cardTitle)

    
    parentDiv.lastElementChild.before(cardDiv)
    dragHandler()
}



const dragHandler = () => {
    const cards = document.querySelectorAll('.card')
    const lists = document.querySelectorAll('.lists__item')

    let draggedItem = null

    for(const card of cards){
        card.addEventListener('dragstart' , () => {
            draggedItem = card
            setTimeout(() => {
                card.style.display = 'none'
              }, 0)
        })

        card.addEventListener('dragend' , () => {
            setTimeout(() => {
                draggedItem.style.display = 'block'
                draggedItem = null
              } , 0)
        })

        for(const list of lists){
            
            
            list.addEventListener('dragenter' , (e) => {
                e.preventDefault()
                list.style.backgroundColor = '#ccc'
            })

            list.addEventListener('dragover' , (e) => {
                e.preventDefault()
                list.style.backgroundColor = '#ccc'
            })

            list.addEventListener('dragleave' , (e) => {
                list.style.backgroundColor = '#eee'
            })

            list.addEventListener('drop' , (e) => {
                if(draggedItem !== null){
                    list.lastElementChild.before(draggedItem);
                    list.style.backgroundColor = '#eee'
                  }
            })

            
        }
    }
}