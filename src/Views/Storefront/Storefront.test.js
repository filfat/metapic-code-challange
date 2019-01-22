import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import Storefront from './Storefront';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Storefront />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});