import { Container } from "@mui/material";
import ResponsiveAppBar from "./components/AppBar";
import ContentView from "./components/Content";
import ToTopBtn from "./components/ToTopBtn";

function App() {
	return (
		<Container maxWidth={false} disableGutters sx={{ width: "100%", minHeight: "100vh" }}>
			<ResponsiveAppBar />
			<ContentView />
			<ToTopBtn/>
		</Container>
	);
}

export default App;
