import { useState } from 'react'

export const ItemCount = () => {
    const [cantItems, setCantItems] = useState(0)

    const handlleAdd = () => {
        setCantItems(cantItems + 1)
    }
    const handlleSubs = () => {
        if (cantItems > 0) {
            setCantItems(cantItems - 1)
        }
        // if (cantItems > 0) setCantItems(cantItems - 1)
        // cantItems > 0 ? setCantItems(cantItems - 1) : alert('No se puede restar')
        // cantItems > 0 && setCantItems(cantItems - 1)
    }

  return (
    <>
        <div>ItemCount</div>
        <button onClick={ handlleAdd }> + </button>
        <span> { cantItems } </span>
        <button onClick={ handlleSubs }> - </button>
    </>
  )
}
