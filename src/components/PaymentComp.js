import React from 'react'
import { useHistory } from 'react-router-dom';

function PaymentComp() {
    const history = useHistory();
    function next(e)
    {
        e.preventDefault()
        history.replace("/checkout");
    }
    return (
        <div className="container-fluid">
    
            <div className="row checkout">
    
                <div className="col-lg-8 col-12 col-md-8 checkout-left" >
    
        <div className="sign-title">
          <h2>Payment</h2> 
          <span>All transactions are secure and encrypted</span>      
        </div>

         <div className="payment">

           <div className="payment-footer">

           <img src="images/paypal-cropped.png" />
           <a href="#" target="_blank"> <h6>Pay With PayPal</h6></a>

          </div>

        </div>

        
        <div className="accordion payment" id="accordionExample">

          <div className="accordion-item" style={{"border":"none"}}>
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
             
                <div className="payment-head" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >

                  <span className="circle"></span>

                  <h5> Credit Card Or Debit Card</h5>

                  <div>

                    <img src="images/visa.png" />
                    <img src="images/unionpay.png" />
                    <img src="images/maestro.png" />

                  </div>
                  
                </div> 
                                           

            </h2>

            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                  
         

                <div className="payment-body" >

                  <div className="form-field">
                    
                        <label>Card Number *</label>
                        <input type="text" placeholder="Card Number"  />
                  

                  </div>


                  
                  <div className="form-field">
                    
                    <label>Name On Card *</label>
                    <input type="text" placeholder="Name on card"  />
              

                  </div>

                  <div className="form-field">

                    <div className="row">

                      <div className="col-lg-6 col-md-6 col-12 dual-width">
                        <label>Expiration Date (MM/YY) *</label>
                        <input type="month" placeholder="First name"  />
                      </div>

                      <div className="col-lg-6 col-md-6 col-12 dual-width">
                        <label>Security Code *</label>
                        <input type="text" placeholder="Security Code"  />
                      </div>

                    </div>

                  </div>

                </div>



              </div>
            </div>
          </div>


          <div className="accordion-item" style={{"border":"none"}}>
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
             
                <div className="payment-head collapsed" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">

                  <span className="circle"></span>
                  <h5>Bank Deposit </h5>
                  
                </div>
              
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">

                  <p className="mb-3">

                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds
                    have cleared in our account. Please send the payment screenshot to WhatsApp +920+231245667

                  </p>

                  <h5>Bank Details</h5>
                  <p><strong>Bank Title:</strong> Example</p>
                  <p><strong>Account Title:</strong> Example</p>
                  <p><strong>Account Number:</strong> Example</p>
                  <p><strong>IBAN:</strong> Example</p>

                  <p className="mt-3">Shop with peace of mind :)</p>

              </div>
            </div>


          </div>      


      </div>
      <div style={{"overflow":"auto"}}>
      <div style={{"float":"right"}}>
       <button type="button" onClick={(e)=>{next(e)}} className="button-green" style={{"marginRight": "20px"}}>Previous</button>
       <button type="button"  className="button-green">Pay</button>            
      </div>
    </div>
      </div>
      <div className="col-lg-4 col-12 col-md-4 checkout-right">
                  
      <div className="green-overlay"></div>

      <div style={{"position": "sticky","top": "10px"}}>

      <div className="reserve">
        <h2>Reservation Summary</h2> 
      </div>

      <div className="flights">
        <i className="fa-solid fa-plane"></i><h3>Flight 1</h3>
      </div>

      <div className="time-detail">
        <p>Departing</p>

          <div className="airport-time">

          <p>Dhakka International</p>
          <p>30/11/2021 - 7:00 PM</p>

          </div>
      </div>


      <div className="time-detail">
        <p>Arrival</p>

          <div className="airport-time">

          <p>Dhakka International</p>
          <p>30/11/2021 - 7:00 PM</p>

          </div>
      </div>


      <div className="time-detail">

        <div className="flight-info">

        <p>Flight BD-300</p>
        <p>Cabin: Economy</p>

        </div>
        
        <div className="fare-basis">
          <p>Fare Basis: TOWINET</p>
        </div>

      </div>


      <div className="time-detail">
        

          <div className="total-price">

          <p>Ticket Fare</p>
          <p>1,000 TK</p>

          </div>

          <div className="total-price">

            <p>Total Tax</p>
            <p>500 TK</p>

          </div>

          <div className="total-price">

            <p>Total</p>
            <p>1,500 TK</p>

          </div>

      </div>
        
    </div>
     
        
    </div>
      </div>
      </div>

)
}

export default PaymentComp
