import "../pages/clerk/styles/desktop.style.css";

export function SearchBar() {
  return (
    <div className="wrap">
      <div className="border-bottom">
        <div className="search-wrapper">
          <div className="arrow">
            <div className="arrow-left">
              <i className="bi bi-arrow-left"></i>
            </div>
            <div className="arrow-right">
              <i className="bi bi-arrow-right"></i>
            </div>
            <div className="clock">
              <i className="bi bi-clock-history"></i>
            </div>
          </div>
          <div className="search">
            <div className="search-box">
              <div className="search-icon">
                <i className="bi bi-search"></i>
              </div>
              <input
                type="text"
                className="search-box border-0"
                placeholder="00dd5962"
              />
            </div>
            <div className="sort-box">
              <div className="sort">Sort By</div>
              <div className="arrow-down">
                <i className="bi bi-chevron-down"></i>
              </div>
            </div>
          </div>
          <div className="filter">
            <i className="bi bi-funnel"></i>
            <div className="filter-text">Advanced Search</div>
          </div>
        </div>
      </div>
    </div>
  );
}
