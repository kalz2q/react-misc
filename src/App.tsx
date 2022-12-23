// switchtransition
import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div style={{ paddingTop: '2rem' }}>
      {showButton && (
        <button
          onClick={() => setShowMessage(true)}
        // size="lg"
        >
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        {/* <Alert
          ref={nodeRef}
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>
            Animated alert message
          </Alert.Heading>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          <button
            variant="primary"
            onClick={() => setShowMessage(false)}
          >
            Close
          </button>
        </Alert> */}
        <alert>alert("kk")</alert>
      </CSSTransition>
    </div>
  );
}

export default App;
