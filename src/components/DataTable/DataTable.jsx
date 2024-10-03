import React, { useEffect, useState } from 'react';
import './DataTable.scss';
import { MdChevronRight, MdKeyboardArrowLeft } from 'react-icons/md';

const DataTable = () => {
  const [data, setData] = useState([]);

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

            <select name='data-number' id='data-number'>
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='30'>30</option>
              <option value='40'>40</option>
            </select>

            <p>of 50</p>
          </div>

          <div className='pagination-block'>
            <div className='pagination'>
              <p>
                <MdKeyboardArrowLeft />
              </p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>
                <MdChevronRight />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataTable;
