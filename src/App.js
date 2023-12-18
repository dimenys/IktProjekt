import './App.css';
import Footer from './page/Footer';
import Header from './page/Header';
import Main from './page/Main';

function App()
{
  return (
    <div className='container' style={{ boxShadow: "5px 5px 5px 5px #888888" }}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App