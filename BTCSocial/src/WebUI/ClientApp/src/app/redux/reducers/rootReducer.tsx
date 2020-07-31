import { combineReducers } from 'redux'
import storyReducer from './storyReducer';
import createStoryReducer from "./createStoryReducer";

const rootReducer = combineReducers({
    stories: storyReducer,
    createStory: createStoryReducer
})

export type IAppState = ReturnType<typeof rootReducer>

export default rootReducer;
