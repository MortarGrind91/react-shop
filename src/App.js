import React from 'react';

import axios from 'axios';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    //remove in redux and added redux-thunk
    //watching filters, sorts and paste in url
    axios.get("http://localhost:3001/pizzas")
      .then(({ data }) => {
        dispatch(setPizzas(data));

      });
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  )
}

export default App;
