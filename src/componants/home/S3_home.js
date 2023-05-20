import s3img from '../../img/2.jpg'
import { Link } from 'react-router-dom';

function S3_home() {
    return (
        <section className="S3_home">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 ">
                        <h3>High Quality NFT Collection</h3>
                        <div className='div1'> <span></span> </div>
                        <p>Simply holding a Neoh will give you access to seasonal airdrops, merchandise, physical and digital artworks, collectibles and more.</p>
                        <p>We understand the importance of the cross-over between these worlds and we truly believe to bridge these two together. Our goals will always be for the community - creating, building and innovating together with the commmunity.</p>
                        <Link to="/About">More About US</Link>
                    </div>

                    <div className="col-lg-6 ">
                        <div className='s3img'>
                            <img src={s3img} alt='sora'/>
                        </div>
                    </div>

                    

                </div>
            </div>
        </section>

    )
    
}

export default S3_home;