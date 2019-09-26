import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../actions";
import {TODO_PRIORITY} from "./TodoConstants";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            title: "",
            description: "",
            priority: TODO_PRIORITY.LOW,
            error: ""
        };
        this.addTodo = this.addTodo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggleAddTodo = this.toggleAddTodo.bind(this);
    }

    addTodo(e) {
        const {title, description} = this.state;
        e.preventDefault();
        if (!title.trim()) {
            this.setState({error: "Todo item has no title!"});
            return
        } else if (!description.trim()) {
            this.setState({error: "Todo item has no description!"});
            return
        }
        this.props.addTodo(title, description, this.state.priority);
        this.setState({clicked: false, title: "", description: "", priority: TODO_PRIORITY.LOW, error: ""})
    }

    toggleAddTodo() {
        this.setState({clicked: !this.state.clicked});
    }

    onChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        const {clicked} = this.state;
        return (
            <div className="todo-item add-item">
                {!clicked &&
                <div className={clicked ? "item-header add-expanded" : "item-header add-unexpanded"}>
                    <button onClick={this.toggleAddTodo}>
                        <span role="img" aria-label="add">➕ Add todo</span>
                    </button>
                </div>
                }
                {clicked &&
                <form>
                    <button onClick={this.toggleAddTodo}>
                        <span role="img" aria-label="cancel">❌ Cancel</span>
                    </button>
                    <label htmlFor="title">Title:</label>
                    <input name="title" id="title" type="text" onChange={this.onChange}/>
                    <label htmlFor="description">Description:</label>
                    <input name="description" id="description" type="text" onChange={this.onChange}/>
                    <label htmlFor="priority">Priority:</label>
                    <select name="priority" onChange={this.onChange} id="priority">
                        <option value={TODO_PRIORITY.LOW}>Low</option>
                        <option value={TODO_PRIORITY.MEDIUM}>Medium</option>
                        <option value={TODO_PRIORITY.HIGH}>High</option>
                    </select>
                    <button onClick={this.addTodo}>
                        <span role="img" aria-label="cancel">➕ Add</span>
                    </button>
                    {this.state.error && <span className="error">{this.state.error}</span>}
                </form>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: (title, description, priority) => dispatch(addTodo(title, description, priority))
});

export default connect(null, mapDispatchToProps)(AddTodo);