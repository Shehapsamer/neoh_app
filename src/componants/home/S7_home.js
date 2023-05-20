import S7_img1 from '../../img/S7_img1.png'
import S7_img2 from '../../img/S7_img2.png'
import S7_img3 from '../../img/S7_img3.png'
import S7_img4 from '../../img/S7_img4.png'
import S7_img5 from '../../img/S7_img5.png'
import S7_img6 from '../../img/S7_img6.png'
import S7_img7 from '../../img/S7_img7.png'
import S7_img8 from '../../img/S7_img8.png'
import { Link } from 'react-router-dom'

function S7_home() {
    return (
        <section className="S7_home">
            <div className="container">
                
            <div className="intro">
                <h3>Neoh’s Investors</h3>
               <div className="line mb-5"><span></span></div>
            </div>

            <div className="row">

                    <div className=" imges"><Link to='/Blog' className=''><img src={S7_img1}/> </Link> </div>

                    <div className=" imges"><Link to='/Blog'><img src={S7_img2}/>  </Link>  </div>

                    <div className=" imges"><Link to='/Blog'><img src={S7_img3}/>  </Link>  </div>

                    <div className=" imges"><Link to='/Blog'><img src={S7_img4}/>  </Link>  </div>

                    <div className=" imges"><Link to='/Blog'><img src={S7_img5}/>  </Link>  </div>

                    <div className=" imges"><Link to='/Blog'><img src={S7_img6}/>  </Link>  </div>

                    <div className=" imges"><Link to='/Blog'><img src={S7_img7}/>  </Link>  </div>

                    <div className=" imges"><Link to='/Blog'><img src={S7_img8}/>  </Link>  </div>

                
            </div>
        


        </div>
        </section>
    )
}

export default S7_home;