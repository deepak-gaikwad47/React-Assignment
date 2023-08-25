import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
  Button,
  Typography,
} from "@mui/material";
import BasicModal from "../../components/Modal/Modal";
import AddIcon from "@mui/icons-material/Add";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const [newUser, setNewUser] = useState({
    name: {
      first: "",
    },
    email: "",
    gender: "",
    phone: "",
  });

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setFilteredUsers(data.results);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
    const filtered = users.filter(
      (user) =>
        user?.name?.first?.toLowerCase()?.includes(value) ||
        user?.email?.toLowerCase()?.includes(value) ||
        user?.gender?.toLowerCase()?.includes(value) ||
        user?.phone?.toLowerCase()?.includes(value)
    );
    setFilteredUsers(filtered);
    setPage(0);
  };

  const handleEdit = (user, index) => {
    const updatedUser = {
      name: {
        first: user.name.first,
      },
      email: user.email,
      gender: user.gender,
      phone: user.phone,
    };
    setNewUser(updatedUser);
    setisEdit(true);
    setIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...filteredUsers];
    updatedUsers.splice(index, 1);
    setFilteredUsers(updatedUsers);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Typography component="h1" variant="h4" noWrap>
        Table
        <Button
          style={{ marginLeft: "30px" }}
          onClick={() => setOpen(true)}
          variant="contained"
        >
          <AddIcon />
          Add User
        </Button>
      </Typography>
      <TableContainer component={Paper}>
        <TextField
          label="Filter"
          value={filter}
          onChange={handleFilterChange}
          variant="outlined"
          margin="normal"
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{user?.name?.first}</TableCell>
                    <TableCell>{user?.email}</TableCell>
                    <TableCell>{user?.gender}</TableCell>
                    <TableCell>{user?.phone}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleEdit(user, index)}>
                        Edit
                      </Button>
                      <Button onClick={() => handleDelete(index)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <BasicModal
        open={open}
        setOpen={setOpen}
        setNewUser={setNewUser}
        user={newUser}
        users={users}
        isEdit={isEdit}
        index={index}
        setFilteredUsers={setFilteredUsers}
        setUsers={setUsers}
      />
    </div>
  );
};

export default UsersTable;
