import { Carousel, } from 'react-bootstrap';
import React, { Component } from 'react'
export default class Carouselimg extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            index : 0
         }
    }
    handleSelect = index => this.setState({index})
    render() { 
        return (
            <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://inspirelle.com/wp-content/uploads/2016/05/Website-img.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.vox-cdn.com/thumbor/6r-QazTLCbroOWecnJ7-IWrmoLU=/250x250/cdn.vox-cdn.com/uploads/chorus_asset/file/2579686/DSC_1481.1326130581.jpg"
                  alt="Second slide"
                />
        
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.vox-cdn.com/thumbor/6r-QazTLCbroOWecnJ7-IWrmoLU=/250x250/cdn.vox-cdn.com/uploads/chorus_asset/file/2579686/DSC_1481.1326130581.jpg"
                  alt="Third slide"
                />
        
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          );
        }
    }
    
    
    // render(<ControlledCarousel />);