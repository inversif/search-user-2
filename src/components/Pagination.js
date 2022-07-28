import React from 'react';

const Pagination = ({perPage, totalElem, paginate}) => {
    const pageNumbers = [];

    for(var i = 1; i <= Math.ceil(totalElem/perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container float-inline-end">
            <nav aria-label="Search User pagination">
                <ul className="pagination">
                    {
                        pageNumbers.map((num) => {
                            return <li key={num}  className="page-item">
                                <a onClick={() => paginate(num)} className="page-link" href="#">{num}</a>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;