import logo from './logo.svg';
import './App.css';
import rindo from "./img/emoji rindo.png"
import anjo from "./img/emoji anjo.jpg"
import indeciso from "./img/emoji indeciso.png"
import diabinho from "./img/emoji diabinho.png"



function App() {
  return (
    <div className="App">
     <h1>Hi Guys!</h1> 
     <img src={rindo} title='sorrindo' height='200px' width='200px'/>
     <p> Clique no emoji para exibir o nome dele!!</p>
     <img src={anjo} title='anjo' height='40px' width='40px' hspace='20px'/>
     <img src={indeciso} title='indeciso' height='40px' width='40px' hspace='20px'/>
     <img src={diabinho} title='diabinho' height='40px' width='40px' hspace='20px'/>
    </div>
  );
}

export default App;
