import './App.css';
import {useState, useEffect} from "react";
import { Navbar } from './Components/Navbar'
import { ActorList } from './Components/ActorList'
import agetAllActors from './services/services'

function App() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    agetAllActors().then((res) => {
      console.log(res.data);
      //meto los actores en el array de actores
      setActors(res.data);
    })
  }, [])

  return (
    <>
    <Navbar />
    <ActorList actors={actors}/>
    </>
  );
}

export default App;
