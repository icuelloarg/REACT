
import '././sass/app.scss';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import Navbar from './components/navbar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
