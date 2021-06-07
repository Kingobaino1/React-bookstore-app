import React from 'react';

const Header = () => (
  <div className="underline">
    <div className="d-flex justify-content-between container">
      <div className="d-flex justify-content-between">
        <div className="mt-4 ml-4"><h1 className="text-blue">Bookstore CMS</h1></div>
        <div className="m-4 pt-3 mb-0">
          <h6>Books</h6>
        </div>
        <div className="m-4 pt-3 mb-0">
          <h6>Categories</h6>
        </div>
      </div>
      <div>
        <i className="fas fa-user m-4 pt-3 mb-0 text-blue" />
      </div>
    </div>
  </div>
);

export default Header;
