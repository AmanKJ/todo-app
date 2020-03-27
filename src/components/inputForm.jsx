import React, { Component } from "react";

class InputForm extends Component {
  style = {
    resize: "none"
  };

  render() {
    let title = "";
    let body = "";

    return (
      <React.Fragment>
        <div className="form-group">
          <input
            type="text"
            className="form-control w-25 m-3"
            name="title"
            id="title"
            key="title"
            aria-describedby="helpId"
            placeholder="Title"
            onChange={event => {
              title = event.target.value;
            }}
          ></input>
        </div>
        <div className="form-group">
          <textarea
            style={this.style}
            className="form-control m-3 w-25"
            name="body"
            key="body"
            id="body"
            rows="5"
            placeholder="body"
            onChange={event => {
              body = event.target.value;
            }}
          ></textarea>
        </div>
        <button
          onClick={() => this.props.onSave(title, body)}
          className="btn btn-primary m-3"
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default InputForm;
