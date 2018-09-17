import React, { Component } from 'react'
import { connect } from 'react-redux';

import { ShowData } from '../views';
import { getData } from '../../actions';

class Search extends Component {

  componentDidMount() {
      this.props.getData();
  }
 
  render() {
    return (
      <div>
        <ul className='comments'>

        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(mapStateToProps, { getData })(Search);
