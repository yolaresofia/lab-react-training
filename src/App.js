import React from 'react';
import './App.css';
import IdCard from './components/IdCard'

function App() {
  return (
    <div className="App">
    <div className="Cards">
    <IdCard
  firstName='John'
  lastName='Doe'
  gender='male'
  height='178' //how can i log this dynamically?!?!?!?!!?
  birth="1992-07-14" //how can i log this dynamically?!?!?!?!!?
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  firstName='Delores'
  lastName='Obrien'
  gender='female'
  height='172' //how can i log this dynamically?!?!?!?!!?
  birth="1988-05-11" //how can i log this dynamically?!?!?!?!!?
  picture="https://randomuser.me/api/portraits/women/44.jpg" 
/>
    </div>
    </div>
  );
}

export default App;
