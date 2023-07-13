import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const useStyles = makeStyles({
  paper: {
    background: 'white',
    color: 'black'
  },
});

const Sidebar = () => {
  const [listOne, setListOne] = useState(false);
  const [listTwo, setListTwo] = useState(false);
  const [listThree, setListThree] = useState(false);
  const [listFour, setListFour] = useState(false);
  const [listFive, setListFive] = useState(false);
  const [listSix, setListSix] = useState(false);
  const [listSeven, setListSeven] = useState(false);
  const [listEight, setListEight] = useState(false);

  const setListFunc=(functionName)=>{
    setListOne(false);
    setListTwo(false);
    setListThree(false);
    setListFour(false);
    setListFive(false);
    setListSix(false);
    setListSeven(false);
    setListEight(false);
    setTimeout(() => {
      functionName(true);
    }, 500);}

  const styles = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 400}}
      role="hamburger"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul className=" px-10 flex flex-col gap-3 mt-20">
        <li>
          <button
            onClick={() => setListFunc(setListOne)}
            className="px-2 relative hover:bg-[#fcf1e7] active:[#fcf1e7] "
          >
            <span className=" font-semibold">
              About
              <AnimatePresence>
                {listOne && (
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: "1" }}
                    className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                  ></motion.p>
                )}
              </AnimatePresence>
            </span>
          </button>
        </li>

        <li>
          <button
            onClick={() => setListFunc(setListTwo)}
            className="px-2 relative hover:bg-[#fcf1e7] active:[#fcf1e7] "
          >
            <span className=" font-semibold">
              Services{" "}
              <AnimatePresence>
                {listTwo && (
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: "1" }}
                    className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                  ></motion.p>
                )}
              </AnimatePresence>
            </span>
          </button>
        </li>

        <li>
          <button
            onClick={() => setListFunc(setListThree)}
            className="px-2 relative hover:bg-[#fcf1e7] active:[#fcf1e7] "
          >
            <span className=" font-semibold">
              Skills{" "}
              <AnimatePresence>
                {listThree && (
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: "1" }}
                    className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                  ></motion.p>
                )}
              </AnimatePresence>
            </span>
          </button>
        </li>

        <li>
          <button
            onClick={() => setListFunc(setListFour)}
            className="px-2 relative hover:bg-[#fcf1e7] active:[#fcf1e7] "
          >
            <span className=" font-semibold">
              Resume{" "}
              <AnimatePresence>
                {listFour && (
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: "1" }}
                    className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                  ></motion.p>
                )}
              </AnimatePresence>
            </span>
          </button>
        </li>

        <li>
          <button
            onClick={() => setListFunc(setListFive)}
            className="px-2 relative hover:bg-[#fcf1e7] active:[#fcf1e7] "
          >
            <span className=" font-semibold">
              Portfolio{" "}
              <AnimatePresence>
                {listFive && (
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: "1" }}
                    className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                  ></motion.p>
                )}
              </AnimatePresence>
            </span>
          </button>
        </li>

        <li>
          <button
            onClick={() => setListFunc(setListSix)}
            className="px-2 relative hover:bg-[#fcf1e7] active:[#fcf1e7] "
          >
            <span className=" font-semibold">
              Testimonials{" "}
              <AnimatePresence>
                {listSix && (
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: "1" }}
                    className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                  ></motion.p>
                )}
              </AnimatePresence>
            </span>
          </button>
        </li>

        <li>
          <button
            onClick={() => setListFunc(setListSeven)}
            className="px-2 relative hover:bg-[#fcf1e7] active:[#fcf1e7] "
          >
            <span className=" font-semibold">
              Weapons{" "}
              <AnimatePresence>
                {listSeven && (
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: "1" }}
                    className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                  ></motion.p>
                )}
              </AnimatePresence>
            </span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setListFunc(setListEight)}
            className="px-2 relative hover:bg-[#fcf1e7] active:[#fcf1e7] "
          >
            <span className=" font-semibold">
              Contact{" "}
              <AnimatePresence>
                {listEight && (
                  <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: "1" }}
                    className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                  ></motion.p>
                )}
              </AnimatePresence>
            </span>
          </button>
        </li>
      </ul>
     
    </Box>
  );

  return (
    
      <>
        <button
          className="m-0 p-0 right-[50px] border-none "
          onClick={toggleDrawer("right", true)}
        >
          <span className="hamburger">
            <span className="top-bun"></span>
            <span className="meat"></span>
            <span className="bottom-bun"></span>
          </span>
        </button>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          classes={{ paper: styles.paper }}
        >
          {list("right")}
        </Drawer>
      </>
    
  );
};
export default Sidebar;
