import AppFooter from "@/components/footer/app.footer";
import AppHeader from "@/components/header/app.header";
import MainSlider from "@/components/main/main.slider";
import { sendRequest } from "@/utils/api";
import { Category } from "@mui/icons-material";
import { AppBar, Container, Toolbar } from "@mui/material";

export default async function HomePage() {
  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({ //generic in generic
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "WORKOUT", limit: 10 }
  })

  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({ //generic in generic
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10 }
  })

  const parties = await sendRequest<IBackendRes<ITrackTop[]>>({ //generic in generic
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "PARTY", limit: 10 }
  })

  return (
    <Container>
      <MainSlider
        data={chills?.data ? chills.data : []}
        title="TOP CHILL"
      />
      <MainSlider
        data={workouts?.data ? workouts.data : []}
        title="TOP WORKOUT"
      />
      <MainSlider
        data={parties?.data ? parties.data : []}
        title="TOP PARTY"
      />
    </Container>
  );
}
