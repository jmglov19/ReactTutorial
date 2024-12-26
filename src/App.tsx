import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [alertVisible, setAlertVisibility] = useState(false)

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
    
  return (
    
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>OH NO!</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        {" "}
        Click Me
      </Button>
    </div>
  );
}

export default App;
