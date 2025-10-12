"use client";

import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

type Props = { onSubmit: (email: string) => Promise<void> };

export default function EmailForm({ onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await onSubmit(email);
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Typography color="success.main" sx={{ mt: 2 }}>
        Thanks! You’re on the list.
      </Typography>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      gap={1}
      flexWrap="wrap"
      sx={{ mt: 2 }}
    >
      <TextField
        type="email"
        placeholder="Enter your email"
        size="small"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ width: 250, backgroundColor: "white", borderRadius: "6px" }}
      />
      <Button variant="contained" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Notify Me"}
      </Button>
      {error && (
        <Typography color="error" sx={{ mt: 1, textAlign: "center", width: "100%" }}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
