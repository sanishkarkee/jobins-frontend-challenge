import React, { useEffect, useState } from 'react';
import './DataTable.scss';
import { MdChevronRight, MdKeyboardArrowLeft } from 'react-icons/md';
import ReactPaginate from 'react-paginate';

const DataTable = () => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Calculate the data for the current page
  const startIndex = currentPage * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  // Handle page click
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    //fetch next page data of api
  };

  const handleNoOfShowing = (event) => {
    console.log(event.target.value);
    setItemsPerPage(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/carts');
        const formattedResult = await response.json();

        //-- Changes made to API data's inorder to match with FIGMA design
        const customData = formattedResult.map((cart, index) => ({
          id: `#000` + cart.id,
          customer: `Joseph Wheeler ${cart.userId}`,
          date: new Date(cart.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
          total:
            `$2,5` +
            cart.products.reduce((sum, product) => sum + product.quantity, 0),
          method: 'Credit Card',
          status: index % 2 === 0 ? 'Completed' : 'Pending',
          action: 'View Details',
        }));

        setData(customData);
      } catch (error) {
        console.error('Something went wrong:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className='table-section'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>METHOD</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.customer}</td>
                  <td>{item.date}</td>
                  <td>{item.total}</td>
                  <td>{item.method}</td>
                  <td
                    style={{
                      color: item.status === 'Pending' ? '#ffc600' : '#28c76f',
                    }}
                  >
                    {item.status}
                  </td>
                  <td
                    style={{ color: '#0f60ff', cursor: 'pointer' }}
                    title='Edit - Delete'
                  >
                    {item.action}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className='table-operation'>
          <div className='showing-block'>
            <p>Showing</p>

            <select
              name='data-number'
              id='data-number'
              onChange={handleNoOfShowing}
            >
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
              <option value='50'>50</option>
            </select>

            <p>of 50</p>
          </div>

          <ReactPaginate
            previousLabel={<MdKeyboardArrowLeft />}
            nextLabel={<MdChevronRight />}
            pageCount={Math.ceil(50 / itemsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakLabel={'...'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
          />
        </div>
      </section>
    </>
  );
};

export default DataTable;
