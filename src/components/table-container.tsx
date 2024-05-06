import "../pages/clerk/styles/desktop.style.css";

export function TableContainerComponent() {
  return (
    <div className="table-wrapper">
      <div className="res-wrapper">
        <div className="search-res">
          <div className="se">Search result for "00dd5962"</div>
          <div className="lv">Search Query: Last Viewed</div>
        </div>
        <div className="patient">
          <button>Save Vitals</button>
        </div>
      </div>
      <table className="table table-borderless" id="tab">
        <thead>
          <tr>
            <th>S/N</th>
            <th>
              Patient ID<i className="bi bi-chevron-expand"></i>
            </th>
            <th>
              Names<i className="bi bi-chevron-expand"></i>{" "}
            </th>
            <th>
              Gender<i className="bi bi-chevron-expand"></i>
            </th>
            <th>
              Telephone Number<i className="bi bi-chevron-expand"></i>
            </th>
            <th>
              Primary Category<i className="bi bi-chevron-expand"></i>
            </th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}
