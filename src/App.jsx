import { useState } from "react";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Container, Form, InputGroup, Stack } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState(["Setup", "Cleaning"]);
  const [addTodo, setAddTodo] = useState("");
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {todos.map((a, i) => {
        return (
          <Stack gap={3}>
            <div className="p-2">
              <input type="checkbox" />
              {a}
              <Button
                variant="outline-danger"
                onClick={() => {
                  let copy = [...todos];
                  copy.splice(i, 1);
                  setTodos(copy);
                }}
              >
                Delete
              </Button>
            </div>
          </Stack>
        );
      })}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add Todo"
          aria-label="Add Todo"
          aria-describedby="basic-addon2"
          onChange={(e) => {
            setAddTodo(e.target.value);
          }}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            let copy = [...todos];
            copy.unshift(addTodo);
            setTodos(copy);
            setAddTodo(""); // 등록된 작성 내용 삭제
          }}
        >
          +
        </Button>
      </InputGroup>
    </>
  );
}

const AddTodo = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Add Todo"
          aria-label="Add Todo"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          +
        </Button>
      </InputGroup>
    </>
  );
};

const TodoList = (props) => {
  return (
    <>
      <Stack gap={3}>
        <div className="p-2">Take a nap</div>
        <div className="p-2">Buy snacks</div>
        <div className="p-2">Go to Mart</div>
      </Stack>
    </>
  );
};

export default App;
