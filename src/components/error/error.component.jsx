import { Link } from 'react-router-dom'
import "./error.styles.css";

const Error = () => {
  return (
    <div className='error-container'>
      <p className='sorry'>Sorry, we are having trouble loading the page</p>
      <Link to='/'><p>Head back to the home page</p></Link>
    </div>
  )
}

export default Error;