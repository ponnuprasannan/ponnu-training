import './App.css';
// import Header from './Training/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import States from './Training/States';
import { Container } from 'react-bootstrap';
function App() {

  const state = [
    {name:"Kerala",language:"Malayalam",population:1000},
    {name:"Tamilnadu",language:"Tamil",population:1000},
    {name:"Karnataka",language:"Kannada",population:1000},

  ]
  return (
    <div className="App">
      <Container>
        <p>
          Hello Ponnuuu....
        </p>
       {/* <Header /> */}
       <States states={state} />
       </Container>
    </div>
    
  );
}

export default App;
