import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepCountBox from "./Step";
import { styled } from "@mui/material";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {

    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
       backgroundColor :'#FFB200'
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         backgroundColor :'#FFB200'
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 1,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
  }));



const ApplicantProgress = ({steps,activeStep}) => {

  return (
    <div className="p-8 w-100 rounded-lg shadow-md ">
      <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>
        {steps.map((label, index) => (
          <Step key={index} >
            {/* <StepCountBox stepCount={index+1}/> */}
            <StepLabel className="stepLabel1" color={"#FFB200"}>
                <div className={ activeStep >= index  ? "status statusLabelCurrent" : "status"}>{label}</div>

            { activeStep >= index && <div className="completedText status">Completed <CheckCircleIcon style={{color:'#18AC00'}} fontSize="10"/></div>}

            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default ApplicantProgress;
