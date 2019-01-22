import React, { Component } from 'react';

import './Loader.css';

class Loader extends Component {
    render() {
        return (
			<div className="Loader">
                <div className="circle"></div>
                <div className="circle circle2"></div>
            </div> 
        );
    }
}

export default Loader;