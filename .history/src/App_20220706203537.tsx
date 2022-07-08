import React from 'react';
import robots from './mockdata/robots.json'
import Robot from "./components/robot";
import logo from './assets/images/logo.svg'
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart';
class App extends React.Component{
    forceUpdate(callback?: (() => void) | undefined): void {
        
    }
    render(){
        return (

            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} alt={logo}  className={styles.appLogo}/>
                    <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
                </div>
                <ShoppingCart></ShoppingCart>
                <div className={styles.robotList}>
                    {robots.map(r => <Robot id={r.id} name={r.name} email={r.email} />)}
                </div>
    
            </div>
    
        );
    }
    
}

export default App;
