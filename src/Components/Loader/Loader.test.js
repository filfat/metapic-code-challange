import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import Loader from './Loader';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Loader />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});