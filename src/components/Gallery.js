import React from 'react'

function Gallery() {
    return (
        <section className="section section-grey">

        <div className="container">

            <div className="d-flex flex-column align-items-center">

            <h2>Our Gallery</h2>
            <img src="images/underlin.png" className="underline" />

            </div>

            <div className="row mt-5 g-2">

              <div className="col-6 col-lg-4 gallery">

                <a href="#">

                <img src="images/plane4.png" />

                </a>

              </div>

              
             
              <div className="col-6 col-lg-4 gallery">

                <a href="#">

                <img src="images/plane5.png" />

                </a>
                
              </div>

              
             
              <div className="col-6 col-lg-4 gallery">

                <a href="#">

                <img src="images/plane6.png" />

                </a>
                
              </div>


              
              <div className="col-6 col-lg-4 gallery">

                <a href="#">

                <img src="images/plane6.png" />

                </a>
                
              </div>

              
              
              <div className="col-6 col-lg-4 gallery">

                <a href="#">

                <img src="images/plane5.png" />

                </a>
                
              </div>

              
              
              <div className="col-6 col-lg-4 gallery">

                <a href="#">

                <img src="images/plane4.png" />

                </a>
                
              </div>
              


            </div>

        </div>

    </section>

    )
}

export default Gallery
