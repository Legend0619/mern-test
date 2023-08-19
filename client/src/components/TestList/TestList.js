import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getAllTests } from "../../actions/test";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Container,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TestItem from "./TestItem";

import { styles } from "./styles";

const TestList = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const { tests } = useSelector((state) => state.test);

  useEffect(() => {
    dispatch(getAllTests());
  }, []);

  return (
    <Container maxWidth="md">
      <Button
        variant="contained"
        onClick={() => {
          history("/add");
        }}
      >
        Add Test
      </Button>
      <Button
        sx={styles.button}
        variant="contained"
        onClick={() => {
          history("/profile");
        }}
      >
        Profile
      </Button>
      <h1>Test List</h1>
      {tests.map((test, idx) => (
        <Accordion key={`test_${idx}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>{test.description}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TestItem test={test} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default TestList;
