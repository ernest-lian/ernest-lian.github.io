/* React */
import React, { useState } from 'react';

/* Material-UI*/
import { Box } from '@material-ui/core';

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

/* Local Files Styling */
import './insights.css';

const Insights = ({
    question,
    answer,
    background
}) => {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    const [isQuestion, setIsQuestion] = useState(true)

    const handleMouseEnter = () => {
        setIsQuestion(!isQuestion)
    };
    
    return(
        <Box
           height='100%'
           width='33.33%'
           p={2}
           height='150px'
        >
            <Box
                display='flex'
                textAlign='center'
                justifyContent='center'
                alignItems='center'
                height='100%'
                borderRadius='5px'
                p={2}
                style={{
                    'background-color': background,
                    'font-family': 'Lato, sans-serif'
                }}
                color='white'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseEnter}
            >
                {
                    isQuestion === true ? 
                        question : answer.map((value) => {return value})
                            
                }
            </Box>
        </Box>
    )
}

export default Insights;
