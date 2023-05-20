import {Link} from "react-router-dom";
import '../contact/contact.css'

const {Fragment} = require("react");

function Contact() {
    return (
        <Fragment>
            <section className="S1_contact">
                 <div className="container">

                <h1>Contact</h1>

                <ul>
                    <li>  <Link to="/">home</Link>  </li>
                    <li>  /  </li>
                    <li>  <Link to="/Contact">Contact</Link>  </li>

                </ul>

            </div>

            </section>





            <section className="S2_contact">

            <form> 
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
                
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="youremail@mail.com" />

                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Your Subject"/>                
                
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="8"></textarea>
                    
                  <button className="btn mt-3" type="button">Send Message</button>

                </form>       
                
                <div className='address'>
                     <p>Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat.</p>
                <p>Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>   
      
                
                <span>ADDRESS</span>
                <h3>69 Queen St, Melbourne Australia</h3>

                <span>PHONE</span>
                    <h3>(+01) 097943039</h3>
                    
                    <p> <a href='/'>example@domain.com</a> </p>
               </div>
            </section>
        </Fragment>
    )
}

export default Contact;