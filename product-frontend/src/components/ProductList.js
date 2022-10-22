import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableHead,
  Button,
  Stack,
} from "@mui/material";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(`http://localhost:5000/products`);
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    getProducts();
  };

  return (
    <TableContainer>
      <Button
        variant="contained"
        color="info"
        href="/add"
        className="button is-primary mt-2"
      >
        Add New
      </Button>
      <Table className="table is-striped is-fullwidth">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="centre">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Stack spacing={1} direction="row" alignContent="centre">
                  <Button
                    variant="contained"
                    href={`/edit/${product.id}`}
                    className="button is-small is-info"
                    color="secondary"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                    className="button is-small is-danger"
                  >
                    Delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
