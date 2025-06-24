import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";

const Home = () => {

  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      { alertVisible &&
        <Alert onClose={() => setAlertVisibility(false)}>
      <h1>Hello World</h1>
      </Alert>}
      <Button onClick={() => setAlertVisibility(true)}>
        👍
      </Button>
           
      
    </div>
  );
}

export default Home;
