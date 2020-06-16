import React from 'react';

import './style.css';
import { FiArrowUp } from 'react-icons/fi';

interface GapTopProps {
    handleScroll : any;
}

const GapTop : React.FC<GapTopProps> = (props) => {
    return (
        <div 
            className="gap-top"
            onClick={ props.handleScroll }
        >
            <FiArrowUp/>    
        </div>
    );
}
export default GapTop;