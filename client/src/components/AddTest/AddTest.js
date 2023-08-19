import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";

//Design Elements
import {
  TextField,
  Container,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Radio,
  Button,
  Typography,
} from "@mui/material";

// Actions
import { addTest } from "../../actions/test";

//Stylesheet
import { styles } from "./styles";

const AddTest = () => {
  const user = localStorage.getItem("profile")
    ? decode(JSON.parse(localStorage.getItem("profile")).token)
    : "null";

  const [description, setDescription] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [right, setRight] = useState(0);
  const [image, setImage] = useState(null);

  const history = useNavigate();

  const handleChangeDesciption = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeAnswer = (index, e) => {
    const temp = answers.map((item) => item);
    temp[index] = e.target.value;
    console.log(temp);
    setAnswers(temp);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
    }
  };

  const handleChangeRight = (e) => {
    setRight(e.target.value);
  };

  const handleSubmit = (e) => {
    //Prevent Page Refresh
    e.preventDefault();
    console.log(answers);

    let formData = new FormData();
    formData.append("description", description);
    formData.append("answers", answers);
    formData.append("right", right);

    if (image) {
      formData.append("image", image);
    }

    console.log(formData);

    addTest(formData, history);
  };

  return (
    <div>
      <Container maxWidth="md">
        <h1>Add Test</h1>
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden onChange={handleImageChange} />
        </Button>
        <Typography sx={styles.image}>{image && image.name}</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={styles.textField}
            fullWidth
            required
            label="description"
            value={description}
            onChange={handleChangeDesciption}
          />
          <TextField
            sx={styles.textField}
            fullWidth
            required
            label="answer1"
            value={answers[0]}
            onChange={handleChangeAnswer.bind(this, 0)}
          />
          <TextField
            sx={styles.textField}
            fullWidth
            required
            label="answer2"
            value={answers[1]}
            onChange={handleChangeAnswer.bind(this, 1)}
          />
          <TextField
            sx={styles.textField}
            fullWidth
            required
            label="answer3"
            value={answers[2]}
            onChange={handleChangeAnswer.bind(this, 2)}
          />
          <TextField
            sx={styles.textField}
            fullWidth
            required
            label="answer4"
            value={answers[3]}
            onChange={handleChangeAnswer.bind(this, 3)}
          />

          <FormControl>
            <FormLabel>Right Answer</FormLabel>
            <RadioGroup row onChange={handleChangeRight} value={right}>
              <FormControlLabel value={0} control={<Radio />} label="1" />
              <FormControlLabel value={1} control={<Radio />} label="2" />
              <FormControlLabel value={2} control={<Radio />} label="3" />
              <FormControlLabel value={3} control={<Radio />} label="4" />
            </RadioGroup>
          </FormControl>

          <Button type="submit" variant="contained" sx={styles.button}>
            Add Test
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddTest;
