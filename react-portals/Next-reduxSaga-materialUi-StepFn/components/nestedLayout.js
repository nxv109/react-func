import Link from 'next/link';
import React, { useEffect, useState, cloneElement } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function getSteps() {
  return [
    { name: '1', url: '/register' },
    { name: '2', url: '/register/step1' },
    { name: '3', url: '/register/step2' },
  ];
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function NestedLayout({ children }) {
  const router = useRouter();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [urlStep, setUrlStep] = useState('/register');
  const [phoneNum, setPhoneNum] = useState(123);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    setUrlStep(router.pathname);
  }, [router.pathname])

  useEffect(() => {
    function autoMapStepToUrl(pathUrl) {
      switch (pathUrl) {
        case '/register':
          console.log('register')
          setActiveStep(0)
          return;
        case '/register/step1':
          console.log('register/step1')
          setActiveStep(1)
          return;
        case '/register/step2':
          console.log('register/step2')
          setActiveStep(2)
          return;
        default:
          return '/register';
      }
    }

    autoMapStepToUrl(urlStep)

  }, [urlStep])

  const handlePhoneNum = (num) => {
    setPhoneNum(num);
  }

  const propOptions = {
    handlePhoneNum,
    phoneNum
  }

  return (
    <>
      <h1>NestedLayout</h1>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label.name}>
              <StepLabel>{label.name}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>{cloneElement(children, propOptions)}</div>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}></Typography>
              <div style={{ marginTop: '3rem' }}>
                {steps.map((val, index) => (
                  <div key={val.name}>
                    {index === activeStep ? (
                      <>
                        {activeStep !== 0 ? (
                          <Link
                            href={
                              activeStep < steps.length
                                ? steps[activeStep - 1].url
                                : '/register'
                            }
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleBack}
                            >
                              Back
                            </Button>
                          </Link>
                        ) : null}
                        <Link
                          href={
                            activeStep + 1 >= steps.length
                              ? '/register'
                              : steps[activeStep + 1].url
                          }
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                          >
                            Next
                          </Button>
                        </Link>
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
