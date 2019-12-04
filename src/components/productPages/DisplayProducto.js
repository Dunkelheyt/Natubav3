import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

class DisplayProducto extends React.Component {
  render() {
    const { info } = this.props; // ES6 destructuring

    return (
      <div>
        <h1 className="text-center">{info.productoNombre}</h1>
        <div className="container text-center">
          <Carousel
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            dynamicHeight
          >
            {info.imgC.map((data, index) => (
              <div>
                <img src={data} alt="carrousel" />
              </div>
            ))}
          </Carousel>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 rightBorder">
              <p>{info.desc}</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>{info.desc2}</p>
            </div>
          </div>
          <hr />
          <h1 className="text-center">Información nutrimental:</h1>
          <ul>
            {info.nutriF.map((data, index) => (
              <li className="text-center">{data}</li>
            ))}
          </ul>
          <hr />
          <h1 className="text-center">Tips para preparar:</h1>
          <ul>
            {info.nutriF.map((data, index) => (
              <li className="text-center">{data}</li>
            ))}
          </ul>
          <button type="button" class="btn btn-success">
            <Link to={"/ordenar"}>Ordenar</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default DisplayProducto;
