import React from 'react';
import {Link} from 'react-router-dom'
// import AppBar from "./../../Components/AppBar"

import { getThemeProps } from '@material-ui/styles';
import ad1 from "../../images/ad1.jpg"
import ad2 from "../../images/ad2.jpg"
import ad3 from "../../images/ad3.jpg"
import customer1 from "../../images/customer1.jpg"
import customer2 from "../../images/customer2.jpg"
import customer3 from "../../images/customer3.jpg"
import customer4 from "../../images/customer4.jpg"
import customer5 from "../../images/customer5.jpg"
import chefs3 from "../../images/chefs-3.jpg"

class Home extends React.Component{
  constructor(){
    super();
    this.state={
    }
  }

  render(){

    return (
        <div >
          {/* <AppBar/> */}
          <br />
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={ad1} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={ad2} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={ad3} alt="Third slide"/>
              </div>
            </div>
          </div>
          < br />
          
          <div class="container">
            <div class="row">
              <div className="align-center mb-4">
                <h3><b>See what's our Customer say about US !!!</b></h3>
              </div>

              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src={customer1} alt="Card image cap"/>
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">“I managed to find a print of a painting that I’ve long coveted by an obscure Victorian artist …. 
                    iCanvas have an incredible wide range of art produced in a very...”</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Kerrie Runchman - Software Engineer</small>
                  </div>
                </div>

                <div class="card">
                  <img class="card-img-top" src={chefs3} alt="Card image cap"/>
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">“Ordered a Fridge/freezer, delivery drivers were polite but on bringing the item 
                    into the property scrapped and damaged my wood flooring, spoke to James in busin...”</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Nathan Koehler - Chef</small>
                  </div>
                </div>

                <div class="card">
                  <img class="card-img-top" src={customer3} alt="Card image cap"/>
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">“We had water coming in through our kitchen ceiling from the bathroom above. 
                    Frank from ADI Leak Detection found where the leak was coming from and fixed it quic...”</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Nikkita Douglas - Doctor</small>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="row mt-4">
              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src={customer4} alt="Card image cap"/>
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">“Great product !!!! Think about this they are less expensive than a 'hallmark' card.”</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Matt Brandon - Entrepreneur</small>
                  </div>
                </div>

                <div class="card">
                  <img class="card-img-top" src={customer2} alt="Card image cap"/>
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">“Great help from kieran, very informative and friendly person and helped us largely.”</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Sara Wilsson - Designer</small>
                  </div>
                </div>

                <div class="card">
                  <img class="card-img-top" src={customer5} alt="Card image cap"/>
                  <div class="card-body">
                    {/* <h5 class="card-title">Card title</h5> */}
                    <p class="card-text">“I was having trouble with my remote and tv. Just answer walked me through fixing it.”</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">John Larson - Freelancer</small>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


)
}
}

export default Home;