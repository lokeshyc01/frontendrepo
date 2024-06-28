import { useState } from 'react';
import './App.css';
import data from './data'
import Tours from './components/Tours';
function App() {
  const[toursData,setData] = useState(data);

  function removeTour(id){
    const newTours =  toursData.filter(data => data.id !== id);
    setData(newTours);
  }

  if(toursData.length == 0){
    return <div>
      <h2>No Tours Left</h2>
      <button onClick={() => setData(data)}>Refresh</button>
    </div>
  }
  return (
    <div>
      Jay Ganesh...
      <Tours tours={toursData} removeTour = {removeTour}></Tours>
    </div>
  );
}

export default App;
