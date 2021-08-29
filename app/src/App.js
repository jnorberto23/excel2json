import { Header, Jumbotron, Buttons, Textarea, InputFile } from './components';
import { Row, Col, ButtonGroup, Container } from 'react-bootstrap';
import { React, useState } from 'react';

function App() {

  const [textareaValue, setTextareaValue] = useState("");

  const handleClearTextarea = () => {
    setTextareaValue("");
  }

  const handleChangeTextarea = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleCopyTextareaValue = () => {
    let copyText = document.getElementById("textarea");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
  }

  return (

    <>
      <Header />
      <Jumbotron />

      <Container className="text-center">
        <Row>

          <Col xs={12} md={8}>
            <InputFile />
          </Col>

          <Col xs={12} md={3}>
            <ButtonGroup className="mb-2">
              <Buttons
                color="btn btn-success"
              >
                Convert
              </Buttons>

              <Buttons
                color="btn btn-light"
                action={handleCopyTextareaValue}>
                Copy
              </Buttons>

              <Buttons
                color="btn btn-Primary"
              >
                Download
              </Buttons>

              <Buttons
                color="btn btn-danger"
                action={handleClearTextarea}>
                Clear
              </Buttons>
            </ButtonGroup>

          </Col>

        </Row>
      </Container>

      <Textarea
        value={textareaValue}
        onChange={handleChangeTextarea}
        id="textarea"
      />

    </>
  );
}

export default App;
