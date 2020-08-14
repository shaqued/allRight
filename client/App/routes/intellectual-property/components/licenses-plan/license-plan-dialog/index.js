import React, { useState, useContext, useEffect } from 'react';
import useStyles from './license-plan-dialog.css';
import ContractSigning from './steps/contract-signing';
import LicenseSelection from './steps/license-selection';
import { Dialog, Stepper, Step, StepLabel, Typography, Button } from '@material-ui/core';
import { UserStoreContext } from 'stores/UserStore/UserStoreProvider';

export default ({ onClose, open, ip, selectedPriceSection }) => {
    const classes = useStyles(),
        [activeStep, setActiveStep] = useState(0),
        [selectedRange, setSelectedRange] = useState({}),
        steps = ["בחירת רישיון", "חתימת חוזה שימוש", "הוספה לסל"],
        userStore = useContext(UserStoreContext);

    const getStepContent = stepIndex => {
        switch (stepIndex) {
            case 0:
                return <LicenseSelection selectedPriceSection={selectedPriceSection} onSelect={setSelectedRange}/>;
            case 1:
                return <ContractSigning ip={ip} />;
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

    const handleFinish = async () => {
        const cb = await userStore.AddToCart ({
            ipId: ip._id,
            range: selectedRange
        });

        handleClose(cb);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleClose = () => {
        handleReset();
        onClose();
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <div className={classes.dialog}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => {
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
                    {/* {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                הקניה שלך התווספה לעגלת הקניות!
                            </Typography>
                            <Button onClick={handleReset} 
                                    className={classes.button}>
                                איפוס
                            </Button>
                        </div>
                    ) : ( */}
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button disabled={activeStep === 0} 
                                            onClick={handleBack} 
                                            className={classes.button}>
                                        חזור
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
                                        className={classes.button}>
                                        {activeStep === steps.length - 1 ? 'סיום' : 'הבא'}
                                    </Button>
                                </div>
                            </div>
                        {/* )} */}
                </div>
            </div>
        </Dialog>
    );
}