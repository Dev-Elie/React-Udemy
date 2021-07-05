import {useState} from 'react'

const Lists = (props) => {
const users = [
	{
		name:'Jose Musimi'
	},
	{
		name:'James Murio'
	},
	{
		name:'Omondi Max'
	}
	
	]

  return (
    <div className='text-center'>
    	{users.map((user)=> <p>{user.name}</p>)}
    </div>
  )
}

export default Lists;