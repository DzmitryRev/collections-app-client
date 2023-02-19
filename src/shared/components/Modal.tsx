import { Fade, IconButton, Modal as MuiModal, ModalProps, Paper, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const StyledModalPaper = styled(Paper)(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: "460px",
  transform: "translate(-50%, -50%)",
  padding: "25px",
  [theme.breakpoints.down("md")]: {
    width: "360px",
  },
  "@media screen and (max-width: 370px)": {
    width: "310px",
    padding: "10px",
    paddingTop: "20px",
  },
}));

interface IModalCustomProps extends ModalProps {
  closeModal: () => void;
}

export function Modal({ open, closeModal, children }: IModalCustomProps) {
  return (
    <MuiModal open={open} onClose={closeModal}>
      <Fade in={open}>
        <StyledModalPaper>
          <IconButton sx={{ position: "absolute", top: 3, right: 3 }} onClick={closeModal}>
            <CloseIcon sx={{ fontSize: "25px" }} />
          </IconButton>
          {children}
        </StyledModalPaper>
      </Fade>
    </MuiModal>
  );
}
