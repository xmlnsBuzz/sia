import React, { Component } from 'react';
import fetch from 'node-fetch';



class JsonTest extends React.Component {
  
  constructor () {
    super()
    this.state = {
      items: []
    }
  }


  render () {
    return (
      <div>
        <ul style={{ listStyleType: 'none' }}>
          {this.state.items.map ( item => (
            <li key={item.id}>
              <table className="sortable">
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>title</th>
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

JsonTest.getInitialProps = async function () {
  const res = await fetch( '/json/exercise.json' );
  const data = await res.json()
  this.setState ({
    items: data
  })
}




export default JsonTest;
