/**
 * Created by deepaksisodiya on 15/12/15.
 */

console.log('ok');


import React from 'react';
import ReactDOM from 'react-dom';

function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  } else if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

var createStore = require('redux').createStore;

var store = createStore(counter);

var Counter = React.createClass({

  render: function() {
    console.log(this.props.increment);
    var { value, increment, decrement } = this.props;
    console.log(increment);
    return (
      <div>
        <p>{ value }</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )
  }

});

function render() {
  ReactDOM.render(
    <Counter value={ store.getState() }
             increment={ () => {
             store.dispatch({type: 'INCREMENT'});
             } }
             decrement={ () => {
             store.dispatch({type: 'DECREMENT'});
             }}
    />,
    document.getElementById('mount-point')
  );
}

render();

store.subscribe(render);
