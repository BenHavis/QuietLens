// HomePage.tsx
"use client";

import { Container, Typography, Box, TextField, Button } from "@mui/material";
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
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

 const handleSubmit = async () => {
  try {
    setLoading(true);
    setError("");
    const { error } = await supabase
      .from("quietlens_signups")
      .insert([{ email, city }]);
    if (error) throw error;
    setSubmitted(true);
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className={styles.pageWrapper}>
      <Container maxWidth="md" className={styles.container}>
        <Box textAlign="center" className={styles.hero}>
          <Typography  component="h1"     // semantic element for SEO
  variant="h3"   fontWeight={700} gutterBottom className={styles.heroTitle}>
            See the Sound of Your Neighborhood
          </Typography>
        <p className={styles.heroSubtitle}>
        QuietLens helps you understand when and where a neighborhood is truly peaceful —
          not just what it looks like on paper.
        </p>



          {/* City input */}
          <Box display="flex" justifyContent="center" mb={2} className={styles.cityInput}>
            <TextField
              placeholder="Enter your city"
              size="small"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Box>

          {/* Email form */}
<EmailForm onEmailChange={setEmail} />

                {/* Notify button */}
          {!submitted ? (
            <Button
              variant="contained"
              sx={{ mt: 2, px: 4, borderRadius: "8px" }}
              onClick={handleSubmit}
              disabled={!email || !city || loading}
            >
              {loading ? "Submitting..." : "Notify Me"}
            </Button>
          ) : (
            <Typography color="success.main" sx={{ mt: 2 }}>
              Thanks! You’re on the list.
            </Typography>
          )}

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontStyle: "italic" }}>
            We'll let you know when QuietLens launches in your city.
          </Typography>
        </Box>

        <Box className={styles.section}>
          <Typography  className={styles.sectionTitle} variant="h5" fontWeight={600} gutterBottom>
            The one thing listings never show
          </Typography>
          <Typography color="text.secondary" className={styles.sectionText}>
            You can check crime rates, school ratings, and commute times — but not peace and quiet. Every home looks good online, but only after moving do you find out about the 2 a.m. traffic or weekend bar noise. QuietLens helps you see that clearly — before you move in.
          </Typography>
        </Box>

        <Box className={styles.section}>
  <Typography variant="h5" fontWeight={700} gutterBottom className={styles.sectionTitle}>
    What QuietLens will do
  </Typography>
  <ul className={styles.featureList}>
    <li>
      <span>🌙</span> Show when an area is calm — and when it isn't.
    </li>
    <li>
      <span>📅</span> Help you plan for it — not avoid it.
    </li>
    <li>
      <span>🧭</span> Give you objective information so you can make your own call.
    </li>
  </ul>
</Box>


        <Box textAlign="center" mt={6} mb={3}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} QuietLens — Built for people who value peace.
          </Typography>
        </Box>
      </Container>

      {/* Animated background */}
      <div className={styles.backgroundAnimation}></div>
    </div>
  );
}