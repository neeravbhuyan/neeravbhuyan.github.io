export const profile = {
  name: "Neerav Bhuyan",
  title: "BSDS @ ISI Delhi",
  about: "Passionate about applying data science and statistical concepts to real world problems",
  
  skills: ["Python", "R", "C++", "Convex Optimization", "Statistical Modelling", "Statistical Data Analysis"],

  projects: [
    {
      title: "Billboard Top Songs Analysis (2018–2025)",
      desc: "This report investigates the acoustic and structural properties of the Billboard Year-End Hot 100 songs across eight years (2018–2025). We constructed a unified dataset by combining Spotify audio features, Maven Analytics-curated song charts, and high-level audio descriptors retrieved from MusicBrainz and AcousticBrainz. The pipeline involved custom Python scripts per year to collect, normalise, and impute missing data, followed by statistical analysis in R. Four central research questions are examined: (1) what acoustic features predict happiness in a song; (2) whether acousticness has shifted over time; (3) whether song duration influences chart rank; and (4) whether popular music is becoming more formulaic.",
    },
    {
      title: "A Convex Optimization Approach to Constrained LPG Allocation",
      desc: "This project formulates a data-driven convex optimization model to manage national liquefied petroleum gas (LPG) rationing during severe supply chain disruptions.",
    }
  ],

  education: [
    {
      place: "ISI Delhi",
      degree: "BSDS(Hons.)"
    }
  ],

  contact: {
    email: "neeravbhuyan@gmail.com",
    linkedin: "www.linkedin.com/in/neerav-bhuyan-401542269"
  }
};