import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({ nPages, currentPage, setCurrentPage }) {

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
  console.log('Number of pages', pageNumbers)

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const changePage = (event, value) => {
    console.log('pagination', value)
    setCurrentPage(value);
  }

  return (
    <Stack spacing={2}>
      <Pagination count={nPages} color="primary" hideNextButton hidePrevButton page={currentPage} onChange={changePage} />
    </Stack>
  );
}
