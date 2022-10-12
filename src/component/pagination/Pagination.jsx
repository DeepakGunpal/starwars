import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ nPages, currentPage, setCurrentPage }) {

  const changePage = (event, value) => {
    setCurrentPage(value);
  }

  return (
    <Stack spacing={1}>
      <Pagination count={nPages} color="primary" page={currentPage}
        onChange={changePage} size='small'
        style={{
          backgroundColor: 'white',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          // marginTop: '38px'
        }}
      />
    </Stack>
  );
}
