import { Link } from 'react-router-dom';
import '../Styles/Login.css'

const Notfound = () => {
    return ( 
        <div className="notFound d-flex  align-items-center justify-content-center flex-column ">
        <h2 className='my-4'>Erorr-404</h2>
        <h6 className=''>Not found....</h6>
        <Link to="/" className='text-danger my-3' >home</Link>
        </div> 
    )
}
 
export default Notfound;