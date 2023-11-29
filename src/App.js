import './App.css';
import image from './groceries.jpg';
import imageTwo from './shopping.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={ image } width="160px" alt="groceries"/>
      </div>
      <div className='container'>
        <h1>Grocery list</h1>
      </div>
      <GroceryList />
      <div className='container'>
        <img src= {imageTwo} width="160px" alt="shopping" />
      </div>
    </div>
  );
}

export default App;