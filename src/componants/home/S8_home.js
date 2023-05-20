import { Link } from "react-router-dom";

function S8_home() {
    return (
        <section className="S8_home">
            <div className="container">
                
            <div className="intro">
                <h3>Neoh’s News</h3>
                <div className="line mb-5"><span></span></div>
            </div>
            
         <div className="row">

                    <div className="col-lg-4 col-md-6 mb-3 cols">
                        <span>June 01, 2022</span>
                        
                        <h4><Link to="/Blog">Neoh’s NFT Goes Public In Nod To Crypto Adoption</Link></h4>

                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>    

                        <Link to="/Blog" className="Link_to">READ MORE</Link>
                        
                    </div>       

                    <div className="col-lg-4 col-md-6 mb-3 cols">
                        <span>May 25, 2022</span>
                        
                        <h4><Link to="/Blog">Bankman-Fried Would Like to Talk With Musk About Twitter</Link></h4>

                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>    

                        <Link to="/Blog" className="Link_to">READ MORE</Link>
                        
                    </div>       

                    <div className="col-lg-4 col-md-6 mb-3 cols">
                        <span>May 13, 2022</span>
                        
                        <h4><Link to="/Blog">Crypto-Focused Silvergate Jumps on Blowout Earnings Report</Link></h4>

                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>    

                        <Link to="/Blog" className="Link_to">READ MORE</Link>
                        
                    </div>                      

            </div>

            



            </div>
        </section>
    )
}

export default S8_home;