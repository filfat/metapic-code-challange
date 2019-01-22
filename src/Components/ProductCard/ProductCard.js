import React, { Component } from 'react';

import './ProductCard.css';

class ProductCard extends Component {
    render() {
        const data = this.props.data
        let categories = [];

        for (let i = 0; i < data.categories.length; i++) {
            const category = data.categories[i];

            categories.push(<div key={category.name + i} className="category">
                <span className="title">{category.name}</span>
                <span className="id">#{category.id}</span>
            </div>);
        }

        return (
			<div className="ProductCard">
                <div className="title" style={{backgroundColor: data.background ? data.background : undefined}}>{data.name}</div>
                <div className="prices">
                    <div className="price">
                        <i className="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Octicons-globe.svg/600px-Octicons-globe.svg.png"/></i>
                        <span className="amount">{data.cpc} ¢</span>
                    </div>
                    <div className="price">
                        <i className="icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Instagram_font_awesome.svg/512px-Instagram_font_awesome.svg.png"/></i>
                        <span className="amount">{data.instagram_cpc} ¢</span>
                    </div>
                </div>
                <div className="categories">
                    {categories}
                </div>
            </div>
        );
    }
}

export default ProductCard;