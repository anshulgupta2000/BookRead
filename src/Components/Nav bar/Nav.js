 import React from 'react';
// import '../App.css';
import {
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from '@mui/material';

export default function Nav({ hits, query }) {
  return (
    <div className='tablediv'>
      <TableContainer component={Paper} style={{ maxHeight: '500px' }}>
        <Table sx={{ minWidth: 400 }} size='small' aria-label='a dense table' align='top'>
          <TableHead>
            <TableRow
              style={{
                backgroundColor: '#eee',
                color: 'blue',
                padding: '15px',
              }}
            >
              <TableCell>Id</TableCell>
              <TableCell>Average Rating</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Reviews</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {query ? (
              hits.map((curPost) => {
                const { title, author, objectID, points, num_comments } = curPost;
                return (
                  <TableRow key={objectID}>
                    <TableCell component='th' scope='row'>
                      {objectID}
                    </TableCell>
                    <TableCell>{points}</TableCell>
                    <TableCell>{title}</TableCell>
                    <TableCell>{author}</TableCell>
                    <TableCell>{num_comments}</TableCell>
                  </TableRow>
                );
              })
            ) : (
              <p>No Data Available</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

