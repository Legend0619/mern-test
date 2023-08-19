import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Grid,
  Avatar,
  Card,
  CardMedia,
} from "@mui/material";

import { takeTest } from "../../actions/test";

import { styles } from "./styles";

const TestItem = ({ test }) => {
  const [right, setRight] = useState(0);

  const handleSubmit = () => {
    takeTest({
      testId: test._id,
      right: right,
    });
  };

  const handleChangeRight = (event) => {
    setRight(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        {test.image && (
          <Card>
            <CardMedia
              component="img"
              image={`http://127.0.0.1:5000/uploads/${test.image}`}
              alt="Live from space album cover"
            />
          </Card>
        )}
      </Grid>
      <Grid item xs={7}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Choose right one
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={right}
            name="radio-buttons-group"
            onChange={handleChangeRight}
          >
            {test.answers.map((ans, index) => (
              <FormControlLabel
                key={`ans_${index}`}
                value={index}
                control={<Radio />}
                label={ans}
              />
            ))}
          </RadioGroup>
          <Button
            type="submit"
            variant="contained"
            sx={styles.button}
            onClick={handleSubmit}
          >
            Submit Test
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default TestItem;
