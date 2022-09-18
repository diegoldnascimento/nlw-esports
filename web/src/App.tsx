import { useState } from "react";

type ButtonProps = {
  title: string;
};

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Button title={"Enviar"} />
    </div>
  );
}

export default App;
