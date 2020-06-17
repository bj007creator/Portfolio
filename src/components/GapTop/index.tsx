import React from 'react';

import { GapToTop } from './style';
import { FiArrowUp } from 'react-icons/fi';

interface GapTopProps {
    handleScroll : any;
}

const GapTop : React.FC<GapTopProps> = (props) => {
    return (
        <GapToTop
            onClick={ props.handleScroll }
        >
            <FiArrowUp/>    
        </GapToTop>
    );
}
export default GapTop;