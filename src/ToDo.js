import React, { Component } from 'react';
import ToDoAdd from './ToDoAdd';
import ToDoItem from './ToDoItem';

class ToDo extends React.Component {

    state = {
        newItem: "",
        list: []
      };
    
  
    updateInput(key,value){
      this.setState({[key]:value});
  
    }
  
    deleteItem = (id) => {
      const list = [...this.state.list];
      const updatedList = list.filter(item => item.id !== id);
      this.setState({list: updatedList});
    }
  
    addItem = (value) => {
      const newItem = {
        id: 1 + Math.random(),
        value: value //.slice()
      };
  
      const list = [...this.state.list];
      list.push(newItem);
  
      this.setState({
        list
      });
    }

    render() {

        return (
            <div className='App'>
                <h1 className='title'>Todo List</h1>
                Add a task!
                <br></br>
                <ToDoAdd addItem={this.addItem}></ToDoAdd>
                <ul>
                    {this.state.list.map((item, i) => {
                        return <ToDoItem item={item} key={i} deleteFn={this.deleteItem}></ToDoItem>
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDo;