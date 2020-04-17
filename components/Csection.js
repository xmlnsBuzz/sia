import React from 'react';
import DomTreeGeneratingProcess from './mermaid/DomTreeGeneratingProcess';

class Csection extends React.Component {
  render () {
    return (

      /* NOTE 이 근처를 건드리면 드롭다운이 안된다. */
      <div id="scrollContent" className="scroll-content col-lg-10">
        <section id="about">
          <div className="normal-wrap">
            <div className="align-center">
              <h1>SIA Channel Home</h1>
            </div>
            <hr />
            <h2>About this page</h2>
            <p className="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
            <p className="lead">우리는 민족 중흥의 역사적 사명을 띄고 이 땅에 태어났다. 조상의 빛난 얼을 오늘에 되살려 안으로 자주독립의 기틀을 마련하고 밖으로 인류공영에 이바지할 때이다. 이에 우리의 나아갈 바를 밝혀 교육의 지표로 삼는다.</p>
            <div className="normal-wrap">
              <h3>Heading 3</h3>
              <ul>
                <li>Clickable nav links that smooth scroll to page sections</li>
                <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                <li>Minimal custom CSS so you are free to explore your own unique design options
                  <ul>
                    <li>Clickable nav links that smooth scroll to page sections</li>
                    <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                    <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                    <li>Minimal custom CSS so you are free to explore your own unique design options</li>
                  </ul>
                </li>
              </ul>
              <DomTreeGeneratingProcess />
            </div>
          </div>
        </section>

        <section id="services">
          <h2>Services we offer</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
        <pre><code id="sample">{`// comments
  componentDidMount () {
    window.setTimeout( () => {
      const el = ReactDOM.findDOMNode( this );
      const height = el.querySelector( '.panel__inner' ).scrollHeight;
      this.setState( {
        height
      } );
    }, 333 );
  }      
`}</code></pre>
        </section>
        <section id="contact">
          <h2>Contact us</h2>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
        </section>

      </div>
    )
  }
}

export default Csection;