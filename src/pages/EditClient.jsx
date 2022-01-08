import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormComponent from '../components/Form';

function EditClient() {
  const {id} = useParams();
  const [client, setClient] = useState({});

  useEffect(() => {
    const getClient = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`
        const response = await fetch(url);

        const result = await response.json();
        setClient(result);


      } catch (error) {
        console.log(error)
      }
    }
    getClient()
  }, []);

  // console.log(client)
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Llena los campos para editar un cliente</p>

      {
        Object.keys(client).length > 0 
          ?
            <FormComponent 
              client={client}
            />
          : 
            <p>Cliente no valido</p>
      }

    </>
  )
}

export default EditClient;
