import Select from '@mui/material/Select';
import { styled } from "@mui/material";


const StyledSelect = styled(Select)(({ theme })=>({
    "&.MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#C9D6DF",
          
        },
        "&:hover fieldset": {
          borderColor: "#C9D6DF"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#C9D6DF"
        },
      },
    width: '150px',
    marginLeft: '15px',
    backgroundColor: '#C9D6DF',
    fontFamily: 'poppins',
    borderRadius: '12px'
}))

export default StyledSelect;