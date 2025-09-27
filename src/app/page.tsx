import AppFooter from "@/components/footer/app.footer";
import AppHeader from "@/components/header/app.header";
import MainSlider from "@/components/main/main.slider";
import { Category } from "@mui/icons-material";
import { AppBar, Container, Toolbar } from "@mui/material";

export default function HomePage() {
  const res = fetch("http://localhost:8000/api/v1/tracks/top", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      category: "WORKOUT",
      limit: 10
    })  //because fetch only understands string type, not object type
  })
  return (
    <Container>
      <MainSlider />
      <MainSlider />
      <MainSlider />
    </Container>
  );
}
