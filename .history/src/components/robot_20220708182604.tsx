import React, { useContext } from 'react';
import { appContext, appSetStateContext } from '../AppState';

import styles from './Robot.module.css'

interface RobotProps {
    id: number,
    name: string,
    email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    // const id = props.id
    const value = useContext(appContext)
    const setState = useContext(appSetStateContext)
    const addToCart = () => {
        
    }
    return (
        // <appContext.Consumer>
            // {
                // (value) => {
                    // return 
                    <div className={styles.cardContainer}>
                        <img alt={"robot"} src={`https://robohash.org/${id}`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
                        <p>author:{value.username}</p>
                        <button onClick={}>加入购物车</button>
                    </div>
        //         }
        //     }
        // </appContext.Consumer>

    );
}

export default Robot;
