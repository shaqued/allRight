import React, { useState, useContext, useEffect } from 'react';
import useStyles from './license-plan-dialog.css';
import ContractSigning from './steps/contract-signing';
import LicenseSelection from './steps/license-selection';
import { Link } from "react-router-dom";
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
                return <LicenseSelection selectedPriceSection={selectedPriceSection} onSelect={setSelectedRange} />;
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
        userStore.AddToCart({
            ipId: ip._id,
            range: selectedRange
        }).then((res) => handleClose(res));
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleClose = (res) => {
        handleReset();
        onClose(res);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            {userStore.UserData ? 
            (<div className={classes.dialog}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={index} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
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
            </div>) : 
            (<div>
                <Typography variant="h2" className={classes.root} gutterBottom>
                    {"רוצים לבצע רכישה?"}
                </Typography>
                <Typography variant="h2" className={classes.root} gutterBottom>
                    {" התחברו או הירשמו בקליק"}
                </Typography>
                <Button
                    component={Link}
                    to="/signUp"
                    color="primary"
                    variant="contained"
                    className={classes.button}
                >
                    {"הצטרפו אלינו"}
                </Button>
                <Button
                    component={Link}
                    to="/signIn"
                    className={`${classes.darkText} ${classes.button}`}
                >
                    {"כניסת משתמשים"}
                </Button>
            </div>)}
        </Dialog>
    );
};
