import React from 'react';
import Reactstrap from 'reactstrap';

const BtnDropdown = ( props ) => {
  return (
    <div className="bd-example">


      <div className="btn-group dropright">
        <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>

        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <div className="btn-group dropright">
        <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary</button>

        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <div className="btn-group dropright">
        <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <div className="btn-group dropright">
        <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <div className="btn-group dropright">
        <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <div className="btn-group dropright">
        <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger<span className="caret btn-light"></span></button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>

    </div>
  );
}

export default BtnDropdown;