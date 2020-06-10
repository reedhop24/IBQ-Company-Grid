import React from 'src/node_modules/react';
import 'src/App.css';
import GridContainer from './components/grid';
import Select from './components/select';
import axios from 'src/node_modules/axios'

export default class GridApp extends React.Component {
  constructor() {
    super();
    this.state = {
      currState : null,
      productsByCompany: []
    }
  }

  subToDB = () => {
    axios.get(`http://localhost:800/getProducts?state=${this.state.currState}`)
      .then((res) => {
        this.setState({productsByCompany: res.data});
      })
  }

  render() {
    return (
      <div>
        <Select getCurrState={(x) => this.setState({currState: x})} getAllProducts={() => this.subToDB()}/>
        <GridContainer products={this.state.productsByCompany}/>
      </div>
    );
  }
}
