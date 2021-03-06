import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addFavorite } from '../actions/postActions'


class Post extends Component {

  addFavorite = postId => {
    this.props.addFavorite(postId)
  }

  render() {
    const { data } = this.props
    return (
      <div className='post'>
            <img className='image' src={data.url} alt='Image Not Available' />
            <div className='title'>
              <p className='title-text'>{data.title}</p>
            </div>
            <div className='other-text'>
              <p>/u/{data.author_fullname}</p>
            </div>
        <button className='make-favorite' onClick={() => this.addFavorite(data.id)}> Make Favorite </button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch =>  {
  return {
    addFavorite: postId => dispatch(addFavorite(postId))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Post));
