var React = require('react');
require('./css/add-item.css');

var valueOfChange = "";


var AddItem = React.createClass({
    getInitialState: function(){
        return {
            age : this.props.initAge,
            status : 0,
            va: setTimeout(() => {
                this.setState({
                    status: status+1
                });
            }, 1000)
        }
    }, //getInitialState

    //On changing the value of input box
    onChangeHandler: function(){
        var txt = this.refs.newItem.value;
        this.setState({
            age: txt
        });
    },

    render: function(){
        return(
            <div>
                <form id="add-todo" onSubmit={this.handleSubmit}>
                    <input type="text" required ref="newItem" onChange={()=>this.onChangeHandler()}/>
                    <input type="Submit" defaultValue="Add"/>
                </form>
                <p>#{this.state.status} </p><p>{this.state.age}</p>
            </div>
        );
    },

    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
        this.refs.newItem.value = '';
    }
});

module.exports = AddItem;