import React from "react";
//import { Helmet } from "react-helmet";
import Button from "@mui/material/Button";
import { BsPauseFill } from "react-icons/bs";
//import PauseIcon from '@mui/icons-material/Pause';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
//import Typography from "@mui/material/Typography";
//import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
//import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Label from "./Label";
import Typing from "./Typing";
import { motion } from "framer-motion";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const TestimonialDetail = () => {
  const images = [
    {
      id: 1,
      name: "Ryhan",
      Company: "Instragram",
      imgPath:
        "https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/testi-author.png",
    },
    {
      id: 2,
      name: "Hasibur",
      Company: "Pinterest",
      imgPath:
        "https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/testi-author.png",
    },
    {
      id: 3,
      name: "Ryhan",
      Company: "Instragram",
      imgPath:
        "https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/testi-author.png",
    },
    {
      id: 4,
      name: "Hasibur",
      Company: "Pinterest",
      imgPath:
        "https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/testi-author.png",
    },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="basis-1/3 mb-20 pb-10">
      <Label mytext={"testimonial"} />
      <motion.p
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-3xl font-medium mb-5"
      >
        What My Happy
        <Typing typedText={" Clients "} />
        Saying Their Services.
      </motion.p>
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: false }}
      >
        <p className=" mb-5">
          Really they guy is amazing , he saved my times and properly have
          completed my requirement with great effort. I appreciate to him for
          web &amp; app design, he is good at fit.
        </p>
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <div className=" flex justify-start items-center">
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              className=" basis-1/4"
            >
              {images.map((step, index) => (
                <div key={step.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 50,
                        display: "block",
                        maxWidth: 50,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.name}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <Paper
              square
              elevation={0}
              sx={{
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
              className="basis-3/4 flex flex-col items-start"
            >
              <p className=" block">{images[activeStep].name}</p>
              <p className=" block">
                CEO of{" "}
                <span className="text-[#df5646]">
                  {images[activeStep].Company}
                </span>
              </p>
            </Paper>
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
              className="bg-[#df5646] border-2 rounded-3xl shadow-lg"
            >
              <Button className="w-16 h-16 ">
                <BsPauseFill size={"3rem"} color="white" />
              </Button>
            </motion.div>
          </div>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className=" my-3"
          />
        </Box>
      </motion.div>
    </div>
  );
};

export default TestimonialDetail;
