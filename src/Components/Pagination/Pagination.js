import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';  

export default function Pagination({ page, nbPages, decPage, inPage, count, setCount }) {
  const handleItemPerPage = () => {
    const newCount = count - 1 >= 1 ? count - 1 : 1;
    setCount(newCount);
  };

  return (
    <div className='end '>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '400px', display: 'flex' }}>
          <Typography>Items per page - </Typography>
          <Box sx={{ border: '2px solid black', display: 'flex' }}>
            <Typography sx={{ ml: '3px' }}>{count}</Typography>
            <Button onClick={handleItemPerPage}>
              <KeyboardArrowDownIcon />
            </Button>
          </Box>
        </Box>
        <Box>
          <Button variant='outlined' onClick={decPage}>
            Prev
          </Button>
          <Typography variant='h6' component='span' sx={{ mx: '15px' }}>
            {page + 1} of {nbPages}
          </Typography>
          <Button variant='outlined' onClick={inPage}>
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
}