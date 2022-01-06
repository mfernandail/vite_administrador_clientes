import { Formik, Form, Field } from 'formik';

function FormComponent() {
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
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {() => (
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
        )}

      </Formik>

    </div>
  )
}

export default FormComponent;
