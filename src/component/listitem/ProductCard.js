import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SearchBar from "react-js-search";
import ReactPaginate from 'react-paginate';
import { Link, useNavigate } from 'react-router-dom'
import product from './Product.json'

export default function ProductCard() {
    const navigate = useNavigate();
    const [products, setProducts] = useState({ product })
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState({ product });
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setSelectedProducts({ ...product })
        setShow(true);
    };

    const handleSearchTermChange = value => {
        setSearchTerm(value);
        setCurrentPage(0);
    };


    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };


    const handleSortOrderChange = value => {
        setSortOrder(value);
        setProducts(0);
    }
    const filteredProducts = searchTerm
        ? products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : product;

    const sortedProducts = sortOrder === 'asc'
        ? filteredProducts.sort((a, b) => a.price - b.price)
        : filteredProducts.sort((a, b) => b.price - a.price);

    const productsPerPage = 3;
    const offset = currentPage * productsPerPage;
    const currentProducts = sortedProducts.slice(offset, offset + productsPerPage);
    const pageCount = Math.ceil(sortedProducts.length / productsPerPage);
    return (
        <>
            <hr />
            <SearchBar
                placeholder="Search products..."
                onChange={handleSearchTermChange}
            />
            <select value={sortOrder} onChange={e => handleSortOrderChange(e.target.value)}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
            <h2 className='text-center'> Product List</h2>
            <div className='container'>
                <div className='row'>
                    {product.map((product) => {
                        return (
                            <div className='col-sm-3' key={product.id}>
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt="aa" width='150' height='150' />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.category}</h5>
                                        <p className="card-text">{product.title}</p>
                                        <p className="card-text">{product.price}</p>
                                        <p className="card-text">{product.rating.rate}</p>
                                        <button>
                                            <Link to={`/productdetails/${product.id}`} className='btn btn-primary'>VIEW DETAILS</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="card">
                        <img src={selectedProducts.image} className="card-img-top" alt="aa" width='150' height='150' />
                        <div className="card-body text-center">
                            <h5 className="card-title">{selectedProducts.category}</h5>
                            <p className="card-text">{selectedProducts.title}</p>
                            <p className="card-text">{selectedProducts.price}</p>
                            <p className="card-text">{selectedProducts.description}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={handleClose}>
                        BUY NOW
                    </button>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>

                </Modal.Footer>
            </Modal>
            <products selectedProducts={currentProducts} />
            <ReactPaginate
                previousLabel="< previous"
                nextLabel="next >"
                breakLabel="..."
                breakClassName={'break-me'}
                onPageChange={handlePageChange}
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go next</button>
        </>
    );
}