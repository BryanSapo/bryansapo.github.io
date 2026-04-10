
import { Container } from '@mui/material';
import ResponsiveAppBar from './components/AppBar'
import { grey } from '@mui/material/colors';
function App() {

  return (
    <Container maxWidth={false} disableGutters sx={{width:'100%', minHeight:'100vh'}}>
      <ResponsiveAppBar/>
    </Container>
  )
}

export default App
