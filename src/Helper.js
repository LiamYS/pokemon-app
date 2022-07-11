import { Typography } from "@mui/material";

export function CountDigits(number, variant) {
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
