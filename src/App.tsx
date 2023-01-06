import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyled from './GlobalStyled';
import HomePage from './pages/HomePage';
import Header from './components/Header'

function App() {

  return (
    <>
      <GlobalStyled />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
