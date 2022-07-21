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
import { countDigits, checkItemName } from "../Helper";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SubHeader from "../layouts/SubHeader";

const Items = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/item?limit=100");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getItem = async (url) => {
    let response = await axios.get(url);
    return response;
  };

  const getItemList = async () => {
    let response = await axios.get(url);
    let itemArray = [];

    setLoading(true);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);

    for (const item of response.data.results) {
      let itemData = await getItem(item.url);
      itemArray.push(itemData);
    }

    setItems(itemArray);
    setLoading(false);
  };

  useEffect(() => {
    getItemList();
    // eslint-disable-next-line
  }, [url]);

  return (
    <>
      {loading ? (
        <Loading isLoading={loading} message="Items" />
      ) : (
        <>
          <SubHeader
            title="Items"
            description="Items are another staple of the Pokémon franchise. They are objects to be collected and used for specific purposes, including progressing through the game's storyline, Pokémon capture, healing your Pokémon, helping Pokémon in battle, improving their stats and even evolving Pokémon."
          />
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
                        <TableCell>{countDigits(item.data.id)}</TableCell>
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
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {prevUrl && (
              <Button
                variant="outlined"
                startIcon={<ArrowBack />}
                sx={{ mb: 4 }}
                onClick={() => {
                  setUrl(prevUrl);
                }}
              >
                Previous Page
              </Button>
            )}
            {nextUrl && (
              <Button
                variant="outlined"
                endIcon={<ArrowForward />}
                sx={{ mb: 4, ml: 2 }}
                onClick={() => {
                  setUrl(nextUrl);
                }}
              >
                Next Page
              </Button>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default Items;
