import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Message from "./components/Message/Message";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Dialogs/>
                <Message/>
            </div>
        </BrowserRouter>
    );
}

export default App;
