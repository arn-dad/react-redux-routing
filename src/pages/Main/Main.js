import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { projectInit } from '../../actions'
import './main.styles.css';

const Main = (props) => {
  useEffect(() => {
    props.projectInit()
  }, [])
  return (
    <div className="main">
       Init
    </div>
  );
};

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    projectInit: () => {
      dispatch(projectInit())
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);