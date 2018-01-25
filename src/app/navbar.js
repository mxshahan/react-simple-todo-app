var React = require('react');
import {Link} from 'react-router';
require('./css/navbar.css');

var NavBar = React.createClass({
    render: ()=>{
        return(
            <div id="navbar">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        )
    },
    handleClick: ()=>{
        console.log('Clicked');
    },

});

module.exports = NavBar;