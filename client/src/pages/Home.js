import React from 'react';
import { connect } from 'react-redux'

function Home(props) {
  // console.log(props);
  return (
    <div>
      Home2
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authToken: state.authToken
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
