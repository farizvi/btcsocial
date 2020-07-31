import { Reducer } from 'react'
import { FetchStoriesActions} from "../actions/storyActions";
import { AxiosError } from 'axios'
import {IStory} from "../../models/story";

export interface IStoriesState {
    fetching: boolean;
    stories: IStory[];
    error?: AxiosError;
}

const initialStoriesState = {
    fetching: false,
    stories: []
}

const storiesReducer: Reducer<IStoriesState, FetchStoriesActions> = (
    state = initialStoriesState,
    action
) => {
    switch (action.type) {
        case 'FETCH_STORIES':
            return {
                ...state,
                fetching: true,
                error: null
            } as IStoriesState

        case 'FETCH_STORIES_SUCCESS':
            return {
                ...state,
                fetching: false,
                stories: action.stories
            } as IStoriesState

        case 'FETCH_STORIES_ERROR':
            return {
                ...state,
                fetching: false,
                error: action.error
            } as IStoriesState

        default:
            return state
    }
}

export default storiesReducer;
