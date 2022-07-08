import React from 'react';
import styles from './Robot.module.css'

interface RobotProps{
    id: number,
    name: string,
    email: string
}

const Robot :React.FC<RobotProps> = ({id,name,email}) => {
    // const id = props.id
    return (
        <div className={styles.}>
            <img alt={"robot"} src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Robot;
