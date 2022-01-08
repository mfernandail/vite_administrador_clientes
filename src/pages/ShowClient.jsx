import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

function ShowClient() {
  const {id} = useParams();
  const [client, setClient] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    const getClient = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`
        const response = await fetch(url);
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error)
      }
      setCargando(false);
    }
    getClient()
  }, []);

  return (    
    cargando ? <Spinner /> :
      Object.keys(client).length === 0 
        ? "No hay registros"
        :
        <div>
          <h1 className="font-black text-4xl text-blue-900">
            Ver Cliente: {client.name}
          </h1>
          <p className="mt-3">Información del Cliente</p>

          {client.name && (
            <p className="text-4xl text-gray-600 mt-10">
              <span className="text-gray-800 uppercase font-bold">Cliente: </span>
              {client.name}
            </p>
          )}
          {client.email && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Email: </span>
              {client.email}
            </p>
          )}
          {client.phone && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Teléfono: </span>
              {client.phone}
            </p>
          )}
          {client.email && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Empresa: </span>
              {client.email}
            </p>
          )}
          {client.notes && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-800 uppercase font-bold">Notas: </span>
              {client.notes}
            </p>
          )}
        </div>
      
  );
}

export default ShowClient;
