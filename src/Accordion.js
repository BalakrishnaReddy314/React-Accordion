import React, {useState} from 'react'

function Accordion(props) {
    const [isActive, setIsActive] = useState(false)
  const toggle = () => {
    if(!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
    return (
        <div className='item'>
                <div className='title' onClick={toggle}>
                  <h4>{props.item.Question}</h4>
                  <span>{isActive ? '-': '+'}</span>
                </div>
                {isActive && <div className='content'>{props.item.Answer}</div>}
              </div>
    )
}

export default Accordion
