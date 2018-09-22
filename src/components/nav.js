import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
    <div>
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <Link to="/" className="nav-link">Welcome</Link>
            </li>
            <li className="nav-item">
                <Link to="/our_macarons" className="nav-link">Our Macarons</Link>
            </li>
        </ul>
    </div>
)