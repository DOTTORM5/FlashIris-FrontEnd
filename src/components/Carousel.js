import React , {Component} from 'react';
import carouselBack from '../assets/logo192.png';

class Carousel extends Component{
    render(){
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" style={{height:"600px"  /* Da valutare */}}>
              <div className="carousel-item active">
                <img src={carouselBack} className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item">
                <img src={carouselBack} className="d-block w-100" alt=""/>
              </div>
              <div className="carousel-item">
                <img src={carouselBack} className="d-block w-100" alt=""/>
              </div>
            </div>

            {/* PREV */}
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>

            {/* NEXT */}
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
          </div>
        );
    }
}
export default Carousel;