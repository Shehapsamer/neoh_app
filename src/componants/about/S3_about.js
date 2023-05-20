import Artist_1 from '../../img/Artist_1.jpg'
import Artist_2 from '../../img/Artist_2.jpg'
import Artist_3 from '../../img/Artist_3.jpg'
import Artist_4 from '../../img/Artist_4.jpg'
import Artist_5 from '../../img/Artist_5.jpg'
import Artist_6 from '../../img/Artist_6.jpg'


function S3_about() {
    return (
        <section className="S3_about">
            <div className="container">

                <div className="intro">
                    <h3>Our Team Members</h3>
                    <div className="line"><span></span></div>
                    <p>The idea was born in London and rapidly became a borderless vision - A team of Neoh with a background in computer graphics, crypto, technology, and art.</p>
                </div>
                <div className="row">

                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <img src={Artist_1} alt='sora' />
                            <h5>Tom Mccarthy</h5>
                            <p>2D Artist</p>
                              <ul>
                                <li>  <i className="fa-brands fa-twitter">  </i></li>
                                <li>  <i className="fa-brands fa-facebook"></i>  </li>
                                <li>  <i className="fa-brands fa-instagram"></i>  </li>
                                <li>  <i className="fa-brands fa-pinterest-p"></i>  </li>
                                <li>  <i className="fa-brands fa-behance"></i>  </li>
                            </ul>
                        </div>

                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <img src={Artist_2} alt='sora' />
                            <h5>Owen Bradley</h5>
                            <p>2D Artist</p>
                              <ul>
                                <li>  <i className="fa-brands fa-twitter">  </i></li>
                                <li>  <i className="fa-brands fa-facebook"></i>  </li>
                                <li>  <i className="fa-brands fa-instagram"></i>  </li>
                                <li>  <i className="fa-brands fa-pinterest-p"></i>  </li>
                                <li>  <i className="fa-brands fa-behance"></i>  </li>
                            </ul>     
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <img src={Artist_3} alt='sora' />
                            <h5>Daniel Bradley</h5>
                            <p>2D Artist</p>
                              <ul>
                                <li>  <i className="fa-brands fa-twitter">  </i></li>
                                <li>  <i className="fa-brands fa-facebook"></i>  </li>
                                <li>  <i className="fa-brands fa-instagram"></i>  </li>
                                <li>  <i className="fa-brands fa-pinterest-p"></i>  </li>
                                <li>  <i className="fa-brands fa-behance"></i>  </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <img src={Artist_4} alt='sora' />
                            <h5>Skylar Jarvis</h5>
                            <p>2D Artist</p>
                              <ul>
                                <li>  <i className="fa-brands fa-twitter">  </i></li>
                                <li>  <i className="fa-brands fa-facebook"></i>  </li>
                                <li>  <i className="fa-brands fa-instagram"></i>  </li>
                                <li>  <i className="fa-brands fa-pinterest-p"></i>  </li>
                                <li>  <i className="fa-brands fa-behance"></i>  </li>
                            </ul>                           
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <img src={Artist_5} alt='sora' />
                            <h5>Avery Briggs</h5>
                            <p>2D Artist</p>
                              <ul>
                                <li>  <i className="fa-brands fa-twitter">  </i></li>
                                <li>  <i className="fa-brands fa-facebook"></i>  </li>
                                <li>  <i className="fa-brands fa-instagram"></i>  </li>
                                <li>  <i className="fa-brands fa-pinterest-p"></i>  </li>
                                <li>  <i className="fa-brands fa-behance"></i>  </li>
                            </ul>      
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="card">
                            <img src={Artist_6} alt='sora' />
                            <h5>Bernard Green</h5>
                            <p>2D Artist</p>
                              <ul>
                                <li>  <i className="fa-brands fa-twitter">  </i></li>
                                <li>  <i className="fa-brands fa-facebook"></i>  </li>
                                <li>  <i className="fa-brands fa-instagram"></i>  </li>
                                <li>  <i className="fa-brands fa-pinterest-p"></i>  </li>
                                <li>  <i className="fa-brands fa-behance"></i>  </li>
                            </ul>    
                        </div>   
                    </div>










                </div>
            </div>
        </section>
    )
}

export default S3_about;