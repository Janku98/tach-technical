import { styled } from "@mui/material";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme })=>({
    backgroundColor: "#52616B !important",
    color: "#F0F5F9 !important",
    padding: "1rem !important",
    borderRadius: '12px',
    height: '54px',
}))

export default StyledButton;