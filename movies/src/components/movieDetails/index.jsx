import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
const [drawerOpen, setDrawerOpen] = useState(false);


  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{ backgroundColor: "#2a612aff"}}
      >
          <Chip label="Genres" sx={{backgroundColor:"#347e34ff"}} />
        {movie.genres.map((g) => (
            <Chip label={g.name} sx={{backgroundColor:"#347e34ff"}} />
        ))}
      </Paper>
      <Paper component="ul" sx={{ backgroundColor: "#2a612aff"}}>
        <Chip  sx={{backgroundColor:"#347e34ff"}} icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip sx={{backgroundColor:"#347e34ff"}}
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
        sx={{backgroundColor:"#347e34ff"}}
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip sx={{backgroundColor:"#347e34ff"}} label={`Released: ${movie.release_date}`} 
        />
        <Chip label="Production Countries" sx={{backgroundColor:"#347e34ff"}} />
        {movie.production_countries.map((country) => (
        <Chip key={country.name} label={country.name} sx={{backgroundColor:"#347e34ff"}} />))}
        {movie.credits && (
  <>
    <Chip label="Directors" sx={{backgroundColor:"#347e34ff"}} />
    {movie.credits.crew
      .filter((c) => c.job === "Director")
      .map((director) => (
        <Chip key={`director-${director.id}`} label={director.name} sx={{backgroundColor:"#347e34ff"}} />
      ))}

    <Chip label="Actors" sx={{backgroundColor:"#347e34ff"}}/>
    {movie.credits.cast.slice(0, 5).map((actor) => (
      <Chip key={`cast-${actor.id}`} label={`${actor.name} as ${actor.character}`} sx={{backgroundColor:"#347e34ff"}} />
    ))}
  </>
)}

      </Paper>
            <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>

      </>
  );
};
export default MovieDetails ;
