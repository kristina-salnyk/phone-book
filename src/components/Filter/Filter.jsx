import { Box, TextField } from '@mui/material';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { changeFilter } from '../../redux/filter/slice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <Box py={2} mx="auto" maxWidth="350px" width="100%">
      <TextField
        type="text"
        label="Find contacts by name:"
        name="filter"
        variant="outlined"
        color="secondary"
        size="small"
        inputProps={{
          style: { color: theme.palette.secondary.main },
        }}
        autoComplete="off"
        focused
        onChange={handleFilterChange}
        value={filter}
        fullWidth
      />
    </Box>
  );
};
