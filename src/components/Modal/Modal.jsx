import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen, setNewUser, user, isEdit, index, users, setFilteredUsers, setUsers }) {
  
  const handleClose = () => {
    setNewUser({})
    setOpen(false)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
const handleNameInputChange = (e) => {
  const { name, value } = e.target;
  setNewUser((prevUser) => ({
    ...prevUser,
    name:{ [name]: value }
  }));
}
  const handleFormSubmit = (e) => {
    if(isEdit){
      const updatedUsers = [...users];
      updatedUsers[index] = user;
      setFilteredUsers(updatedUsers);
    } else {
      setUsers((prevUsers) => [...prevUsers, user]);
    }
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <FormControl fullWidth margin="normal">
              <TextField
                label="First Name"
                type="input"
                name="first"
                value={user?.name?.first}
                onChange={handleNameInputChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>

            <TextField
              label="Email"
              type="input"
              name="email"
              value={user?.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Gender</InputLabel>
              <Select name="gender" value={user?.gender} onChange={handleInputChange}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Phone"
              type="number"
              name="phone"
              value={user?.phone}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <br />
            <br />
            <Button variant="contained" color="primary" fullWidth onClick={handleFormSubmit}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
