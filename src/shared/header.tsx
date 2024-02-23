import { AppBar, Button, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material"
import { Outlet } from "react-router-dom"

const theme = createTheme({
  palette: {
    primary: {
      light: '#474f97',
      main: '#1a237e',
      dark: '#121858',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a2cf6e',
      main: '#8bc34a',
      dark: '#618833',
      contrastText: '#000',
    },
  },

});
function Header() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar className='app-bar' position="static">
        <Toolbar>
          <Button color="secondary" href="/">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Salad.bar
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </ThemeProvider>
  )
}

export default Header

