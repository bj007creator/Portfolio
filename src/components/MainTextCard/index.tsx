import React from 'react';
import { ContentMainCard } from './style';

interface MainTextCardProps {
    icon : any,
    level : string,
    title : string,
    content : string
}

const MainTextCard : React.FC<MainTextCardProps> = (props) => {
    return (
        <ContentMainCard>
            <div className={`${props.level}`}>
                <props.icon/>
                <span>{props.title}</span>
            </div>
            <p>{props.content}</p>
        </ContentMainCard>
    );
}

export default MainTextCard;