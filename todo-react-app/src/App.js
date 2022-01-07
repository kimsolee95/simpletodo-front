import './App.css';
import React from 'react';
import Todo from "./Todo.js";
import AddTodo from "./AddTodo.js";
import { Paper, List, Container } from "@material-ui/core"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //item: { id: 0, title: "Hello world 1", done: true },
      items: [
        { id: "0", title: "Hello World 1", done: true },
        { id: "1", title: "Hello World 2", done: false },
      ],
    };
  }

  render() {
    
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
          <Container maxWidth="md">
            <AddTodo />
            <div className="TodoList">{todoItems}</div>
          </Container>
      </div>
    )
  }
}
export default App;