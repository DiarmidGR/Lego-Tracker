import { useState } from "react";
import "./SetsGrid.css";

const SetsGrid = ({ items }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 42; // 8x5 grid
  const [filterValue, setFilterValue] = useState("");

  const filteredItems = items.filter((item: any) =>
    item.set_num.toLowerCase().includes(filterValue.toLowerCase())
  );

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = filteredItems.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleFilterChange = (event: any) => {
    setFilterValue(event.target.value);
    setCurrentPage(0); // Reset to first page when filter changes
  };

  return (
    <div className="grid-container">
      <input
        type="text"
        placeholder="Filter by set_num"
        value={filterValue}
        onChange={handleFilterChange}
      />
      <div className="grid-nav">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Prev
        </button>
        <span>{`Page ${currentPage + 1} of ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
      <div className="grid">
        {/* Placeholder div to maintain consistent grid cell size */}
        {currentItems.length === 0 && (
          <div className="grid-item placeholder"></div>
        )}

        {/* Render actual grid items */}
        {currentItems.map((item: any) => (
          <div key={item.set_num} className="grid-item">
            <img src={item.img_url} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={prevPage} disabled={currentPage === 0}>
          Prev
        </button>
        <span>{`Page ${currentPage + 1} of ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SetsGrid;
