import React, { Component } from 'react';
import API from '../../Utils/API';

import Banner from '../../Components/Banner';
import Loader from '../../Components/Loader';
import ProductCard from '../../Components/ProductCard';

import TempKey from '../../Utils/TempKey';
import './Storefront.css';

const randomBackgroundColor = () => {
    const colors = [
        "#3498db",
        "#9b59b6",
        "#2ecc71",
        "#e74c3c",
        "#e67e22",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
};

class Storefront extends Component {
    state = {};

    componentDidMount() {
        API.Get(`${TempKey.path}?${TempKey.query}`).then(({data}) => {
            let products = [];

            for (let i = 0; i < data.length; i++) {
                const product = data[i];
                product.background = randomBackgroundColor();

                products.push(<ProductCard key={`product_${i}`} data={product}></ProductCard>);
            }

            this.setState({ products });
        });
    }

    render() {
        return (
			<div className="StorefrontPage">
                <Banner>
                    <div className="title">Storefront</div>
                </Banner>
                { !this.state.products ? <Loader /> : <div className="products">
                    {this.state.products}
                </div>}
            </div>
        );
    }
}

export default Storefront;