"use client";

import { Container, Typography, Box, TextField } from "@mui/material";
import EmailForm from "@/components/EmailForm";
import styles from "@/styles/Home.module.css";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

// Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function HomePage() {
  const [city, setCity] = useState("");

  const handleSubmit = async (email: string) => {
    const { error } = await supabase
      .from("quietlens_signups")
      .insert([{ email, city }]); // city captured here, not in EmailForm
    if (error) throw error;
  };

  return (
    <Container maxWidth="md" className={styles.container}>
      <Box textAlign="center" className={styles.hero}>
        <Typography variant="h3" fontWeight={700} gutterBottom sx={{ color: "#0d1b2a" }}>
          See the Sound of Your Neighborhood
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ maxWidth: 600, m: "0 auto" }}>
          QuietLens helps you understand when and where a neighborhood is truly peaceful —
          not just what it looks like on paper.
        </Typography>

        {/* City input stays here */}
        <Box display="flex" justifyContent="center" mb={2}>
          <TextField
            placeholder="Enter your city"
            size="small"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{ width: 250, backgroundColor: "white", borderRadius: "6px", boxShadow: "0 2px 6px rgba(0,0,0,0.08)" }}
          />
        </Box>

        {/* Email form now has no city prop */}
        <EmailForm onSubmit={handleSubmit} />

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontStyle: "italic" }}>
          We’ll let you know when QuietLens launches in your city.
        </Typography>
      </Box>

      <Box className={styles.section}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          The one thing listings never show
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
          You can check crime rates, school ratings, and commute times — but not peace and quiet.
          Every home looks good online, but only after moving do you find out about the 2 a.m.
          traffic or weekend bar noise. QuietLens helps you see that clearly — before you move in.
        </Typography>
      </Box>

      <Box className={styles.section}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          What QuietLens will do
        </Typography>
        <ul className={styles.list}>
          <li>Show when an area is calm — and when it isn’t.</li>
          <li>Help you plan for it — not avoid it.</li>
          <li>Give you objective information so you can make your own call.</li>
        </ul>
      </Box>

      <Box textAlign="center" mt={6} mb={3}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} QuietLens — Built for people who value peace.
        </Typography>
      </Box>
    </Container>
  );
}
