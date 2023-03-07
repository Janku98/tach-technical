import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

const StyledInputEdit = styled(TextField)(({ theme })=>({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#C9D6DF',
          borderRadius: '12px',
        },
        '&:hover fieldset': {
          borderColor: '#C9D6DF',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#C9D6DF',
        },
      },
      input: {
        color: '#F0F5F9',
        backgroundColor:'#52616B',
        borderRadius: '12px',
        height: '12px',
      },
    width: '350px',
    marginRight: '5px',
}))

export default StyledInputEdit;