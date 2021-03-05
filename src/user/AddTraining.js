import { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import HeaderDashboard from '../components/HeaderDashboard';
import AdminSideBar from '../components/AdminSideBar';
import { createProduct, getCategories } from './ApiAdmin';
import { isAuthenticated } from '../auth';
import { Spinner, Button } from 'reactstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Training = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    timeLine: '',
    quantity: '',
    photo: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: '',
  });

  

  const { user, token } = isAuthenticated();

  const {
    name,
    description,
    price,
    categories,
    category,
    timeLine,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init();
    //setValues({...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleOnChange = (e, editor) => {
    const descriptionData = editor.getData();
    formData.append('description', descriptionData);
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });

    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          category: '',
          timeLine: '',
          quantity: '',
          error: '',
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  const showError = () => {
    if (error) {
      return (
        <div
          className="style-msg errormsg"
          style={{ display: error ? '' : 'none' }}
        >
          <div className="sb-msg">
            <i className="icon-remove"></i>
            <strong>Oh snap!</strong> {error}
          </div>
        </div>
      );
    }
  };

  const showSuccess = () => {
    if (createdProduct) {
      return (
        <div
          className="style-msg successmsg"
          style={{ display: createdProduct ? '' : 'none' }}
        >
          <div className="sb-msg">
            <i className="icon-thumbs-up"></i>
            <strong>Well done!</strong> {`${createdProduct}`} is created alert
            message.
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

  return (
    <Fragment>
      <HeaderDashboard></HeaderDashboard>
      <section id="page-title">
        <div className="container clearfix">
          <h1>Taining Registration</h1>
          <span>Taining Widget</span>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Widgets</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Taining
            </li>
          </ol>
        </div>
      </section>

      {/* <!-- Content
		============================================= --> */}
      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div>
              <div>
                {showSuccess()}
                {showError()}
              </div>

              <div className="row">
                <div className="col-lg-9">
                  <form className="row" onSubmit={clickSubmit}>
                    <div className="col-6 form-group">
                      <label> Name:</label>
                      <input
                        onChange={handleChange('name')}
                        type="text"
                        className="form-control "
                        value={name}
                        placeholder="Enter your taining name"
                      />
                    </div>
                    <div className="col-6 form-group">
                      <label>Price:</label>
                      <input
                        onChange={handleChange('price')}
                        type="text"
                        className="form-control "
                        value={price}
                        placeholder="Enter your taining price"
                      />
                    </div>
                    <div className="col-12 form-group">
                      <label>TimeLine:</label>
                      <input
                        onChange={handleChange('timeLine')}
                        type="text"
                        className="form-control"
                        value={timeLine}
                        placeholder="Enter your taining timeline"
                      />
                    </div>

                    <div className="col-6 form-group">
                      <label>Category</label>
                      <select
                        onChange={handleChange('category')}
                        className="form-control "
                      >
                        <option value="">-- Select One --</option>
                        {categories &&
                          categories.map((c, i) => (
                            <option key={i} value={c._id}>
                              {c.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <label>Post Photo</label>
                      <br />
                      <input
                        onChange={handleChange('photo')}
                        type="file"
                        name="photo"
                        accept="image/*"
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Description:</label>
                        {/* <textarea
                          onChange={handleChange('description')}
                          name="event-registration-bio"
                          id="event-registration-bio"
                          className="form-control "
                          cols="30"
                          value={description}
                          rows="5"
                        ></textarea> */}
                        <CKEditor
                          editor={ClassicEditor}
                          name="description"
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      {loading && loading ? (
                        <Button
                          className="btn btn-primary"
                          variant="success"
                          disabled
                        >
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          Loading...
                        </Button>
                      ) : (
                        <button className="btn btn-primary mt-3">Submit</button>
                      )}
                    </div>
                  </form>
                </div>

                <AdminSideBar></AdminSideBar>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Fragment>
  );
};

export default Training;
