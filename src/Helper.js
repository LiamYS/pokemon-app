import { Typography } from "@mui/material";

export function countDigits(number, variant) {
  if (variant === undefined) {
    switch (number.toString().length) {
      case 1:
        return <Typography>#00{number}</Typography>;
      case 2:
        return <Typography>#0{number}</Typography>;
      case 3:
        return <Typography>#{number}</Typography>;
      default:
        return <Typography>#{number}</Typography>;
    }
  } else {
    switch (number.toString().length) {
      case 1:
        return <Typography variant="h6">#00{number}</Typography>;
      case 2:
        return <Typography variant="h6">#0{number}</Typography>;
      case 3:
        return <Typography variant="h6">#{number}</Typography>;
      default:
        return <Typography variant="h6">#{number}</Typography>;
    }
  }
}

export const checkItemName = (item) => {
  if (item.data.names[7] === undefined) {
    return item.data.name;
  } else {
    return item.data.names[7].name;
  }
};

export const checkItemDesc = (item) => {
  if (item.data.effect_entries[0] === undefined) {
    return "No description available from API";
  } else {
    return item.data.effect_entries[0].effect;
  }
};
