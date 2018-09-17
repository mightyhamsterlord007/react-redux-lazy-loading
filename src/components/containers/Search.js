import React, { Component } from 'react'
import { connect } from 'react-redux';

import { ShowData } from '../views';
import { getData } from '../../actions';

class Search extends Component {

  componentDidMount() {

      this.props.getData();

      this.scrollListener = window.addEventListener('scroll', (e) => {
        this.handleScroll(e);
      });

  }

  handleScroll = (e) => {

    let lastListItem = document.querySelector('ul.comments > li:last-child');

    console.log(lastListItem);

  }
 
  render() {

    let comments = this.props.comments;
    let loadComments;

    if (comments.data.length <= 0) {
        loadComments = '';
    } else {
        loadComments = comments.data.map((item) => {
            return (
                <li key={item.id} style={{listStyle: 'none'}}>
                    <ShowData item={item} />
                </li>
            )
        })
    }

    return (
      <div>
        <ul className='comments'>
            {loadComments}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    comments: state.comments
});

export default connect(mapStateToProps, { getData })(Search);
