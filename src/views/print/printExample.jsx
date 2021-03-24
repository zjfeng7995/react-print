import React, { Component } from 'react';

class printExample extends Component {
    render() {
        return (
          <table>
            <thead>
              <th style={{background: 'red'}}>column 1</th>
              <th style={{color: 'blue'}}>column 2</th>
              <th>column 3</th>
            </thead>
            <tbody>
              <tr>
                <td>data 1</td>
                <td>data 2</td>
                <td>data 3</td>
              </tr>
            </tbody>
          </table>
        );
    }
}

export default printExample;