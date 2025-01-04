import { Button } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FeedbackBox from './FeedbackBox';
import Ratings from './Ratings';
import CategoryWiseRatings from './CategoryWiseRatings';
const InterviewRound = ({ stepName }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const userRatings= {
        finalScore : 2,
        skills :2,
        culturalFit : 2,
        propblemSolving : 2,
        communication : 2
    }
    return (
        <div className='InterviewRound'>
            <div className='heading'>
                <h2 className='headtext'>{stepName}</h2>
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
            </div>
            <div className=" feedbacDetails ">
                <FeedbackBox basis={'Feedback Given'} count={2} totalFeedbackCount={2} />
                <FeedbackBox basis={'Feedback Pending'} count={0} totalFeedbackCount={2} />
            </div>
            <div className='ratings'>
                <Ratings userRatings={userRatings}/>
            </div>
            <div className='CategoryWiseratings'>
                <CategoryWiseRatings userRatings={userRatings}/>
            </div>

        </div>
    )
}

export default InterviewRound