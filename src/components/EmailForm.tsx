"use client";

import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  onEmailChange: (email: string) => void;
  error?: string;
};

export default function EmailForm({ onEmailChange, error }: Props) {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    onEmailChange(value);
  };

  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
      <TextField
        type="email"
        placeholder="Enter your email"
        size="small"
        required
        value={email}
        onChange={handleChange}
        sx={{
          width: 260,
          backgroundColor: "white",
          borderRadius: "6px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
        }}
      />
      {error && (
        <Typography color="error" sx={{ mt: 1, textAlign: "center", width: "100%" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
