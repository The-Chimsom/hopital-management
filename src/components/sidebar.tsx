export function Sidebar(){
    return (
      <div className="wrapper">
        <aside id="sidebar">
          <div className="d-flex">
            <button className="toggle-btn" type="button">
              <i className="bi bi-list"></i>
            </button>
          </div>

          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <i className="bi bi-house-door"></i>
            </li>
            <li className="sidebar-item">
              <i className="bi bi-search"></i>
            </li>
            <li className="sidebar-item">
              <i className="bi bi-bell"></i>
            </li>
            <li className="sidebar-item">
              <i className="bi bi-calendar4"></i>
            </li>
            <li className="sidebar-item">
              <i className="bi bi-gear"></i>
            </li>
            <li className="sidebar-item">
              <i className="bi bi-question-circle"></i>
            </li>
            <li className="sidebar-item">
              <i className="bi bi-moon"></i>
            </li>
          </ul>
          <div className="bi-person-circle"></div>
        </aside>
      </div>
    );
}