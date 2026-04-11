import { Container } from "@mui/material";
import ResponsiveAppBar from "./components/AppBar";
import ContentView from "./components/Content";
import { grey } from "@mui/material/colors";
function App() {
	return (
		<Container maxWidth={false} disableGutters sx={{ width: "100%", minHeight: "100vh" }}>
			<ResponsiveAppBar />
			<ContentView />
		</Container>
	);
}

export default App;
