import './App.css';
import {useState, useEffect} from "react";
import { Navbar } from './Components/Navbar'
import { ActorList } from './Components/ActorList'
import { ActorForm } from './Components/ActorForm'
//import agetAllActors from './services/services'
//import aDelActor from './services/services'
import bd from './services/services'
//import {agetAllActors, aDelActor } from './services/services'

function App() {
  const [actors, setActors] = useState([]);
  //estara a 0 si deseo crear, a 1 si desea editar
  const [action, setAction] = useState(0);
  const [id, setId] = useState();
  //Elimina los actores(esta funcion se pasa a el compponente actorList y será llamado al 
  //hacer click en el boton de eliminar)
  const handleDelete = (id) => {
    console.log(`Has pulsado Borrar en ${id}`);
    const confirm = window.confirm("¿Está seguro que desea eliminar el registro con id: "+id+"?");
    if(confirm){
      //ELIMIMINO ACTOR
      bd.aDelActor(id).then((res) => {
        console.log(res.data);
      })

      //RECARGO LOS USUARIOS
      bd.agetAllActors().then((res) => {
        console.log(res.data);
        //meto los actores en el array de actores
        setActors(res.data);
      })

      //RECARGO LA WEB
      //this.props.history.push(this.props.match.url);
      //window.location.reload(true);
      //location.reload();
    }else{
      //NO HAGO NADA
    }
  }
  //MODIFICAR LA ACCION Y PONER UN ID A LA ACCION
  const handleAction = (num, id) => {
    setAction(num);
    setId(id);
  }


  //ESTO SIRVE PARA QUE SE CARGE LA PRIMERA VEZ
  useEffect(() => {
    bd.agetAllActors().then((res) => {
      console.log(res.data);
      //meto los actores en el array de actores
      setActors(res.data);
    })
  }, [])


  //AL ACTORLIST le pasamos la funcion para borrar y la funcion para cambiar de acciones
  //(si le paso a la accion un 1 editare el registro y en el ActorForm sabrá que quiero 
  //editar y tambien le paso el id del registro que quiero eliminar y asi tambien lo sabra el actionForm)
  //AL ACTORFORM le paso la funcion onAction, ya que me hará falta cambiar la opción caa vez que termine de editar el registro
  //Cuando termine de editar el regsitro pondre la action a 0 para que sea crear un nuevo registro
  //tambien le paso la action actual y el id del actor que quiero editar
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="scrolling" >
          <ActorList actors={actors} onDelete={handleDelete} onAction={handleAction}/>
        </div>
        <div className="flex-sm-row col-sm-3 p-2 ">
          <ActorForm  onAction={handleAction} action={action} id={id}/>
        </div>
      </div>
    </>
  );
}

export default App;
