import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const TotalOrders = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(10); // Adjust the number of orders per page

    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((info) => setOrders(info.reverse())); // Reverse the array initially
    }, []);

    // Pagination for Orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
    const paidOrders = orders.filter(order => order.paymentStatus === 'Paid');
    const totalSalesAmount = paidOrders.reduce((total, order) => total + parseFloat(order.packagePrice), 0).toFixed(2);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <HeaderBottom></HeaderBottom>
        
            <section id="services" className="services-area pt-120 pb-90 fix mb-5 mt-5">
                <div className="container">
                    <div className="row"></div>
                    <div className="row">
                        <div>
                            <AdminMenu></AdminMenu>
                            <div className='total-sales d-flex justify-content-center'>
                                        <h4>Total Sales: ${totalSalesAmount} USD</h4>
                                    </div>
                            <h4>Total Orders</h4>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">SL.</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Order Status</th>
                                        <th scope="col">Payment Status</th>
                                        <th scope="col">Payment Method</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentOrders.map((order, index) => (
                                        <tr key={order._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{order.orderDate}</td>
                                            <td>{order.customerName}</td>
                                            <td>{order.customerEmail}</td>
                                            <td>${order.packagePrice}</td>
                                            <td>{order.orderStatus}</td>
                                            <td>{order.paymentStatus}</td>
                                            <td>PayPal</td>
                                            <td><Link className='btn' to={`/admin/payment-status/${order._id}`}>Update</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Bootstrap Pagination for Orders */}
                            <nav aria-label="Orders Page Navigation">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <span className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</span>
                                    </li>
                                    {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, i) => (
                                        <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                            <span className="page-link" onClick={() => paginate(i + 1)}>
                                                {i + 1} {currentPage === i + 1 && <span className="sr-only">(current)</span>}
                                            </span>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === Math.ceil(orders.length / ordersPerPage) ? 'disabled' : ''}`}>
                                        <span className="page-link" onClick={() => paginate(currentPage + 1)}>Next</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TotalOrders;
