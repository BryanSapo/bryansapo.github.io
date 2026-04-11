import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

function ContentView() {
	const sections = ["About ME", "Work Experience", "Projects", "Education"];
	const sectionList: Record<string, string> = {
		"About ME": "#about_me",
		"Work Experience": "#work_experience",
		Projects: "#project",
		Education: "#education",
	};
	return (
		<Container
			maxWidth={false}
			disableGutters
			sx={{ backgroundColor: grey[700], paddingLeft: "10px", paddingRight: "10px", color: "white" }}
		>
			{sections.map((section) => (
				<>
					<Typography variant="h1" gutterBottom>
						{section}
					</Typography>
					<Typography variant="body1" gutterBottom>
						This is body1
					</Typography>
				</>
			))}
			<Typography variant="h1" gutterBottom>
				This is H1
			</Typography>
			<Typography variant="body1" gutterBottom>
				This is body1
			</Typography>
		</Container>
	);
}

export default ContentView;
