import {
  Card,
  CardContent,
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

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItemList = async () => {
    let itemArray = [];
    for (let i = 1; i <= 200; i++) {
      itemArray.push(await getItemData(i));
    }
    setItems(itemArray);
    setLoading(false);
  };

  const getItemData = async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/item/${id}`);
    return res;
  };

  useEffect(() => {
    getItemList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <>
          <Generation generation="All Items" />
          <Card sx={{ m: 4 }}>
            <CardContent>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Item name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.data.name}>
                        <TableCell>
                          {item.data.name.replace("-", " ")}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
};

export default Items;
