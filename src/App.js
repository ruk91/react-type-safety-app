import './App.css';
import { Person } from './components/Person'

function App() {
  return (
    <div className="App">
      <Person
        name='Sajith'
        email='sajith@gmail.com'
        age={31}
        isMarried={true}
        friends={['jessica', 'jane', 'joe']}
      />
    </div>
  );
}

export default App;
