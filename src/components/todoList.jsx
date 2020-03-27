import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className="ml-3">
        {this.props.data.map(data => (
          <span>
            {data.title}
            {"->"}
            <span>
              {data.body} <br />
            </span>
          </span>
        ))}
      </div>
    );
  }
}

export default TodoList;
