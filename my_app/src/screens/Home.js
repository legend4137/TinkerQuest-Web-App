import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousal from '../components/Carousal'
import { Link, useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Carousal/>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="display-4 fw-bold lh-1 text-body-emphasis"> Redcliffe Labs</h1>
              <h3 class=" fw-bold text-body-emphasis"> <Typewriter
  options={{
    strings: ['Technology', 'Innovation','Health', 'Revolution','Science'],
    autoStart: true,
    loop: true,
  }}
/></h3>
 
              <p class="lead text-body-secondary">Establishing an inventory management forecasting which helps in maintaining the right inventory in all labs, and predict the need, that can be arranged in advance and accurately. </p>
              {/* <p>
                <a href="#" class="btn btn-primary my-2">Main call to action</a>
                <a href="#" class="btn btn-secondary my-2">Secondary action</a>
              </p> */}
            </div>
          </div>
          </section>

        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-6 fw-bold lh-1 text-body-emphasis">Real-time Inventory Monitoring</h1>
              <p class="lead">Dashboard offering a centralized view of inventory across different locations, warehouses, or departments. It will provide up-to-date information on stock levels, including quantities on hand, incoming shipments, and outgoing orders.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <Link to="/dashboard"><button type="button"  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" fdprocessedid="rnp8zl">Take me</button></Link>
                {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4" fdprocessedid="e9ynmr">Default</button> */}
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                {/* <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"> */}
            </div>
          </div>
        </div>

        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                {/* <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"> */}
            </div>
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-6 fw-bold lh-1 text-body-emphasis"> Inventory Analysis and Reporting</h1>
              <p class="lead">Dashboard containing detailed reports and analytics on inventory performance, including stock turnover, aging, and obsolescence. Which enables informed decision-making regarding purchasing, production planning, and inventory optimization.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <Link to="/tests"><button type="button"  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" fdprocessedid="rnp8zl">Take me</button></Link>
                {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4" fdprocessedid="e9ynmr">Default</button> */}
              </div>
            </div>
            
          </div>
        </div>

      
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-6 fw-bold lh-1 text-body-emphasis"> Demand Forecasting and Planning</h1>
              <p class="lead">Leveraging historical data and demand patterns, the dashboard will assist in predicting future inventory needs and potential stockouts. This information will facilitate proactive planning and procurement to meet customer demands efficiently.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <Link to="/patients"><button type="button"  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" fdprocessedid="rnp8zl">Take me</button></Link>
                {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4" fdprocessedid="e9ynmr">Default</button> */}
              </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                {/* <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"> */}
            </div>
          </div>
        </div>
        
        <div class="container my-5">
          <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                {/* <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"> */}
            </div>
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 class="display-6 fw-bold lh-1 text-body-emphasis">Order Management and Fulfillment</h1>
              <p class="lead">Dashboard integrating with order management systems, enabling seamless order processing and fulfillment. Providing visibility into order statuses, shipment tracking, and delivery schedules, ensuring timely and accurate order completion.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3">
              <Link to="/login"><button type="button"  class="btn btn-primary btn-lg px-4 me-md-2 fw-bold" fdprocessedid="rnp8zl">Take me</button></Link>
                {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4" fdprocessedid="e9ynmr">Default</button> */}
              </div>
            </div>
            
          </div>
        </div>


        


        
        <Footer/>
    </div>
  )
}


