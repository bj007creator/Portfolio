import React from 'react';
import './style.css';

interface MainTextCardProps {
    icon : any,
    level : string,
    title : string,
    content : string
}

const MainTextCard : React.FC<MainTextCardProps> = (props) => {
    return (
        <div className="content-main-card">
            <div className={`${props.level}`}>
                <props.icon/>
                <span>{props.title}</span>
            </div>
            <p>{props.content}</p>
        </div>
    );
}

export default MainTextCard;