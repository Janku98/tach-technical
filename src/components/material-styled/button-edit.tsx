import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const StyledButtonEdit = styled(Button)(({ theme })=>({
    backgroundColor: "rgb(0, 174, 255) !important",
    color: "#F0F5F9 !important",
    padding: "0.8rem !important",
    borderRadius: '8px',
    height: '20px',
}))

export default StyledButtonEdit;