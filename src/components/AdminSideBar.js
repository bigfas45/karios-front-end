import react, { Fragment } from "react"


const AdminSideBar = () => {
  return (
    <Fragment>
      {/* <!-- Sidebar
						============================================= --> */}
      <div className="sidebar col-lg-3">
        <div className="sidebar-widgets-wrap">
          <div className="widget widget_links clearfix">
            <h4>Admin Links</h4>
            <ul>
              <li>
                <a href="/create/category">
                  <div>Create Category</div>
                </a>
              </li>
              <li>
                <a href="/create/trainings">
                  <div>Create Product</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AdminSideBar