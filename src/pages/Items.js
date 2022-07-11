import {
  // Button,
  Card,
  CardContent,
  // Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Generation from "../layouts/Generation";
import { CountDigits } from "../Helper";
// import { useParams, useNavigate } from "react-router-dom";
// import LastPageIcon from "@mui/icons-material/LastPage";

const Items = () => {
  // let range = useParams();
  // const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItemList = async () => {
    let itemArray = [];
    for (let i = 1; i <= 666; i++) {
      itemArray.push(await getItemData(i));
      console.log(itemArray);
    }
    setItems(itemArray);
    setLoading(false);
  };

  const getItemData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/item/${id}`);
    return res;
  };

  // const incrementRange = () => {
  //   range = parseInt(range.range) + 100;
  //   navigate(`../items/${range}`);
  //   setItems([]);
  //   setLoading(true);
  //   getItemList();
  // };

  useEffect(() => {
    getItemList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading isLoading={loading} message="Items" />
      ) : (
        <>
          <Generation generation="All Items" />
          <Card sx={{ mt: 4, mb: 4, ml: 15, mr: 15 }}>
            <CardContent>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Icon</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Effect</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.data.name}>
                        <TableCell>{CountDigits(item.data.id)}</TableCell>
                        <TableCell>
                          <img
                            alt={item.data.name}
                            src={item.data.sprites.default}
                          ></img>
                        </TableCell>
                        <TableCell>{item.data.name}</TableCell>
                        <TableCell>
                          {item.data.effect_entries[0].effect}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          {/* <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              endIcon={<LastPageIcon />}
              // onClick={incrementRange}
              sx={{ mb: 4 }}
            >
              Load More
            </Button>
          </Grid> */}
        </>
      )}
    </>
  );
};

export default Items;
