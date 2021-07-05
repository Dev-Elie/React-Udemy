import Card from './Components/Card'

import faker from 'faker'
import { useState } from 'react'


function App() {
  const[name,setName]=useState('Ondiek Elijah')
  const [showCard,setShowCard] = useState(true)
  const [cards,setCards] = useState([
      {
        name:'Jose Musimi',
        title:'Managing Director',
        avatar:'https://cdn.fakercloud.com/avatars/albertaugustin_128.jpg'
      },
      {
        name:'James Murio',
        title:'Software Engineer',
        avatar:'https://cdn.fakercloud.com/avatars/albertaugustin_128.jpg'
      },
      {
        name:'Omondi Max',
        title:'Machine Learning Engineer',
        avatar:'https://cdn.fakercloud.com/avatars/albertaugustin_128.jpg'
      }
  
  ])


  const toggleShowCard = ()=>{
    setShowCard(!showCard)
  }

  const cardMarkdown =  showCard &&  (
        cards.map((card)=>
        <Card name={card.name} 
        title={card.title}
        image={card.avatar}
        />
  ))

  return (
    <div className="App">
      <div className='text-center m-2'>
      <button onClick={toggleShowCard} className="btn btn-success">Toggle</button>

      </div>
      {cardMarkdown}
    </div>
  );
}

export default App;
