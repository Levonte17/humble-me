import { auth } from './Firebase';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Cart from './components/Cart';
import User from './components/User';

function App() {

  const [ user, setUser ] = useState(null);

  useEffect(() =>{
    auth.onAuthStateChanged((userObjOrNull) => setUser(userObjOrNull))
  }, []);
  
return(
  <div className='app'>
    <Header user={user} />
    <User user={user} />
    <Cart user={user} />
    <Main user={user} />
    <Footer />
  </div>
)  
}

export default App;