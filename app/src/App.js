import { Header, Jumbotron, Buttons, Textarea, InputFile } from './components';
import { Row, Col, ButtonGroup, Container } from 'react-bootstrap';
import { React, useState } from 'react';
import api from './services/api';

function App() {

  const [textareaValue, setTextareaValue] = useState("");
  const [file, setFile] = useState();

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

  const handleChangeInput = (e) => {
    if(e.target.files[0]){
      if(e.target.files[0].size > 10485760){
        alert("Erro: O arquivo é muito grande! Por favor, faça o upload de um arquivo menor do que 10Mb");
        setFile("");
     }
     else{
      setFile(e.target.files[0]);
      console.log(file);
     }
    }
    else{
      setFile("");
    }
  }

  const handleConvert = () => {

    if(file != ""){
      const formData = new FormData();
      formData.append('file', file);
  
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      api.post("/upload/", formData, config).then(res => {
  
        setTextareaValue(JSON.stringify(res.data));
      });
    }
    else{
      alert("Erro: Nenhum arquivo selecionado.");
    }
    
  }

  return (
    <>
      <Header />
      <Jumbotron />

      <Container className="text-center">
        <Row>

          <Col xs={12} md={8}>
            <InputFile
              onChange={handleChangeInput}
              accept=".xls, .xlsx, .xlsm"
            />
          </Col>

          <Col xs={12} md={3}>
            <ButtonGroup className="mb-2">
              <Buttons
                color="btn btn-success"
                action={handleConvert}
              >
                Convert
              </Buttons>

              <Buttons
                color="btn btn-light"
                action={handleCopyTextareaValue}>
                Copy
              </Buttons>

              {/* 
              <Buttons
                color="btn btn-Primary"
              >
                Download
              </Buttons>
              
              */}
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
