interface IProp{
    title: string
}

export default function Header({title}:IProp){
    return(
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">This project created in Typescript illustrate the characters of the famous Rick and Morty series</p>
                </div>
            </div>
        </header>
    )
}