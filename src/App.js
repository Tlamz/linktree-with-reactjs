import './App.css';
import React from 'react';

function App() {
  return (
    <div className="container">
      <div className='share-button'>
        <img src="./images/share-desktop.svg" alt="" className='share-desktop' />
        <img src="./images/share-mobile.svg" alt="" className='share-mobile'/>
      </div>
      <div className='avatar-container'>
        <img className='avatar' src="./images/Oye.jpg" alt="tlamz-pic" id='profile_img' />
        <img className='edit' src="./images/hover-img.svg" alt="" />
        <h3 id="twitter" className="twitter-name">Tlamz</h3>
        <h3 id="slack" className="slack-name">Tlamz</h3>
      </div>
      {/* <h3 className='my_name'>Tlamz</h3> */}
      <div className='btns-container'>
        <a href="https://twitter.com/T_lamz" target='_blank' id='twitter'>Twitter</a>
        <a href="https://training.zuri.team/" target='_blank' id='btn__zuri'>Zuri Team</a>
        <a href="https://books.zuri.team/" target='_blank' id='books'>Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Tlamz" target='_blank' id='book__python'>Python Books</a>
        <a href="https://background.zuri.team" target='_blank' id='pitch'>Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" target='_blank' id='book__design'>Design Books</a>
      </div>
      <div className='wrk_icons'>
        <img src="./images/slack.svg" alt="" />
        <img src="./images/github.svg" alt="" />
      </div>
      <hr/>
      <footer>
        <div>
          <img src="./images/zuri.svg" alt="Zuri" />
        </div>
        <div>
          <p>HNG Internship 9 Frontend Task</p>
        </div>
        <div>
          <img src="./images/I4G.svg" alt="Ingressive4Good" />
        </div>
      </footer>

      
    </div>
  );
}

export default App;
