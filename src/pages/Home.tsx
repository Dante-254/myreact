import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";

const Home = () => {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3">Welcome to ModeKali!</h1>
        <p className="lead mb-4">
          This is your home page. Explore the app using the navigation bar
          above.
          <br />
          Click the button below to see a greeting alert.
        </p>
        <Button onClick={() => setAlertVisibility(true)}>👍Show</Button>
      </div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <h1>Hello World</h1>
        </Alert>
      )}
    </div>
  );
};

export default Home;
