import React, { Component } from 'react';

import Banner from '../../Components/Banner';

class Home extends Component {
    render() {
        return (
			<div className="HomePage align-center">
                <Banner>
                    <div className="title">Home</div>
                </Banner>
                <h1>Hello World!</h1>
			</div>
        );
    }
}

export default Home;
