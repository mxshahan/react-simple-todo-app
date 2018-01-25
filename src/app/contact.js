var React = require('react');
var NavBar = require('./navbar');

var Contact = React.createClass({
    render: function(){
        return(
            <div>
                <NavBar/>
                <ContactBodySection/>
            </div>
        )
    }
});

class ContactBodySection extends React.Component{
    render(){
        return(
            <div id="aboutBody">
                <div id="tableItem">
                    <h2>What does this mean for you?</h2>
                    <p>Is your mission statement longer than 20 words? Can you get it below 15? Below 10?  Design it to clearly communicate what you do in such a way that people can remember it and communicate this to others. If you can’t get a mission statement below 15 words, consider also creating a mission tagline (2-6 words) which people can more easily remember.</p>
                </div>

                <div id="tableItem">
                    <h2>What does mean by nonprofit mission statement?</h2>
                    <p>At Bright House, we promote the dignity and self-worth of all of our residents, and strive to give them excellent quality of life, as defined by the residents, individually and as a group. To that end, we encourage resident group decision-making through the House Councils, access to all areas of their homes here at Bright House, and self-determination in activities, socialization, and food preferences. Bright House is not just a caregiving facility—it is their home, and their community.</p>
                </div>
            </div>
        )
    }
}

module.exports = Contact;