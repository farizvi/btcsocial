import React from 'react';
import './App.scss';
import Navbar from "../../components/navbar/navbar";
import Stories from "../../components/stories-container/stories";
import { Route } from 'react-router-dom';
import StoryDetail from "../../components/story-detail/storyDetail";
import AddStory from "../../components/add-story/addStory";
import Header from "../../components/header/header";

function App() {
  return (
    <div>
      <Navbar />
      <div id="wrapper-main">
          <Header />
          <Route exact path='/' component={Stories} />
          <Route path='/story/:id' component={StoryDetail} />
          <Route path='/createStory' component={AddStory} />
      </div>
    </div>
  );
}

export default App;
