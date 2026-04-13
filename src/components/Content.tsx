import React from 'react';
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

function ContentView() {
	const sections = ["About ME", "Work Experience", "Projects", "Education"];
	const sectionContent: Record<string, string> = {
		"About ME": `
    <p>
      I am a software engineer with a strong focus on AI systems, backend engineering,
      and security-related applications. His experience spans across enterprise AI platforms,
      blockchain systems, and LLM-based tools, with hands-on involvement in both research and
      production environments.
    </p>
    <p>
      He is particularly interested in efficient AI model deployment (e.g., LoRA / PEFT),
      smart contract security, and real-world AI system integration. Bryan has experience
      designing end-to-end systems, including telemetry pipelines, AI evaluation workflows,
      and developer productivity tools.
    </p>
    <p>
      With a solid foundation in Python, backend frameworks, and modern AI tooling, he aims
      to build scalable and practical systems that bridge research and real-world applications.
    </p>
  `,

		"Work Experience": `
    <div>
      <h3>AI Developer Intern — Microsoft (via BeyondSoft)</h3>
      <p><em>Jan 2026 – Jun 2026</em></p>
      <ul>
        <li>
          Designed and implemented telemetry pipelines for an enterprise AI web system,
          enabling real-time monitoring across Dev, Staging, and Production environments
        </li>
        <li>
          Built Hot Topic classification pipeline and AI evaluation pipeline for model
          performance analysis
        </li>
        <li>
          Gained hands-on experience with Azure cloud deployment and CI/CD workflows
        </li>
      </ul>
    </div>

    <div>
      <h3>Software Engineer Intern — CancerFree Biotech</h3>
      <p><em>Jun 2025 – Nov 2025</em></p>
      <ul>
        <li>
          Implemented Sparse Merkle Tree in Solana smart contracts for the Qualcomm Innovate
          in Taiwan Challenge (QITC), enabling tamper-proof lab report verification
        </li>
        <li>
          Developed internal LLM-powered tools:
          <ul>
            <li>Podcast promotional content generator (FastAPI + Whisper)</li>
            <li>
              CRM system with VLM-based business card recognition
              (FastAPI, React Native, PostgreSQL)
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      <h3>ASP.NET Developer — National Taiwan University</h3>
      <p><em>Jul 2022 – Apr 2023</em></p>
      <ul>
        <li>
          Developed and maintained ASP.NET web systems with MSSQL database integration
        </li>
        <li>
          Built server-side data validation pipelines in C#, significantly reducing manual
          data entry errors
        </li>
      </ul>
    </div>
  `,

		Projects: `
    <div>
      <h3>Termiredy (CLI Tool)</h3>
      <ul>
        <li>
          Developed a cross-platform Python CLI tool for monitoring terminal process states
        </li>
        <li>
          Implemented system-level notifications for long-running tasks
        </li>
        <li>
          Improved productivity in model training workflows by eliminating manual monitoring
        </li>
        <li>
          Packaged and published on PyPI, demonstrating full software lifecycle capability
        </li>
      </ul>
    </div>

    <div>
      <h3>Efficient Smart Contract Vulnerability Detection (Master’s Thesis)</h3>
      <ul>
        <li>
          Fine-tuned CodeBERT using LoRA (PEFT) for smart contract vulnerability detection
        </li>
        <li>
          Conducted trade-off analysis between full fine-tuning and parameter-efficient tuning
        </li>
        <li>
          Achieved improved efficiency for deployment under resource constraints
        </li>
      </ul>
    </div>
  `,

		Education: `
    <div>
    	<h3>Master in Information Security — National Taipei University of Technology</h3>
		<ul>
			<li><p><em>2024 – Present (Expected Jun 2026)</em></p></li>
			<li><p>Focus: AI Security, Large Language Models, Blockchain</p></li>
		</ul>
    </div>

    <div>
    	<h3>Bachelor in Information and Telecommunication Engineering — Ming Chuan University</h3>
    	<ul>
	  		<li><p><em>2020 – 2024</em></p></li>
		</ul>
    </div>
  `,
	};
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
				<React.Fragment key={section}>
					<Typography variant="h1" gutterBottom id={sectionList[section].replace("#", "")}>
						{section}
					</Typography>

					{
						<Typography
							variant="body1"
							gutterBottom
							dangerouslySetInnerHTML={{ __html: sectionContent[section] }}
						/>
					}
				</React.Fragment>
			))}
		</Container>
	);
}

export default ContentView;
