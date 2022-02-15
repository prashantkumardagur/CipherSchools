import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import ViewMyRecipes from './components/ViewMyRecipes';
import NewRecipe from './components/NewRecipe';

function App() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = React.useState([
    {
      id: 1,
      createdBy: 'prashant',
      date: 1644858399325,
      title: 'Maggi',
      body: `Add 2 cups of water to maggi and start boiling it. Add maggi masala when it gets warm. 
      Wait for two minutes and you are done. Serve maggi hot in hostel style!`
    },
    {
      id: 2,
      createdBy: 'prashant',
      date: 1644858399325,
      title: 'Mango Shake',
      body: `Peel the mangoes and cut them into small cubes.
      Add the mangoes to a bowl and add sugar, milk, and water.
      Mix well using a mixer. Add ice cubes and mix well. And your mongo shake is ready. Enjoy!`

    }
  ]);
  const [maxId, setMaxId] = React.useState(5);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [userList, setUserList] = React.useState([
    {
      name: 'Prashant Kumar',
      username: 'prashant',
      password: 'prashant'
    }
  ]);
  const logout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
    navigate('/');
  }

  return (
    <div className="App">
      <Nav loggedIn={loggedIn} logout={logout} />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Homepage recipes={recipes} />} />
          <Route path="/myrecipes" element={<ViewMyRecipes recipes={recipes} setRecipes={setRecipes} loggedIn={loggedIn} currentUser={currentUser} />} />
          <Route path="/newrecipe" element={<NewRecipe recipes={recipes} setRecipes={setRecipes} loggedIn={loggedIn} currentUser={currentUser} maxId={maxId} setMaxId={setMaxId} />} />
          <Route path="/register" element={<Register setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} setUserList={setUserList} userList={userList} />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} userList={userList} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
