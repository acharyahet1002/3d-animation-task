import { Box, Typography } from "@mui/material";
import { slides } from "../../utils/planetsArray";

const Description = ({ selectedIndex = 0 }) => {
  return (
    <Box className="description-container">
      <Typography variant="66" className="planet-title">
        {slides[selectedIndex]?.title}
      </Typography>

      <Box class="description-item-container">
        {slides[selectedIndex]?.descArray?.map((item) => {
          return (
            <Box key={item?.value} className="description-item">
              <Typography
                variant="22"
                textTransform={"uppercase"}
                letterSpacing={"3.52px"}
                color="#BDC5E2B2"
              >
                {item?.title}
              </Typography>
              <Typography variant="27" textTransform={"capitalize"}>
                {item?.value}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Description;
