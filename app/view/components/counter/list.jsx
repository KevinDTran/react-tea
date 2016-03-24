import React from 'react';
import Counter from "../counter";

export default (props) => {
  let model = props.model;
  return(
    <div className="counterlist">
      {props.counters.map( (value, address) => 
        <Counter key={address} value={value} address={address} model={model} />
      )}
      
      <button onClick={ _ => model.trigger('counter:add') }>
        Add New Counter
      </button>
    </div>
  )
}
