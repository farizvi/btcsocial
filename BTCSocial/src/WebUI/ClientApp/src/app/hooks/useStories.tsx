import {useDispatch, useSelector} from "react-redux";
import {createStoryActionCreator, getStoriesActionCreator} from "../redux/actions/storyActions";
import { IAppState } from "../redux/reducers/rootReducer";

const useStories = () => {
    const dispatch = useDispatch();
    const { stories, fetching, error } = useSelector(
        (state: IAppState) => state.stories
    );

    const fetchStories = () => {
        dispatch(getStoriesActionCreator());
    }

    const createStory = (storyText: string) => {
        dispatch(createStoryActionCreator(storyText));
    }

    return [stories, fetching, error, fetchStories, createStory];
}

export default useStories;
