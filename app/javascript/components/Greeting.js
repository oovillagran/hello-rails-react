import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../actions/greetingActions';

function Greeting() {
  const dispatch = useDispatch();
  const randomGreeting = useSelector(state => state.greeting.randomGreeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <p>{randomGreeting}</p>
      <button onClick={() => dispatch(fetchRandomGreeting())}>
        Try a new greeting!
      </button>
    </div>
  );
};

export default Greeting;