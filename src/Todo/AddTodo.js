import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../actions";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            description: "",
            priority: "low"
        };
        this.addTodo = this.addTodo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggleAddTodo = this.toggleAddTodo.bind(this);
    }

    addTodo(e) {
        e.preventDefault();
        this.props.addTodo(this.state.description, this.state.priority);
        this.setState({clicked: false, description: "", priority: "low"})
    }

    toggleAddTodo() {
        this.setState({clicked: !this.state.clicked});
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="todo-item add-item">
                <div className={this.state.clicked ? "item-header add-expanded" : "item-header add-unexpanded"}>
                    <button onClick={this.toggleAddTodo}>
                        <span role="img" aria-label="add">➕ Add todo</span>
                    </button>
                    {this.state.clicked &&
                    <button onClick={this.toggleAddTodo}>
                        <span role="img" aria-label="cancel">❌ Cancel</span>
                    </button>
                    }
                </div>
                {this.state.clicked &&
                <form>
                    <label htmlFor="description">Description:</label>
                    <input name="description" id="description" type="text" onChange={this.onChange}/>
                    <label htmlFor="priority">Priority:</label>
                    <select name="priority" onChange={this.onChange} id="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <button onClick={this.addTodo}>Add</button>
                </form>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: (description, priority) => dispatch(addTodo(description, priority))
});

export default connect(null, mapDispatchToProps)(AddTodo);