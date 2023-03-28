import React, {useState} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { buyCake } from '../actions'


function CakeContainer() {
  const [number,setNumber] = useState(1)
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
    <div>
      <h2>Number of Cakes : {numOfCakes}</h2>
      <input value={number} onChange={e=>setNumber(e.target.value)}></input>
      <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cake</button>
    </div>
  )
}

export default CakeContainer
