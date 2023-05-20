import S2_img from '../../img/1.jpg'
import { Link } from 'react-router-dom'
function S2_home() {
    return (
        <section className="S2_home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 lift_side">
                       <div className='S2_img'> <img src={S2_img } alt='sora'/></div>
                    </div> 

                    <div className="col-lg-6 right_side">
                        <h3>The Rise of Neoh</h3>
                        <div className='div1'> <span></span> </div>
                        <p>As the first hero of the Neoh Universe, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.</p>
                        <p>The artwork has been hand-drawned by Robert Green in the traditional anime style and composited by Layla Efiyo.</p>
                    
                        <div className='mt-5'>
                             <Link to='/hf' className='links'> 
                                <span className='icon' ><i className="fa-solid fa-ship"></i></span>
                                <span> OPENSEA</span>
                            </Link>

                            <Link  to='/hff' className='links'> 
                            
                                <span className='icon'><i className="fa-brands fa-discord"></i> </span>
                                <span>DISCORD</span>
                            </Link>
                       </div>
                        
                    </div> 

        </div> 
        </div>
        </section>
     )
}
 
export default S2_home