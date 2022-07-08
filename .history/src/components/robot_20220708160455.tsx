import React from 'react';
import { appContext } from '../index';

import styles from './Robot.module.css'

interface RobotProps {
    id: number,
    name: string,
    email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    // const id = props.id
    return (
        <appContext.Consumer>
            <div className={styles.cardContainer}>
                <img alt={"robot"} src={`https://robohash.org/${id}`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </appContext.Consumer>

    );
}

export default Robot;
