import './App.css';
import ClientTable from "./components/client_table/ClientTable";
import {useEffect, useState} from "react";
import {getAll, getAllMen, getAllOntarians} from "./services/ClientService";
import Nav from "./components/nav/Nav";



function App() {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        getAll().then(value => {
            setClients(value);
        })
    }, []);

    const getAllClients = e => {
        e.preventDefault();

        getAll().then(value => {
            setClients(value);
        })
    }

    const getAllMaleClients = e => {
        e.preventDefault();

        getAllMen().then(value => {
            setClients(value);
        })
    }

    const getAllOntarianClients = e => {
        e.preventDefault();

        getAllOntarians().then(value => {
            setClients(value);
        })
    }

  return (
    <div className="App">
        <Nav
            fetch1={getAllClients}
            fetch2={getAllMaleClients}
            fetch3={getAllOntarianClients}
        />
        <ClientTable clients={clients}/>
    </div>
  );
}

export default App;
