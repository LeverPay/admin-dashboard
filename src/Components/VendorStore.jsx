import React from 'react';

const VendorStore = () => {
  return (
    <div className="adminArea">
      <div className="admin-area">
        <h2>Vendor Store URL</h2>
        <p>Define vendor store name in URL</p>
        <p>(https://localhost/wordpress[this-text]/[vendor-name])</p>
      </div>
      <div className='vendor-input'>
        <input type="text" name="" id="" placeholder="store name" />
      </div>
    </div>
  );
};

export default VendorStore;
