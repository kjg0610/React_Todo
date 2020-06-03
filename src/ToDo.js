import React, { Component } from "react";
import ToDoAdd from "./ToDoAdd";
import ToDoItem from "./ToDoItem";
import { connect } from "react-redux";
import { todoAction } from "./reducer";
class ToDo extends Component {
    componentDidMount() {
        this.props.getTodo()
        //console.log(this.props.addTodo);
    }
    state = {
        newItem: "",
        list: [],
    };

    updateInput(key, value) {
        this.setState({ [key]: value });
    }

    deleteItem = (id) => {
        const list = [...this.state.list];
        const updatedList = list.filter((item) => item.id !== id);
        this.setState({ list: updatedList });
    };

    addItem = (value) => {
        const newItem = {
            id: 1 + Math.random(),
            value: value, //.slice()
        };

        //const list = [...this.state.list];
        this.props.addTodo(newItem);
        //   list.push(newItem);

        //   this.setState({
        //     list
        //   });
    };

    render() {
        return (
            <div className="App">
                <h1 className="title">Todo List</h1>
                Add a task!
                <br></br>
                <ToDoAdd addItem={this.addItem}></ToDoAdd>
                <ul>
                    {this.props.todos.map((item, i) => {
                        return (
                            <ToDoItem
                                item={item}
                                key={i}
                                deleteFn={this.deleteItem}
                            ></ToDoItem>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

//export default ToDo;
// subscribe
const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todo.todos,
    };
};
//dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        getTodo: (value) => dispatch(todoAction.getTodo(value)),
        addTodo: (value) => dispatch(todoAction.addTodo(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
