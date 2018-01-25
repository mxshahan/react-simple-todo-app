var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');
//Importing React Router
import {Router, Route, browserHistory, Link} from 'react-router';

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./add-item');
var About = require('./about');
var Contact = require('./contact');
var NavBar = require('./navbar');


var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
                <Route path={"/contact"} component={Contact}></Route>
            </Router>
        );
    }
});

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(ListItem, index){
            return(<TodoItem key={index} itemKey={index} item={ListItem} msg="hello" onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                <NavBar/>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} initAge={true?"Add Some Data":""}/>
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(itemKey){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return itemKey !== index;
        });
        this.setState({
          todos: updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }
});



ReactDOM.render(<App />, document.getElementById('todo-wrapper'));