import './App.css';
import {useState, useEffect} from "react";
import { Navbar } from './Components/Navbar'
import { ActorList } from './Components/ActorList'
import { Create } from './Components/ActorForm/Create'
import { Edit } from './Components/ActorForm/Edit';
//import agetAllActors from './services/services'
//import aDelActor from './services/services'
import bd from './services/services'
//import {agetAllActors, aDelActor } from './services/services'

function App() {
  const [actors, setActors] = useState([]);
  //estara a 0 si deseo crear, a 1 si desea editar
  const [action, setAction] = useState(0);
  const [id, setId] = useState();
  const [bool, setBool] = useState(true);
  //const [oneActor, setOneActor] = useState(null);
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

      //RECARGO LA PAGINA
      handleBool(true);
    }else{
      //NO HAGO NADA
    }
  }
  //MODIFICAR LA ACCION Y PONER UN ID A LA ACCION
  const handleAction = (num, id) => {
    setAction(num);
    setId(id);
    setBool(true);
  }

  //MODIFICAR LA VARIABLE QUE RECARGA LA PAGINA AL BORRAR UN USUARIO, AL AGREGAR UN USUARIO Y AL EDITARLO
  const handleBool = (bool) => {
    setBool(bool);
  }

  //INSERTAR ACTOR
  const handleInsert = (actor) => {
    console.log("onINSERT: ", actor);
    bd.aInsertActor(actor);
    setBool(true);
  }

  //EDITAR USER
  const handleEdit = (actor) => {
    console.log('handleEdit myactor',actor);
    bd.aPutActor(actor.actor_id, actor).then((res) => {
      console.log(res.data);
    })
    //cambio la accion a crear
    handleAction(0);
    //RECARGO LA PAGINA
    handleBool(true);
  }

  const handleFilterbyId = (id) => {
    const filtrarId = (id) => {
        const result = actors.filter(actors => actors.actor_id === id);
        console.log('Result:', result);
        return result[0];
    }
    const myActor = filtrarId(id);
    return myActor;
  }

  const handleActions = () => {
    console.log("ENTRO EN HANDLE ACTIONS");
    if (action===0) {
      return (<Create onInsert={handleInsert} onBool={handleBool}/>)
    }else{
      const myActor = handleFilterbyId(id);
      //LE PASO EL ACTOR YA FILTRADO POR EL ID
      return (<Edit onEdit={handleEdit} myActor={myActor}/>)
    }
  }
  //ESTO SIRVE PARA QUE SE CARGE LA PRIMERA VEZ
  useEffect(() => {
    bd.agetAllActors().then((res) => {
      console.log(res.data);
      //meto los actores en el array de actores
      setActors(res.data);
      //pongo la variable a false para que no se recargue
      setBool(false);
    })
    //le paso una variable, si esta a true, recarga, y si no no recarga
  }, [bool])


  //AL ACTORLIST le pasamos la funcion para borrar y la funcion para cambiar de acciones
  //(si le paso a la accion un 1 editare el registro y en el ActorForm sabrá que quiero 
  //editar y tambien le paso el id del registro que quiero eliminar y asi tambien lo sabra el actionForm)
  //AL ACTORFORM le paso la funcion onAction, ya que me hará falta cambiar la opción caa vez que termine de editar el registro
  //Cuando termine de editar el regsitro pondre la action a 0 para que sea crear un nuevo registro
  //tambien le paso la action actual y el id del actor que quiero editar
  //tambien le paso el actor actual, que ya esta filtrado por la funcion filtrarId
  return (
    <>
      <Navbar title="Actors App"/>
      <div className="d-flex">
        <div className="scrolling" >
          <ActorList actors={actors} onDelete={handleDelete} onAction={handleAction} />
        </div>
        <div className="flex-sm-row col-sm-3 p-2 ">
          {handleActions()}
          
        </div>
      </div>
    </>
  );
}

export default App;
