import axios from 'axios';

export const fetchRandomGreeting = () => async dispatch => {
  try {
    const response = await axios.get('/api/greetings');
    const randomGreeting = response.data.greeting;
    dispatch({ type: 'SET_RANDOM_GREETING', payload: randomGreeting });
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};
