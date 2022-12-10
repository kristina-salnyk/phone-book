import { RotatingLines } from 'react-loader-spinner';
import { Box } from '@mui/material';

export const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="400px"
    >
      <RotatingLines
        strokeColor="rgb(175, 85, 190)"
        strokeWidth="5"
        animationDuration="0.75"
        width="30%"
        visible={true}
      />
    </Box>
  );
};
