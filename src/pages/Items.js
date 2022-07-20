import {
  Button,
  Card,
  CardContent,
  Container,
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
import { Refresh } from "@mui/icons-material";

const Items = () => {
  const description =
    "Items are another staple of the Pokémon franchise. They are objects to be collected and used for specific purposes, including progressing through the game's storyline, Pokémon capture, healing your Pokémon, helping Pokémon in battle, improving their stats and even evolving Pokémon.";
  const initialItems = 50;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(initialItems);
  const [maxItems, setMaxItems] = useState(false);

  const getItemData = async () => {
    let response = await axios.get(
      `https://pokeapi.co/api/v2/item?limit=${next}`
    );
    return response;
  };

  const getItem = async (url) => {
    let response = await axios.get(url);
    return response;
  };

  const getItemList = async () => {
    let data = await getItemData();
    let itemArray = [];

    for (const item of data.data.results) {
      let itemData = await getItem(item.url);
      itemArray.push(itemData);
    }
    setItems(itemArray);
    setLoading(false);
  };

  const handleMoreItems = () => {
    const maxItemsAvailable = 666;
    if (next >= maxItemsAvailable - initialItems) {
      setNext(next + (maxItemsAvailable - next));
      setMaxItems(true);
    }
    setNext(next + initialItems);
  };

  const checkItemName = (item) => {
    if (item.data.names[7] === undefined) {
      return item.data.name;
    } else {
      return item.data.names[7].name;
    }
  };

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
          <Generation generation="All Items" description={description} />
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
                        <TableCell>{checkItemName(item)}</TableCell>
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
          {!maxItems && (
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="outlined"
                endIcon={<Refresh />}
                sx={{ mb: 4 }}
                onClick={() => {
                  setLoading(true);
                  handleMoreItems();
                  getItemList();
                }}
              >
                Load More
              </Button>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default Items;
