import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Box className="header-container">
      <Box className="header-section">
        <Typography
          variant="20"
          fontWeight={400}
          sx={{ opacity: "0.75" }}
          className={"nav-item"}
        >
          Home
        </Typography>
        <Typography
          variant="20"
          fontWeight={400}
          sx={{ opacity: "0.75" }}
          className={"nav-item"}
        >
          About
        </Typography>
        <Typography
          variant="20"
          fontWeight={400}
          sx={{ opacity: "0.75" }}
          className={"nav-item"}
        >
          Contact
        </Typography>

        <Typography
          variant="20"
          fontWeight={400}
          sx={{ letterSpacing: "5.67px" }}
        >
          METEORA
        </Typography>

        <Typography
          variant="20"
          fontWeight={400}
          sx={{ opacity: "0.75" }}
          className={"nav-item"}
        >
          Home
        </Typography>
        <Typography
          variant="20"
          fontWeight={400}
          sx={{ opacity: "0.75" }}
          className={"nav-item"}
        >
          About
        </Typography>
        <Typography
          variant="20"
          fontWeight={400}
          sx={{ opacity: "0.75" }}
          className={"nav-item"}
        >
          Contact
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
