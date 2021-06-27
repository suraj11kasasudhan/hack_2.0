import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';

class create_send extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      content: this.state.editorState
    };

    axios.post('http://localhost:8080/posts', {data})
      .then(res => {
        console.log(data);
      })

    this.setState({editorState: EditorState.createEmpty()})
  }
  render() {
    return (
      <div>
        <h5>Create document</h5>        
          <Editor
            editorState={this.state.editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          <button onClick={this.handleSubmit} className="btn-large waves-effect waves-light xbutton">Save</button>        
      </div>
    );
  }
}

export default create_send;