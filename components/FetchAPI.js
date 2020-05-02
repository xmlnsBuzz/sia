import React, { Component } from 'react';

class FetchAPI extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      item: [],
      isLoaded: false,
    }
  }

  componentDidMount () {
    fetch( '/json/exercise.json' )
      .then( res => res.json() )
      .then( json => {
        this.setState( {
          isLoaded: true,
          items: json
        } )
      } )
  }


  render () {
    var { isLoaded, items } = this.state;
    if ( !isLoaded ) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div>
          <ul style={{listStyleType: 'none'}}>
            {items.map( item => (
              <li key={item.id}>
                <table className="sortable">
                  <thead>
                    <tr>
                      <th style={{width: '25%'}}>title</th>
                      <th>content</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Email</th>
                      <td>{item.email}</td>
                    </tr>
                    <tr>
                      <th>Name</th>
                      <td>{item.name}</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{item.phone}</td>
                    </tr>
                    <tr>
                      <th>Company Name</th>
                      <td>{item.company.name}</td>
                    </tr>
                    <tr>
                      <th>Web Site</th>
                      <td><a href={`https://${item.website}`}>https://{item.website}/</a></td>
                    </tr>
                  </tbody>

                </table>

              </li>
            ) )}
          </ul>
        </div>
      )
    }
  }
}

export default FetchAPI;
