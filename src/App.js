import Card from './Components/Card'
import Lists from './Components/Lists'

import faker from 'faker'
import { useState } from 'react'


function App() {
  const buttons = (
    <div>
        <a href="www.mut.ac.ke" className="btn btn-primary me-1">Accept</a>
        <a href="www.mut.ac.ke" className="btn btn-danger">Reject</a>
    </div>
    )

  const[name,setName]=useState('Ondiek Elijah')
  const [showCard,setShowCard] = useState(true)

  const updateName = (name)=>{
    setName(name)
  }

  const updateInput =(event)=>{
    setName(event.target.value)
  }

  const toggleShowCard = ()=>{
    setShowCard(!showCard)
  }

  const cardMarkdown =  showCard &&  <Card name={name} 
      title='Dynamic Metrics Agent'
      image='https://cdn.fakercloud.com/avatars/albertaugustin_128.jpg'
      onChangeName={()=>updateName('Ochieng Ondiek')}
      onChangeInput={updateInput}
      >
      {buttons}
      </Card>

  return (
    <div className="App">
      <div className='text-center m-2'>
      <button onClick={()=>updateName('Ondiek Elijah')} className="btn btn-success">Update</button>
      <button onClick={toggleShowCard} className="btn btn-success">Toggle</button>

      </div>

      {cardMarkdown}

      {/*You can either use this or assign it to a variable to make the code cleaner*/} 
      {/*      { showCard &&     <Card name={name} 
            title='Dynamic Metrics Agent'
            image='https://cdn.fakercloud.com/avatars/albertaugustin_128.jpg'
            onChangeName={()=>updateName('Ochieng Ondiek')}
            onChangeInput={updateInput}
            >
            {buttons}
            </Card>}
      */}
      <h3 className='text-center'>List</h3>
      <Lists />
    </div>
  );
}

export default App;
