import React, { Component } from 'core-js/library/fn/reflect/es7/metadata'

class TodoEditor extends Component {
    state = {
        message: ''
    };
    handleChange = (event) => { };
    
        render() {
            return (
                <form className="TodoEditor">
                    <textarea className="TodoEditor_textarea" value={this.state.message} onChange={this.handleChange}></textarea>
                    <button type="button" className="TodoEditor_button">Save</button>
                    </form>
            );
        }
    
};
export default TodoEditor;