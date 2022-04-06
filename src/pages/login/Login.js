import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Stack
        component="form"
        sx={{
          width: "25ch",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="USERNAME"
          variant="filled"
          size="small"
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          placeholder="PASSWORD"
          variant="filled"
          type="password"
        />
        <Button variant="contained">LOGIN</Button>
      </Stack>
    </div>
  );
}