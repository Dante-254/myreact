import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function Home() {
  let items = ["New York", "Tokyo", "Manchester", "Madrid"];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      { alertVisible &&
        <Alert onClose={() => setAlertVisibility(false)}>
      <h1>Hello World</h1>
      </Alert>}
      <Button onClick={() => setAlertVisibility(true)}>
        <h3>Log In</h3>
      </Button>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
      
    </div>
  );
}

export default App;
