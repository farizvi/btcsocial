import {AxiosError} from "axios";
import {Reducer} from "react";
import {CreateStoryActions} from "../actions/storyActions";

export interface ICreateStoryState {
    storyText: string,
    error?: AxiosError
}

const initialState = {
    storyText: ''
}

const createStoryReducer: Reducer<ICreateStoryState, CreateStoryActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'CREATE_STORY':
            return {
                ...state,
                storyText: action.storyText
            } as ICreateStoryState

        case 'CREATE_STORY_SUCCESS':
            return {
                ...state
            } as ICreateStoryState

        case 'CREATE_STORY_ERROR':
            return {
                error: action.error
            } as ICreateStoryState

        default:
            return state
    }
}

export default createStoryReducer;
