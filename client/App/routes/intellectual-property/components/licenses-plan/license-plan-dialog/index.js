import React from 'react';
import useStyles from './license-plan-dialog.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import LicenseSelection from './steps/license-selection';
import { Dialog, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Checkbox } from '@material-ui/core';

export default ({ onClose, open, priceRange }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ["בחירת רישיון", "חתימת חוזה שימוש", "הוספה לסל"];

    const getStepContent = stepIndex => {
        switch (stepIndex) {
            case 0:
                return <LicenseSelection priceRange={priceRange} />;
            case 1:
                return <div></div>;
            case 2:
                return <div></div>;
            default:
                return <div />;
        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleClose = () => {
        handleReset();
        onClose();
    };

    return (
        <Dialog className={classes.dialog} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
              </Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
              </Button>
                        </div>
                    ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                        חזור
                </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'סיום' : 'הבא'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </Dialog>
    );
}