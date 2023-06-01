import React, { useState } from 'react';
import Search from 'react-js-search';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import product from './Product.json'

const ProductList = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedProducts, setSortedProducts] = useState(product);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;

  // Handler for search input change
  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = product.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSortedProducts(results);
  };

  // Handler for sorting option change
  const handleSortByChange = (event) => {
    const sortType = event.target.value;
    let sortedResults = [...sortedProducts];

    if (sortType === 'price-high-to-low') {
      sortedResults = sortedResults.sort((a, b) => b.price - a.price);
    } else if (sortType === 'price-low-to-high') {
      sortedResults = sortedResults.sort((a, b) => a.price - b.price);
    }

    setSortedProducts(sortedResults);
  };

  // Handler for page change
  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  // Get paginated products
  const getPaginatedProducts = () => {
    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  };

  // Open modal and set selected product
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <Search
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearch}
      />

      <select value={''} onChange={handleSortByChange}>
        <option value="">Sort By</option>
        <option value="price-high-to-low">Price: High to Low</option>
        <option value="price-low-to-high">Price: Low to High</option>
      </select>

      {getPaginatedProducts().map((product) => (
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>
              <div key={product.id}>
                <img src={product.image} className="card-img-top" alt="aa" width='150' height='250' />
                <h3>{product.name}</h3>
                <p>Title: {product.title}</p>
                <p>Price: ${product.price}</p>
                <p>rating: {product.rating.rate}</p>
                <button onClick={() => handleOpenModal(product)} className='btn btn-primary'>View Details</button>
              </div>
            </div>
          </div>
        </div>
  ))
}

      <ReactPaginate
        pageCount={Math.ceil(sortedProducts.length / productsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />

      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        {selectedProduct && (
          <div>
            <h2>{selectedProduct.name}</h2>
            <p>Price: ${selectedProduct.price}</p>
            {/* Additional details or components */}
            <button onClick={handleCloseModal}>Close</button>
          </div>
        )}
      </Modal>
    </div >
  );
};

export default ProductList;
