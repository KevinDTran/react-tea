import React from 'react';
import model from '../../model';
import CounterList from '../components/counter/list';

export default (props) =>  {
  return (
    <div className="content">
      <h1>Page B</h1>
      <CounterList model={model} counters={model.get().counters} />
    </div>
  );
}
