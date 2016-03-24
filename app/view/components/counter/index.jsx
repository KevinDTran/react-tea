import React from 'react';

export default (props) => {
  let {model,value,address} = props;
  return(
    <div className="counter"> 
      <div>Counter: {value}</div>
      <button onClick={ _ => model.trigger('counter:increment', value, address) }>
        ++
      </button>
      
      <button onClick={ _ => model.trigger('counter:decrement', value, address) }>
        --
      </button>
      
      <button onClick={ _ => model.trigger('counter:delete', address) }>
        x
      </button>
    </div>
  )
}
