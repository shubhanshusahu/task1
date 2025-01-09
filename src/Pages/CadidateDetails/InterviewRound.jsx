import { Button } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FeedbackBox from './FeedbackBox';
import Ratings from './Ratings';
import CategoryWiseRatings from './CategoryWiseRatings';
const InterviewRound = ({ stepName }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [showCard, setShowCard] = useState(true)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const userRatings = {
        finalScore: 4,
        skills: 2,
        culturalFit: 2,
        propblemSolving: 2,
        communication: 2
    }

    const handleToggle = () => {
        setShowCard(!showCard)
    }

    return (
        <div className='InterviewRound'>
            <div className='heading'>
                <h2 className='headtext'>{stepName}</h2>
                <span className='flex gap-2'>
                <Button
                    id="demo-customized-button"
                    style={{ textTransform: 'capitalize' }}
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    disabled
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    Completed
                </Button>
                <Button style={{ textTransform: 'capitalize' }} onClick={handleToggle}>Change View</Button>
                </span>
            </div>
            <div className={showCard ? " feedbacDetails" : 'feedbackDetailsList'}>

                <FeedbackBox num={1} showCard={showCard} basis={'Feedback Given'} count={2} totalFeedbackCount={2} />
                <FeedbackBox num={2} showCard={showCard} basis={'Feedback Pending'} count={0} totalFeedbackCount={2} />
                <FeedbackBox num={3} showCard={showCard} basis={'Feedback Given'} count={2} totalFeedbackCount={2} />
                



            </div>
            <div className='ratings'>
                <Ratings userRatings={userRatings} />
            </div>
            <div className='CategoryWiseratings'>
                <CategoryWiseRatings userRatings={userRatings} />
            </div>

        </div>
    )
}

export default InterviewRound