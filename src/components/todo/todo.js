import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../../actions/deleteTodoAction';
import { bindActionCreators } from 'redux';

class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <span className="todo_name">{this.props.item.workName}</span>
                <span className="space"></span>
                <button className="todo_delete" onClick={() => this.props.deleteTodoById(this.props.index)}>Delete</button>
            </div>
        );
    }
}

const mapDistachToProps = () => dispatch => {
    return bindActionCreators({ deleteTodoById: deleteTodoAction }, dispatch);
};

export default connect(null, mapDistachToProps)(Todo);
