import React from 'react'

const Pagination = ({ totalPage, QtyPage }) => {
    const PageNambers = []
  

    return (
        <div style={{ display: 'flex' }}>
            {PageNambers.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}

export default Pagination