export const metadata = {
  title: "QuietLens – See the sound of your neighborhood",
  description:
    "QuietLens helps you understand when and where a neighborhood is truly peaceful — before you move in.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
