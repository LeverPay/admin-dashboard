import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { baseUrl } from '../utils/constants';
const MerchantTableRowData = ({ item, index }) => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const navigateToViewMore = () => {
    navigate('/merchant-view-more');
  };

  const authToken = Cookies.get('authToken');

  React.useEffect(() => {
    const fetchMerchants = async () => {
      try {
        // Get the token from the cookie
        const response = await axios.get(
          `${baseUrl}/v1/admin/get-all-merchants`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              accept: '*/*',
              'X-CSRF-TOKEN': 'qC0LrUVwQhWwAXb6bRGYi3xyVnEvqAI8olCNV5ow',
            },
          }
        );

        setData(response.data);
        console.log('data', data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchMerchants();
  }, []);

  return (
    <tr key={item.id}>
      <td>{item.customerName}</td> {/**Name */}
      <td>{item.customerEmail}</td> {/**email */}
      <td>
        {item.failed === 0 ? (
          <span className="suspended-user">Suspended</span>
        ) : (
          <span className="active-user">Active</span>
        )}
      </td>
      <td onClick={navigateToViewMore}>
        <div className="view-more-btn">View More</div>
      </td>
    </tr>
  );
};

export default MerchantTableRowData;
