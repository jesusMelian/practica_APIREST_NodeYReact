import './App.css';
import {useState, useEffect} from "react";
import { Navbar } from './Components/Navbar'
import { ActorList } from './Components/ActorList'
import { ActorForm } from './Components/ActorForm'
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
      <div className="d-flex">
        <div className="scrolling" >
          <ActorList actors={actors}/>
        </div>
        <div className="flex-sm-row col-sm-3 p-2">
          <ActorForm />
        </div>
      </div>
    </>
  );
}

export default App;
