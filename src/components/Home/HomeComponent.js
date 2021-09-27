import React, {Component} from "react";
import {Button, Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from 'reactstrap';
import Slider from "../Slider/Slider";
import PRODUCTS from "../../shared/data";

function RenderProducts({product, onClick}) {
    return (
        <Card key={product.id}
              onClick={() => onClick(product.id)}>
            <CardImg height="250px" width="300px" src={product.image} alt={product.name}/>
            <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardText>{product.description}</CardText>
                <Button color="success">View Product</Button>
            </CardBody>
        </Card>
    );
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS
        }
    }

    render() {
        const menu = this.state.products.map((product) => {
            return (
                <div key={product.id} className="col-12 col-md-3 m-1">
                    <RenderProducts product={product}/>
                </div>
            );
        });
        return (
            <>
                <Slider/>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        {menu}
                    </div>
                </div>
            </>
        );
    }
}

export default Home;