import * as React from "react";
import TextField from "@mui/material/TextField";

export default function Input(props) {
  return (
    <TextField
      id={props.id}
      label={props.label}
      variant={props.variant}
      fullWidth
      onChange={props.onChange}
      name={props.name}
      type={props.type}
      style={props.style}
      value={props.value}
      InputLabelProps={{ style: { color: "#574143" } }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "rgba(191, 165, 167, 1)", 
          },
          "&:hover fieldset": {
            borderColor: "rgba(191, 165, 167, 1)", 
          },
          "&.Mui-focused fieldset": {
            borderColor: "rgba(191, 165, 167, 1)", 
          },
          "& input[type=number]::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& input[type=number]::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
        },
      }}
    />
  );
}
