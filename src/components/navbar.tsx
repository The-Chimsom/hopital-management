import '../pages/clerk/styles/desktop.style.css'

export function Navbar(){
return (
  <div className='' >
    <div className="border-bottom">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <div className="">Grace Of God Medical Centre</div>
            <div className="">12th October 2022 12:35pm</div>
            <div className="logged-profile">
              <div className="profile-circle">
                <i className="bi bi-person-circle"></i>
              </div>
              <div className="user">
                <div className="name"> Oluwakorede Tunde</div>
                <div className="role">Clerk(Medical Records)</div>
              </div>
              <i className="bi bi-chevron-down"></i>
              <i className="bi bi-chat-square"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
);
}