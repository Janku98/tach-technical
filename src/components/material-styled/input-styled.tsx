import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";

const StyledInput = styled(TextField)(({ theme })=>({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#C9D6DF',
          borderRadius: '12px'
        },
        '&:hover fieldset': {
          borderColor: '#C9D6DF',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#C9D6DF',
        },
      },
      input: {
        color: 'black',
        backgroundColor:'#C9D6DF',
        borderRadius: '12px'
      },
    width: '350px',
    marginRight: '5px',

}))

export default StyledInput;