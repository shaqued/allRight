import React, { useContext } from "react";
import useStyles from "./license-plan-dialog.css";
import ContractSigning from "./steps/contract-signing";
import LicenseSelection from "./steps/license-selection";
import { UserStoreContext } from "stores/UserStore/UserStoreProvider";
import {
  Dialog,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button
} from "@material-ui/core";
import { Link } from 'react-router-dom';

export default ({ onClose, open, ip, selectedPriceSection }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["בחירת רישיון", "חתימת חוזה שימוש", "הוספה לסל"];

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <LicenseSelection selectedPriceSection={selectedPriceSection} />;
      case 1:
        return <ContractSigning ip={ip} />;
      case 2:
        return <div></div>;
      default:
        return <div />;
    }
  };

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

  const userStore = useContext(UserStoreContext);

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      {userStore.UserData ? (
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
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  הוספה לסל התסיימה בהצלחה
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  איפוס
                </Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    חזור
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "סיום" : "הבא"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <Typography variant={"h2"} className={classes.root} gutterBottom>
            {"רוצים לבצע רכישה?"}
          </Typography>
          <Typography variant={"h2"} className={classes.root} gutterBottom>
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
            className={`${classes.darkText} 
        ${classes.button}`}
          >
            {"כניסת משתמשים"}
          </Button>
        </div>
      )}
    </Dialog>
  );
};
