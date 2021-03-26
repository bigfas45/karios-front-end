import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import HeaderDashboard from '../components/HeaderDashboard';
import { isAuthenticated } from '../auth';
import { getProjectGallery, createGallery } from './ApiAdmin';
import { Link } from 'react-router-dom';
import { API } from '../config';
import AdminSideBar from '../components/AdminSideBar';

const Gallery = ({match}) => {
  const { user, token } = isAuthenticated();
   const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    product: [],
    project: '',
    file: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: '',
  });

  const {
    product,
    project,
    file,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  const init = (projectId) => {
    getProjectGallery(projectId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          product: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init(match.params.productId);
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === 'file' ? event.target.files[0] : event.target.value;
    formData.set(name, value);

    formData.append('product', match.params.productId);
    setValues({ ...values, error: '', [name]: value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });
  setSuccess(false);
    createGallery(formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          project: '',
          file: '',
          loading: false,
          createdProduct: data.project,
        });
        setSuccess(true);
         init(match.params.productId);
      }
    });
  };




  const newCategoryForm = () => {
    return (
      <Fragment>
        <section id="content">
          <div class="content-wrap">
            <div class="container clearfix">
              <div class="row gutter-40 col-mb-80">
                <div class="postcontent col-lg-9">
                  <form role="form" onSubmit={clickSubmit}>
                    <div class="row">
                      <div class="col-lg-6 bottommargin">
                        <label>Product Select File</label>
                        <br />
                        <input
                          onChange={handleChange('file')}
                          type="file"
                          class="file"
                         
                        />
                      </div>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  };

  const showSuccess = () => {
    if (success) {
      return (
        <div className="style-msg successmsg">
          <div className="sb-msg">
            <i className="icon-thumbs-up"></i>
            <strong>Well done!</strong> is created
          </div>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-hidden="true"
          >
            &times;
          </button>
        </div>
      );
    }
  };

  const goBack = () => (
    <div className="mt-5">
      <Link to="/admin/dashboard" className="text-warning">
        Back to Dashboard
      </Link>
    </div>
  );

  const showError = () => {
    if (error) {
      return (
        <div className="style-msg errormsg">
          <div className="sb-msg">
            <i className="icon-remove"></i>
            <strong>Images not yet uploaded!!! </strong>
        
          </div>
        </div>
      );
    }
  };


    const imageGallery = () => {
      return (
        <Fragment>
          <div class="col-12 box-margin">
            <div class="card">
              <div class="card-body pb-0">
                <h5 class="card-title">Image Gallery</h5>
                <div class="row">
                  {product.map((g, i) => {
                    return (
                      <div class="col-sm-6 col-xl-3">
                        <a
                          href={`${API}/gallery/file/${g._id}`}
                          data-toggle="lightbox"
                          data-gallery="example-gallery"
                        >
                          <img
                            src={`${API}/gallery/file/${g._id}`}
                            alt={g.product.name}
                            class="img-fluid mb-30"
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    };

  return (
    <Fragment>
      <HeaderDashboard></HeaderDashboard>
      <div id="page-menu">
        <div id="page-menu-wrap">
          <div className="container">
            <div className="page-menu-row">
              <div className="page-menu-title">Gallery</div>
              <nav className="page-menu-nav">
                <ul className="page-menu-container">
                  <li className="page-menu-item ">
                    <a href="/dashboard">
                      <div>Dashboard</div>
                    </a>
                  </li>

                  <li className="page-menu-item">
                    <a href="/create/category">
                      <div>Create Category</div>
                    </a>
                  </li>
                  <li className="page-menu-item">
                    <a href="/create/trainings">
                      <div>Create Product</div>
                    </a>
                  </li>
                  <li className="page-menu-item current">
                    <a href="/products">
                      <div>Product List</div>
                    </a>
                  </li>
                </ul>
              </nav>
              <div id="page-menu-trigger">
                <i className="icon-reorder"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row gutter-40 col-mb-80">
              <div className="postcontent col-lg-9">
                {' '}
                {showSuccess()}
                {showError()}
                {newCategoryForm()}
                {goBack()}
              </div>

            

              {imageGallery()}
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
};

export default Gallery;
