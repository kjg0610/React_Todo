import React, { Component } from 'react';


class ToDoItem extends Component {
    constructor(props){
        super(props);
    }
    

    render() {
        const item = this.props.item;

        console.log(item);
        return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => this.props.deleteFn(item.id)}>
                <i>x</i>
              </button>
            </li>
          );
    }
}

export default ToDoItem;