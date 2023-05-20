import catt_1 from '../../img/catt_1.jpg'
import catt_2 from '../../img/catt_2.jpg'
import catt_3 from '../../img/catt_3.jpg'
import catt_4 from '../../img/catt_4.jpg'
import catt_5 from '../../img/catt_5.jpg'
import catt_6 from '../../img/catt_6.jpg'
import { Link } from 'react-router-dom';

function S5_home() {
    return (
        
        <section className="S5_home">
            <div className="container">
            <div className="intro_S4">
                <h3>Our Latest Drops</h3>
                <div className="line"><span></span></div>
            </div>

<div className="row">                
                

                    <div className="col-lg-4 col-md-6 col-sm-12 allBox">
                        <div className='box'>
                        <div className='img_s5'> <img src={catt_1} alt='sora'/></div>
                            <button> Neoh #4583 </button>
                        </div>

                    </div>
                    

                    <div className="col-lg-4 col-md-6 col-sm-12 allBox">
                        <div className='box'>
                            <div className='img_s5'> <img src={catt_2} alt='sora'/></div>
                            <button> Neoh #4583 </button>
                        </div>

                    </div>
                    

                    <div className="col-lg-4 col-md-6 col-sm-12 allBox">
                        <div className='box'>
                            <div className='img_s5'> <img src={catt_3} alt='sora'/></div>
                            <button> Neoh #4583 </button>
                        </div>

                    </div>
                    

                    <div className="col-lg-4 col-md-6 col-sm-12 allBox">
                        <div className='box'>
                            <div className='img_s5'> <img src={catt_4} alt='sora'/></div>
                            <button> Neoh #4583 </button>
                        </div>

                    </div>
                    

                    <div className="col-lg-4 col-md-6 col-sm-12 allBox">
                        <div className='box'>
                            <div className='img_s5'> <img src={catt_5} alt='sora'/></div>
                            <button> Neoh #4583 </button>
                        </div>

                    </div>
                    

                    <div className="col-lg-4 col-md-6 col-sm-12 allBox">
                        <div className='box'>
                            <div className='img_s5'> <img src={catt_6} alt='sora'/></div>
                            <button> Neoh #4583 </button>
                        </div>
                        
                    </div>

                    <Link to='/COLLECTION' >Click here to See all ITEMS</Link>
                    
                    
                

                
                
            

</div>
</div>
</section>        



    )
}

export default S5_home;