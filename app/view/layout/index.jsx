import React from 'react';
import model from '../../model';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  componentDidMount() {
		model.on('update', _ => this.forceUpdate());
	}
  
  render() {
    return (
      <div>
        <h1>A List of Counters</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page-b">Page B</Link></li>
        </ul>
        { React.Children.map(this.props.children, (child) => React.cloneElement(child)) }
      </div>
    )
  }
}
