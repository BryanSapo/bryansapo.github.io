import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
function ToTopBtn() {


    return (
        <Box sx={{ position: 'fixed', bottom: 16, right: 16, scale:'1.1' }}>
            <Fab size="small" color="secondary" aria-label="add">
                <ArrowCircleUpIcon />
            </Fab>
        </Box>
    )
}
export default ToTopBtn;