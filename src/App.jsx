import './App.css'
import cardsData from './cardsData'
import { useState } from 'react'

function App() {
 
  const [cardsList, setCardsList] = useState(cardsData.sort( () => Math.random() - 0.5));
//  const cardsList = cardsData.sort( () => Math.random() - 0.5)
  const [prevIndexCard, setPrevIndexCard] = useState(-1);
  //es buena practica poner menos uno para indicar que esta vacio lo que significa en este caso que no hay tarjeta seleccionada

  const selected = index =>{
    cardsList[index].status = "selected"
    setCardsList([...cardsList])
    if(prevIndexCard === -1){
    setPrevIndexCard(index)
    }else{
      validateCards(index)
    }
  }

  const validateCards = (newIndexCard) =>{
    setTimeout( () => {
      const prev = cardsList[prevIndexCard]
      const current = cardsList[newIndexCard]
      prev.status = "down"
      current.status = "down"
      if(prev.icon === current.icon){    
        prev.status = "up"
        current.status = "up"
        setPrevIndexCard(-1)
      }else{ 
        setCardsList([...cardsList])
        setPrevIndexCard(-1)
      }
    },1000)

    
  }

  return (
    <div className='App'>      
      <h4>Juego de Memoria</h4>
      <div className="cardsContainer">
      {
        cardsList.map( (card, i) => (
          <div className= {`card ${card.status}`} key={ card.id } onClick={()=>selected(i)}>
          {
            card.status !== "down" && (
              
              <i className = { card.icon }></i>
              
              )            
          }
          </div>
        ))
      }
      </div>
      {/* <i className="fa-solid fa-house"></i>
      <i className="fa-brands fa-github"></i>
      <i className="fa-brands fa-react"></i>
      <i className="fa-brands fa-html5"></i>
      <i className="fa-brands fa-css3-alt"></i>
      <i className="fa-brands fa-square-js"></i>
      <i className="fa-solid fa-computer"></i>
      <i className="fa-solid fa-computer-mouse"></i> */}

    </div>
  );
}

export default App
