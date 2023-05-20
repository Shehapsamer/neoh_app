import '../Footer/footer.css'
import logo from '../../img/logo.png'
import {Fragment} from 'react';
import { Link } from 'react-router-dom';

function Foot() {
    return (
        <Fragment>
            
                    <div className="Footer">
            <Link to='/' > <img src={logo} alt='logo' /> </Link>

            <h3>Join Now For Early Access</h3>

            <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare</p>
            
            <input type='email' placeholder='Email' />
            
            <button>SUBSCRIBE</button>

            <ul>
                <li>  <i className="fa-brands fa-twitter">  </i></li>
                <li>  <i className="fa-brands fa-facebook"></i>  </li>
                <li>  <i className="fa-brands fa-instagram"></i>  </li>
                <li>  <i className="fa-brands fa-pinterest-p"></i>  </li>
                <li>  <i className="fa-brands fa-behance"></i>  </li>
            </ul>
            </div>
            
 <div className='footer_end'>

                <p>Copyright 2022- Designed & Developed by Frenify</p>

                <ul>
                    <li> <Link to='/Blog'> RoadMap </Link>  </li>
                    <li> <Link to='/Contact'> Cookies </Link>  </li>
                    <li> <Link to='/aaa'> Terms & Conditions </Link>  </li>
                </ul>

            </div>

            </Fragment>

    )
    
}
export default Foot;