import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const StyledButtonDelete = styled(Button)(({ theme })=>({
    backgroundColor: "rgb(202, 24, 24) !important",
    color: "#F0F5F9 !important",
    padding: "0.8rem !important",
    borderRadius: '8px',
    height: '20px',
}))

export default StyledButtonDelete;