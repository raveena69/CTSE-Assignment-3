import React from 'react';
import {Link} from 'react-router-dom'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
// import AppBar from "./../../Components/AppBar"
import Paper from '@material-ui/core/Paper';

    class Contactus extends React.Component{
        constructor(){
          super();
        }
      
        render(){
      
            return (
                <section className="my-5">
                  <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Contact us
                  </h2>
                  <p className="text-center w-responsive mx-auto pb-5">Smart Buy is Sri Lanka's leading pure-play value Ecommerce platform,
                  Founded in 2011 by Ranul Senevirathna and Kalum Kumara. Smart Buy is one of the top four online lifestyle shopping destinations of Sri Lanka. 
                  Smart Buy brings together a wide assortment of good quality and value- priced merchandise on its platform.
                  </p>
                  <MDBRow>
                        <div className="container">
                            <MDBCol lg="12" className="lg-0 mb-4">
                            <MDBCard>
                                <MDBCardBody>
                                <div className="form-header">
                                    <h3 className="mt-2">
                                        <b><MDBIcon icon="envelope" /> Write to us:</b>
                                    </h3>
                                </div>
                                <p className="dark-grey-text">
                                    We are here to help you. Please write us, what you need to know about. 
                                </p>
                                <div className="md-form">
                                    <MDBInput
                                    icon="user"
                                    label="Your name"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-name"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                    icon="envelope"
                                    label="Your email"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-email"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                    icon="tag"
                                    label="Subject"
                                    iconClass="grey-text"
                                    type="text"
                                    id="form-subject"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                    icon="pencil-alt"
                                    label="description"
                                    iconClass="grey-text"
                                    type="textarea"
                                    id="form-text"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="light-blue">Submit</MDBBtn>
                                </div>
                                </MDBCardBody>
                            </MDBCard>
                            </MDBCol>
                        </div>
                    <MDBCol lg="12">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{ height: "400px" }}
                        >
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.491753800812!2d79.83371061305006!3d6.913131730308818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25960d359dbbf%3A0xd64947e9ab7a4c4f!2sColombo%2003%2C%20Colombo!5e0!3m2!1sen!2slk!4v1652206584022!5m2!1sen!2slk"
                            title="This is a unique title"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            />
                        </div>  
                        <br />
                        <MDBRow className="text-center">
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="blue" className="accent-1">
                            <MDBIcon icon="map-marker-alt" />
                            </MDBBtn>
                            <p>Smart Buy Head Office.</p>
                            <p className="mb-md-0">Kollupitiya, Colombo, Sri Lanka</p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="blue" className="accent-1">
                            <MDBIcon icon="phone" />
                            </MDBBtn>
                            <p>0011-564-432</p>
                            <p className="mb-md-0">0342-729-324</p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn tag="a" floating color="blue" className="accent-1">
                            <MDBIcon icon="envelope" />
                            </MDBBtn>
                            <p>smartbuy@admin.com</p>
                            <p className="mb-md-0">smartbuy@upekshitha.info</p>
                        </MDBCol>
                        </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </section>
              );
        }
}

export default Contactus;
