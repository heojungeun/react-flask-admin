import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login'
import Main from './components/Main'
import Header from './components/Header'
import useToken from './components/useToken'
import './App.css'

function App(){
  const {token, removeToken, setToken} = useToken();

  return (
    <BrowserRouter>
      <div className="App">
        <Header token={token} removeToken={removeToken} />
        {token && token !== "" && token !== undefined ?
          <Main token={token} /> : <Login setToken={setToken}/>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;