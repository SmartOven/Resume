import './App.css'
import React from "react";

const App: React.FC = () => {
    return (
        <>
            <h1>Yaroslav Panteleev</h1>
            <div>
                Hi there!
            </div>
            <div>Here you can find my CV and some of my pet-projects</div>
            <ul>
                <li><b>Miallo.</b> A straightforward messenger</li>
                <ul>
                    <li><a href="http://miallo.panteleevya.ru">Try it here</a></li>
                    <li><a href="https://github.com/SmartOven/Miallo">GitHub repository</a></li>
                </ul>
                <li><b>The phone store.</b> An e-commerce website for selling phones</li>
                <ul>
                    <li><a href="http://thephonestore.panteleevya.ru">Try it here</a></li>
                    <li><a href="https://github.com/SmartOven/ThePhoneStore">GitHub repository</a></li>
                </ul>
                <li><b>Paste.</b> A service for quick and handy sharing of formatted texts</li>
                <ul>
                    <li><a href="http://paste.panteleevya.ru">Try it here</a></li>
                    <li><a href="https://github.com/SmartOven/paste">GitHub repository</a></li>
                </ul>
            </ul>
        </>
    )
}

export default App
