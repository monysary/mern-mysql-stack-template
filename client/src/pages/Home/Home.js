import axios from 'axios';
import { useState } from 'react';

function Home() {
  const [test, setTest] = useState('')

  const fetchTest = async (req, res) => {
    try {
      const response = await axios.get('/test')
      setTest(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={fetchTest}>Fetch Test</button>
      <h2>{test}</h2>
    </div>
  );
}

export default Home;
