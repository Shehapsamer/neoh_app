import {Link} from "react-router-dom";


function S1_apout() {
    return (
        <section className=" s1_apout ">
            <div className="container">

                <h1>ABOUT</h1>

                <ul>
                    <li>  <Link to="/">home</Link>  </li>
                    <li>  /  </li>
                    <li>  <Link to="/About">About</Link>  </li>

                </ul>

            </div>
        </section>
    )
}
export default S1_apout;