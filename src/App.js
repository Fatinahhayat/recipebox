import { useState, useEffect } from 'react';
import './App.css';
import AddFavourites from './components/AddFavourites';

function App() {

  const [data, setData] = useState ([]);
useEffect(() => {
  const getData = async () => {
    const res = await fetch('https://api.mob.co.uk/task/recipes.json');
    const recipes = await res.json();
    setData(recipes.recipes);


  };
  getData();
}, []);

console.log(data);

return (
  <div>
  <div className="App">
    <header className="App-header">
      <h1>RECIPEBOX</h1>
      <div className='Bookmark'><img src={AddFavourites}></img></div>
    </header>
  </div>

<div className="container">
      {
    data.map((recipe) => (
      <div className="card" key={recipe.id}>
        <img className="image" src={recipe.image[0].url}>
        </img>
        <h2>{recipe.title}</h2>
        <div className='Bookmark'><img src={AddFavourites}></img></div>
      </div>
    ) )
  }
  
 
</div>
</div>

);
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
