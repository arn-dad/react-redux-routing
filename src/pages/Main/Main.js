import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { projectInit } from '../../actions'
import './main.styles.css';

const Main = (props) => {
  const [state, setState] = React.useState({ file: null })
  useEffect(() => {
    props.projectInit()
  }, [])

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setState({ file })
  }
  const uploadFile = () => {
    const { file } = state;
    const data = new FormData() 
    data.append('file', file)
  }
  return (
    <div className="main">
       <input onChange={handleInputChange} value={state.file} type="file"/>
       <button onClick={uploadFile}>click</button>
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