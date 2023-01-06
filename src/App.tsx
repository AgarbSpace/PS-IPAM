import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyled from './GlobalStyled';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
