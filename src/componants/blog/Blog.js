import '../blog/blog.css'
import blog_1 from '../../img/blog_1.jpg'
import blog_2 from '../../img/blog_2.jpg'
import blog_3 from '../../img/blog_3.jpg'
import blog_4 from '../../img/blog_4.jpg'
import blog_5 from '../../img/blog_5.jpg'
import blog_6 from '../../img/blog_6.jpg'
import blog_7 from '../../img/blog_7.jpg'
import blog_8 from '../../img/blog_8.jpg'
import blog_9 from '../../img/blog_9.jpg'
import {Link} from "react-router-dom";

const {Fragment} = require("react");


function Blog() {
    return (
        <Fragment>
            <section className=" s1_blog ">
            <div className="container">

                <h1>BLOG</h1>

                <ul>
                    <li>  <Link to="/">home</Link>  </li>
                    <li>  /  </li>
                    <li>  <Link to="/Blog">blog</Link>  </li>

                </ul>

            </div>
        </section>

            
            <section className='S2_blog'>
            <div className='container'>
            <div className='row'>

                <div className='col-lg-4 col-md-6 card'>
                    <span>June 01, 2022</span>
                    <img src={blog_1} alt='sora' />        
                    <h4>Neoh’s NFT Goes Public In Nod To Crypto Adoption</h4>
                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>        
                    <a href='/Blog'>read more</a>        
                </div>

                <div className='col-lg-4 col-md-6 card'>
                    <span>May 25, 2022</span>
                    <img src={blog_2} alt='sora' />        
                    <h4>Bankman-Fried Would Like to Talk With Musk About Twitter</h4>
                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>        
                    <a href='/Blog'>read more</a>        
                </div>                        
                        
                <div className='col-lg-4 col-md-6 card'>
                    <span>May 13, 2022</span>
                    <img src={blog_3} alt='sora' />        
                    <h4>Crypto-Focused Silvergate Jumps on Blowout Earnings Report</h4>
                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p> 
                    <a href='/Blog'>read more</a>        
                </div>

                <div className='col-lg-4 col-md-6 card'>
                    <span>May 08, 2022</span>
                    <img src={blog_4} alt='sora' />        
                    <h4> Neoh’s NFT Goes Public In Nod To Crypto Adoption </h4>
                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>             
                    <a href='/Blog'>read more</a>        
                </div>

                <div className='col-lg-4 col-md-6 card'>
                    <span>April 19, 2022</span>
                    <img src={blog_5} alt='sora' />        
                    <h4>Bankman-Fried Would Like to Talk With Musk About Twitter</h4>
                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>              
                    <a href='/Blog'>read more</a>        
                </div>                        

                <div className='col-lg-4 col-md-6 card'>
                    <span>April 12, 2022</span>
                    <img src={blog_6} alt='sora' />        
                    <h4>Crypto-Focused Silvergate Jumps on Blowout Earnings Report</h4>
                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>     
                    <a href='/Blog'>read more</a>        
                </div>

                <div className='col-lg-4 col-md-6 card'>
                    <span>April 07, 2022</span>
                    <img src={blog_7} alt='sora' />        
                    <h4>Neoh’s NFT Goes Public In Nod To Crypto Adoption</h4>
                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p>  
                    <a href='/Blog'>read more</a>        
                </div>

                <div className='col-lg-4 col-md-6 card'>
                    <span>April 03, 2022</span>
                    <img src={blog_8} alt='sora' />        
                    <h4>Bankman-Fried Would Like to Talk With Musk About Twitter</h4>
                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p> 
                    <a href='/Blog'>read more</a>        
                </div>

                <div className='col-lg-4 col-md-6 card'>
                    <span>March 25, 2022</span>
                    <img src={blog_9} alt='sora' />        
                        <h4>Crypto-Focused Silvergate Jumps on Blowout Earnings Report</h4>
                    <p>Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.</p> 
                    <a href='/Blog'>read more</a>        
                </div>


                    </div>
                    <div className='bages'>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>. . .</li>
                            <li>120</li>
                        </ul>
                    </div>
            </div>
            </section>    


        </Fragment>
    )
}


export default Blog;