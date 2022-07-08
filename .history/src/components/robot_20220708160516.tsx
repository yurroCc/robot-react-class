import React from 'react';
import App from '../App';
import styles from './Robot.module.css'

interface RobotProps{
    id: number,
    name: string,
    email: string
}

const Robot :React.FC<RobotProps> = ({id,name,email}) => {
    // const id = props.id
    return (
        <appContext.Consumer>
            {
                
            }
        </appContext.Consumer>
       
    );
}

export default Robot;
