import React, { Component } from "react";

class ToDoAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newItem: ""
        }
    }

    // const item = this.props.item;
    updateInput(key, value) {
        this.setState({ [key]: value });

    }


    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='오늘 할일을 적으세요'
                    value={this.state.newItem}
                    onChange={e => this.updateInput('newItem', e.target.value)}
                />
                <button onClick={() => {this.props.addItem(this.state.newItem); this.setState({newItem: ''})}}><i>추가</i></button>
            </div>
        )
    }
}

export default ToDoAdd;