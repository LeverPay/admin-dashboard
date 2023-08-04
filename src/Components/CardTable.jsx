import { Table } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const CardTable = () => {
  const navigate = useNavigate();

  const navigateToEditCard = () => {
    navigate('/edit-card');
  };

  const dataSource = [
    {
      key: '1',
      CardName: 'Gold Card',
      Status: 'Active',
      Action: (
        <div className="flex items-center gap-5">
          <AiOutlineEdit
            size={20}
            color="#0051FF"
            className="cursor-pointer"
            onClick={navigateToEditCard}
          />
          <RiDeleteBin6Line
            size={20}
            color="#FF0505"
            className="cursor-pointer"
          />
        </div>
      ),
      Activation: (
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      ),
    },
    {
      key: '2',
      CardName: 'Diamond Card',
      Status: 'Active',
      Action: (
        <div className="flex items-center gap-5">
          <AiOutlineEdit
            size={20}
            color="#0051FF"
            className="cursor-pointer"
            onClick={navigateToEditCard}
          />
          <RiDeleteBin6Line
            size={20}
            color="#FF0505"
            className="cursor-pointer"
          />
        </div>
      ),
      Activation: (
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      ),
    },
    {
      key: '2',
      CardName: 'Pink Lady Card',
      Status: 'Active',
      Action: (
        <div className="flex items-center gap-5">
          <AiOutlineEdit
            size={20}
            color="#0051FF"
            className="cursor-pointer"
            onClick={navigateToEditCard}
          />
          <RiDeleteBin6Line
            size={20}
            color="#FF0505"
            className="cursor-pointer"
          />
        </div>
      ),
      Activation: (
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      ),
    },

    {
      key: '2',
      CardName: 'Enterprise Card',
      Status: 'Active',
      Action: (
        <div className="flex items-center gap-5">
          <AiOutlineEdit
            size={20}
            color="#0051FF"
            className="cursor-pointer"
            onClick={navigateToEditCard}
          />
          <RiDeleteBin6Line
            size={20}
            color="#FF0505"
            className="cursor-pointer"
          />
        </div>
      ),
      Activation: (
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      ),
    },

    {
      key: '2',
      CardName: 'Silver Card',
      Status: 'Active',
      Action: (
        <div className="flex items-center gap-5">
          <AiOutlineEdit
            size={20}
            color="#0051FF"
            className="cursor-pointer"
            onClick={navigateToEditCard}
          />
          <RiDeleteBin6Line
            size={20}
            color="#FF0505"
            className="cursor-pointer"
          />
        </div>
      ),
      Activation: (
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      ),
    },

    {
      key: '2',
      CardName: 'Others',
      Status: 'Inactive',
      Action: (
        <div className="flex items-center gap-5">
          <AiOutlineEdit
            size={20}
            color="#0051FF"
            className="cursor-pointer"
            onClick={navigateToEditCard}
          />
          <RiDeleteBin6Line
            size={20}
            color="#FF0505"
            className="cursor-pointer"
          />
        </div>
      ),
      Activation: (
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      ),
    },
  ];

  const columns = [
    {
      title: 'Card Name',
      dataIndex: 'CardName',
      key: 'CardName',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
    },
    {
      title: 'Activation',
      dataIndex: 'Activation',
      key: 'Activation',
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default CardTable;
