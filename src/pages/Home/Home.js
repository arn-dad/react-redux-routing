import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { projectInit } from '../../actions'
import axios from 'axios';
import './home.styles.css';

const Home = (props) => {
  const [state, setState] = useState({
    file: null,
    title: '',
    author: ''
  })
  const [views, setViews] = useState([])
  useEffect(() => {
    props.projectInit()
    axios.get('https://it-blog-posts.herokuapp.com/api/views').then(res => {
      setViews(res.data.reverse())
    })
  }, [])

 const handleInputChange = (event) => {
  setState({...state, file: event.target.files[0]})
  }

  const handleTextChange = ({target: { name, value }}) => {
    setState({...state, [name]: value })
  }

 const uploadFile = async () => {
    const data = new FormData() 
    data.append('file', state.file)
    try {
      const uploadedFile = await axios.post("https://it-blog-posts.herokuapp.com/api/attachments/picture/upload", data)
      const fileName = uploadedFile.data.result.files.file[0].name;
      const createdView = await axios.post("https://it-blog-posts.herokuapp.com/api/views", {
        title: state.title,
        author: state.author,
        picture: fileName
      })
      const views = await axios.get('https://it-blog-posts.herokuapp.com/api/views');
      setViews(views.data.reverse());
      setState({ file: null, title: '', author: '' })
    } catch (error) {
      console.log('Error while save a file:', error)
    }
   
  }
  return (
    <div className="main">
      <div className='upload-box'>
        <input type="text" name='title' placeholder='Title' value={state.title} onChange={handleTextChange} />
        <input type="text" name='author' placeholder='Author' value={state.author} onChange={handleTextChange} />
        <input onChange={handleInputChange} accept="images/*" type="file"/>
        <button onClick={uploadFile}>Upload</button>
      </div>
      <div className="posts-list">
        {views.map(view => {
          if (view.picture) {
            return (
              <div key={view.id}>
                <div>{`${view.title} by ${view.author}`}</div>
                <img className='img-box' src={`https://it-blog-posts.herokuapp.com/api/attachments/picture/download/${view.picture}`} alt=""/>
              </div>
            ) 
          }
          return null;
        })}
      </div>
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
)(Home);