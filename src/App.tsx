import Header from "./components/Header"
import Character from "./components/Character"
import './styles/main.sass'
import './styles/Header.css'


export default function App() {
    return (
        <>
            <Header title={"Rick and Morty"}/> 
            <Character/> 
        </>
    )
}

