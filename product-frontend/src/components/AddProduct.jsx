import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Button, Stack } from "@mui/material";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products/create", {
      title: title,
      price: price,
    });
    navigate.push("/");
  };

  return (
    <Stack spacing={2} direction="row" sx={{ m: 2 }}>
      <TextField
        required
        id="outlined-required"
        label="Title"
        helperText="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="outlined-number"
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={saveProduct}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default AddProduct;
