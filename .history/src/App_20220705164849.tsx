import React from 'react';
import robots from './mockdata/robots.json'
import Robot from "./components/robot";
import logo from './assets/images/logo.svg'
import styles from './App.module.css'
function App() {
    return (

        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} alt={logo}  className={styles.appLogo}/>
                <h1>罗伯特机器人</h1>
            </div>
            <div className={styles.robotList}>
                {robots.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
            </div>

        </div>

    );
}

export default App;
