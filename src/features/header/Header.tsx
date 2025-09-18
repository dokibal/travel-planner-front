import { AppBar, Toolbar, Typography } from "@mui/material";
import { AppImage, HeaderContainer } from "../../AppTemplate";

function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <HeaderContainer>
          <AppImage src="travel.svg" />
          <Typography variant="h6">Dream Tripper</Typography>
        </HeaderContainer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
