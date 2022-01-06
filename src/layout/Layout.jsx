import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">CRM Clientes</h2>

        <nav className="mt-10">
          <Link 
            to="/clients"
            className="text-white text-2xl block mt-2 hover:text-blue-300"
          >Clients</Link>
          <Link 
            to="/clients/new"
            className="text-white text-2xl block mt-2 hover:text-blue-300"
          >New Cliente</Link>
        </nav>
      </div>
      <div className="md:w-3/4">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
