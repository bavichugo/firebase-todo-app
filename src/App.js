import './App.css';
import Auth from './components/Auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [displayAuth, setDisplayAuth] = useState(true);
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setDisplayAuth(false);
    } else {
      setDisplayAuth(true);
    }
  });

  return (
    <div className="App">
      {displayAuth && <Auth />}
      {!displayAuth && <Todo />} 
    </div>
  );
}

export default App;
