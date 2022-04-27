import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      { children }
      <div className='h-96 bg-slate-500'></div>
      <div className='h-96 bg-slate-500'></div>
    </>
  )
}

export default Layout;
