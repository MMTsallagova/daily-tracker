import './App.css';
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
    return (
        <div className="App">
            <Header/>
            <Note title={"Pages"} body ={(<span style={{color: "antiquewhite"}}> Body </span>)}/>
        </div>
    );
}

export default App;
