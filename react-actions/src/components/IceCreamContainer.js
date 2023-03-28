import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { buyIcecream } from '../actions'


function IceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
    <div>
      <h2>Number of Ice Creams : {numOfIceCreams}</h2>
      <button onClick={()=>dispatch(buyIcecream())}>Buy Ice Cream</button>
    </div>
  )
}

export default IceCreamContainer
