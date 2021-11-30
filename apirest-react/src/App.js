import './App.css';
import {useState, useEffect} from "react";
import { Navbar } from './Components/Navbar'
import { ActorList } from './Components/ActorList'
import { ActorForm } from './Components/ActorForm'
import agetAllActors from './services/services'
//import {agetAllActors, aDelActor } from './services/services'

function App() {
  const [actors, setActors] = useState([]);
  //estara a 0 si deseo crear, a 1 si desea editar
  const [accion, setAccion] = useState(0);

  //Elimina los actores(esta funcion se pasa a el compponente actorList y será llamado al 
  //hacer click en el boton de eliminar)
  const handleDelete = (id) => {
    console.log(`Has pulsado Borrar en ${id}`);
    const confirm = window.confirm("¿Está seguro que desea eliminar el registro con id: "+id+"?");
    if(confirm){
      //ELIMIMINO ACTOR
    }else{
      //NO HAGO NADA
    }

  }

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
          <ActorList actors={actors} onDelete={handleDelete}/>
        </div>
        <div className="flex-sm-row col-sm-3 p-2 ">
          <ActorForm  />
        </div>
      </div>
    </>
  );
}

export default App;
