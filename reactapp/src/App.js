import { useState } from 'react';
import './App.css';
import UseFetch from './hooks/UseFetch';
import Pages from './pages/Header';
import Cards from './pages/Cards';
import Main from './pages/Main';
import Footer from './pages/Footer';
function App() {
  const [link,setLink] = useState("http://localhost:3000/products")
  const [mode,setMode] = useState(true);
  const {data,isPending,error} =UseFetch(link)
  console.log(data);
  return (
    <div className={mode ? "App":"App night"}>
      <Pages/>
      {data && <Cards store = {data}  mode = {mode} setmode = {setMode} />}
      <Main/>
      <Footer/>
      
    </div>
  );
}

export default App;
