import AppFooter from "@/components/footer/app.footer";
import AppHeader from "@/components/header/app.header";
import MainSlider from "@/components/main/main.slider";
import { sendRequest } from "@/utils/api";
import { Category } from "@mui/icons-material";
import { AppBar, Container, Toolbar } from "@mui/material";

export default async function HomePage() {
  const res = await sendRequest<IBackendRes<ITrackTop[]>>({ //generic in generic
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "WORKOUT", limit: 1 }
  })
  console.log("check res server: ", res.data)
  return (
    <Container>
      <MainSlider />
      <MainSlider />
      <MainSlider />
    </Container>
  );
}
