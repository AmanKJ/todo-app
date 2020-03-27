import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/navbar";
import TodoList from "./components/todoList";
import InputForm from "./components/inputForm";

class App extends Component {
  state = {
    data: [
      { title: "Hi", body: "body" },
      { title: "Hello", body: "World" }
    ]
  };

  handleSave = (title, body) => {
    if (title !== "" || body !== "") {
      const data = [...this.state.data, { title: title, body: body }];
      this.setState({ data });
    } else {
      console.log("Field can't be Empty!");
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar totalTodos={this.state.data.length} />
        <TodoList data={this.state.data} />
        <InputForm onSave={this.handleSave} />
      </React.Fragment>
    );
  }
}

export default App;
