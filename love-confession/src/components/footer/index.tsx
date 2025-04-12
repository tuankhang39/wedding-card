import { Box, Container, Typography, Link, Stack } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { SiTiktok, SiZalo } from "react-icons/si";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 3 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            className="text-[11px]"
          >
            © {new Date().getFullYear()} TKhang Wedding Card. All rights
            reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link
              href="https://zalo.me/0976553787"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="text.primary"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <SiZalo size={20} /> Zalo
            </Link>

            <Link
              href="https://www.tiktok.com/@thiepcuoibykhang"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="text.primary"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <SiTiktok size={18} /> TikTok
            </Link>
            <Link
              href="tel:0976553787"
              underline="none"
              color="text.primary"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <FaPhoneAlt size={18} /> 0901 234 567
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
