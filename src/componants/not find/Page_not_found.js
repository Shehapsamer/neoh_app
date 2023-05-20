import '../not find/Page_not_found.css'
import { Link } from 'react-router-dom';
function Page_not_found() {
    
    return (
        <div className="container_2">
                <h1> oops! </h1>

            <h3>404 error - Page not found</h3>
            
            <p>the page you are looking for might have been removed had its name changed or is temporarily unavailable</p>

            <Link to="/">go to home page</Link>
        </div>
    )
}

export default Page_not_found;