import React from 'react'
import "./counter.scss"

const counterList = [
  {
    id: 1,
    title: "Countries Covered",
    count: 20,
  },
  {
    id: 2,
    title: "Supply Engineers",
    count: 1000,
  },
  {
    id: 3,
    title: "Awards Won",
    count: 10,
  },
  {
    id: 4,
    title: "Warehouses Managed",
    count: 100,
  }
]


const Counter = () => {
  return (
    <div className='counter padding'>
      <div className="counter__section">
        {counterList.map((counter) => (
          <div className="counter__section__card" key={counter.id}>
            <div className="counter__section__card__count">
              {counter.count}
            </div>
            <div className="counter__section__card__title">
              {counter.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Counter