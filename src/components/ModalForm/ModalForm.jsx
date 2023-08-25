import React, { useState } from "react";
import { Modal, TextField, Button, Box } from "@mui/material";

const ModalForm = ({ open, onClose, onSave, title }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSave = () => {
    if (inputValue) {
      onSave(inputValue);
      setInputValue("");
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 3,
          borderRadius: "4px",
          boxShadow: 24,
          width: 300,
        }}
      >
        <TextField
          label={title}
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalForm;
