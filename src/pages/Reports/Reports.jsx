import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Container,
  Button,
  Typography,
  Checkbox,
} from "@mui/material";

const ReportForm = () => {
  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h4" noWrap>
        Reports
      </Typography>
      <form>
        <FormControl fullWidth margin="normal">
          <InputLabel>Report Type</InputLabel>
          <Select>
            <MenuItem value="type1">Type 1</MenuItem>
            <MenuItem value="type2">Type 2</MenuItem>
            <MenuItem value="type3">Type 3</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Start Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Agency</InputLabel>
          <Select>
            <MenuItem value="agency1">Agency 1</MenuItem>
            <MenuItem value="agency2">Agency 2</MenuItem>
            <MenuItem value="agency3">Agency 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Format</InputLabel>
          <Select>
            <MenuItem value="format1">Format 1</MenuItem>
            <MenuItem value="format2">Format 2</MenuItem>
            <MenuItem value="format3">Format 3</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Collected"
        />
        <Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ReportForm;
