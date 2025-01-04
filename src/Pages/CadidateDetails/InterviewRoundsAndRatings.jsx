import React, { useState } from 'react'
import ApplicantProgress from '../../Components/ApplicantProgress'
import InterviewRound from './InterviewRound';
import { Button } from '@mui/material';

const InterviewRoundsAndRatings = () => {
      const steps = ["Interview Round 1", "Interview Round 2", "Interview Round 3", "HR Round"];
      const [activeStep, setActiveStep] = useState(1);
  return (
    <div>
        <ApplicantProgress steps={steps} activeStep={activeStep}/>
        <InterviewRound stepName={steps[0]}/>
        <div className="actions">
            <Button >Back</Button>
            <Button variant='contained'> Submit</Button> 
        </div>
    </div>
  )
}

export default InterviewRoundsAndRatings