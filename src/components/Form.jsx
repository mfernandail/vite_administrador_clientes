import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Alert from './Alert';

function FormComponent() {
  const navegate = useNavigate();

  const newClientSchema = Yup.object().shape({
    name: Yup.string()
             .min(2, 'Name is too short')
             .max(20, 'Name is too large')
             .required('Name is required'),
    company: Yup.string()
            .required('Company is required'),
    email: Yup.string()
          .email()
          .required('Email is required'),
    phone: Yup.number()
          .integer('Invalid Number')
          .positive('Invalid Number')
          .typeError('PHONE MUST BE A NUMBER'),
    notes: ''
  })

  const handleSubmit = async (values) => {
    try {
      const url = `http://localhost:4000/clients`;
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json()
      // console.log(result)  
      navegate('/clients');
    } catch (error) {console.log(error)}
  }
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-grey-600 font-bold text-xl uppercase">Add new Client</h1>

      <Formik
        initialValues={{
          name: '',
          company: '',
          email: '',
          phone: '',
          notes: ''
        }}
        onSubmit={async (values, {resetForm}) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientSchema}
      >
        {({errors, touched}) => {
          return (
        
            <Form>
              <div className="mb-4">
                <label 
                  htmlFor="name"
                  className="text-gray-800"
                >Name: </label>
                <Field 
                  id="name"
                  type="text"
                  name="name"
                  className="mt-2 block w-full p-3 bg-green-50"
                  placeholder="Client name"
                />
                {
                  errors.name && touched.name 
                    ? <Alert>{errors.name}</Alert>
                    : null
                }                
              </div>
              <div className="mb-4">
                <label 
                  htmlFor="company"
                  className="text-gray-800"
                >Company: </label>
                <Field 
                  id="company"
                  type="text"
                  name="company"
                  className="mt-2 block w-full p-3 bg-green-50"
                  placeholder="Client company"
                />
                {
                  errors.company && touched.company 
                    ? <Alert>{errors.company}</Alert>
                    : null
                }  
              </div>
              <div className="mb-4">
                <label 
                  htmlFor="email"
                  className="text-gray-800"
                >Email: </label>
                <Field 
                  id="email"
                  type="email"
                  name="email"
                  className="mt-2 block w-full p-3 bg-green-50"
                  placeholder="Client email"
                />
                {
                  errors.email && touched.email 
                    ? <Alert>{errors.email}</Alert>
                    : null
                } 
              </div>
              <div className="mb-4">
                <label 
                  htmlFor="phone"
                  className="text-gray-800"
                >Phone: </label>
                <Field 
                  id="phone"
                  type="tel"
                  name="phone"
                  className="mt-2 block w-full p-3 bg-green-50"
                  placeholder="Client phone"
                />
                {
                  errors.phone && touched.phone 
                    ? <Alert>{errors.phone}</Alert>
                    : null
                }  
              </div>
              <div className="mb-4">
                <label 
                  htmlFor="notes"
                  className="text-gray-800"
                >Notes: </label>
                <Field 
                  as="textarea"
                  id="notes"
                  type="text"
                  name="notes"
                  className="mt-2 block w-full p-3 bg-green-50"
                  placeholder="Client notes"
                />
              </div>
              <input type="submit" className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold" />
            </Form>
          )}}

      </Formik>

    </div>
  )
}

export default FormComponent;
