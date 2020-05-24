import React from 'react';

class index_C extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section>
          <h1 style={{ display: 'none' }}>FullStack </h1>
          <div className="relative">
            {/*  style={{ width: '100vw', height: '100vh', backgroundColor: 'transparent', top: '0', left: '0', position: 'absolute', textAlign: 'center', backgroundImage: '/public/img/landing4.png', backgroundSize: 'cover', backgroundAttachment: 'fixed' }} */}
            <img className="landing" src="/img/landing4.png" width="100%" alt="landing" />
{/*             <div>
              <button>Building</button>
              <button>or</button>
              <button>Tent</button>
            </div>
 */}          </div>
        </section>
        <style global>{`
        @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter');
        @import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap');

        #header {
          position: sticky !important;
          top: 0;
          filter: grayscale(100%);
        }

        .q {
          font-family: 'Cabin Sketch';
          font-weight: 700;
          font-size: 4vw;
          color: #ffffff;
          display: inline-block;
          text-shadow:
          3px 3px 5px #f33,
          3px -3px 5px #f33,
          -3px -3px 5px #f33,
          -3px 3px 5px #f33;
          
          position: relative;
        }



        .landing {
          z-index: -10;
        }
          `}
        </style>


      </React.Fragment>
    )
  }
}

export default index_C;