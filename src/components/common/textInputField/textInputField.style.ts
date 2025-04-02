"use client";

import { Typography, TextField, styled } from "@mui/material";

export const CharacterCountTypography = styled(Typography, {
  shouldForwardProp: (props: PropertyKey) => props !== "multiline",
})<{ multiline: boolean }>(({ multiline }) => {
  if (multiline) {
    return {
      position: "absolute",
      bottom: 10,
      right: 10,
    };
  }

  return {};
});


export const StyledTextField = styled(TextField)(({ theme }) => {
  return {
    backgroundColor: "transparent",
    label: {
      zIndex: 0,
    },

    // ".MuiInputBase-input:-webkit-autofill": {
    //   WebkitBoxShadow:
    //     theme.palette.mode === "dark"
    //       ? `0 0 0 30px #111827 inset`
    //       : `0 0 0 30px #fff inset`,
    //   WebkitTextFillColor: theme.palette.text.primary,
    //   caretColor: theme.palette.text.primary,
    //   borderRadius: "inherit",
    // },
    ".MuiInputBase-input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 30px transparent inset !important",
      transition: "background-color 5000s ease-in-out 0s",
      WebkitTextFillColor: theme.palette.text.primary,
      caretColor: theme.palette.text.primary,
      borderRadius: "inherit",
    },

    // Make the input field background transparent as well
    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
    },
  };
});
