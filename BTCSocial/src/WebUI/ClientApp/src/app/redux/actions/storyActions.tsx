import {IStory} from "../../models/story";
import {Action, ActionCreator, Dispatch} from "redux";
import {AxiosError} from "axios";
import {ThunkAction} from "redux-thunk";
import storiesService from "../../services/storiesService";
import { IStoriesState } from "../reducers/storyReducer";
import {ICreateStory} from "../../models/createStory";
import { ICreateStoryState} from "../reducers/createStoryReducer";

// Actions
export interface IFetchStoriesAction extends Action<'FETCH_STORIES'> { }

export interface IFetchStoriesSuccessAction extends Action<'FETCH_STORIES_SUCCESS'> {
    stories: IStory[]
}

export interface IFetchStoriesErrorAction extends Action<'FETCH_STORIES_ERROR'> {
    error: AxiosError
}

export interface ICreateStoryAction extends Action<'CREATE_STORY'> {
    storyText: string
}

export interface ICreateStorySuccessAction extends Action<'CREATE_STORY_SUCCESS'> { }

export interface ICreateStoryErrorAction extends Action<'CREATE_STORY_ERROR'> {
    error: AxiosError
}

// Action Types
export type FetchStoriesActions = 
    | IFetchStoriesAction
    | IFetchStoriesSuccessAction
    | IFetchStoriesErrorAction;

export type CreateStoryActions =
    | ICreateStoryAction
    | ICreateStorySuccessAction
    | ICreateStoryErrorAction;


// Action Creator
export const getStoriesActionCreator: ActionCreator<
    ThunkAction<
        Promise<IFetchStoriesSuccessAction | IFetchStoriesErrorAction>,
        IStoriesState,
        null,
        IFetchStoriesSuccessAction
        >
    > = () => async (dispatch: Dispatch) => {
        const fetchStoriesAction: IFetchStoriesAction = {
            type: 'FETCH_STORIES'
        }
        dispatch(fetchStoriesAction);

        try {
            const stories = await storiesService.getStories();

            const fetchStoriesSuccess: IFetchStoriesSuccessAction = {
                type: 'FETCH_STORIES_SUCCESS',
                stories: stories
            }

            return dispatch(fetchStoriesSuccess);

        } catch (error) {
            // Catch error fetching random person and set in redux
            console.log('error in action creator')
            const axiosError = error as AxiosError
            const fetchStoriesError: IFetchStoriesErrorAction = {
                type: 'FETCH_STORIES_ERROR',
                error: axiosError
            }
            return dispatch(fetchStoriesError)
        }
    }

export const createStoryActionCreator: ActionCreator<
    ThunkAction<
        Promise<ICreateStorySuccessAction | ICreateStoryErrorAction>,
        ICreateStoryState,
        null,
        ICreateStorySuccessAction
        >
    > = (storyText: string) => async (dispatch: Dispatch) => {

    const createStoryAction: ICreateStoryAction = {
        type: 'CREATE_STORY',
        storyText: storyText
    }
    dispatch(createStoryAction);

    try {
        const storyToCreate: ICreateStory = {
            storyText: storyText
        }
        await storiesService.createStory(storyToCreate);

        const createStorySuccess: ICreateStorySuccessAction = {
            type: 'CREATE_STORY_SUCCESS'
        }

        return dispatch(createStorySuccess);

    } catch (error) {
        // Catch error fetching random person and set in redux
        console.log('error in action creator')
        const axiosError = error as AxiosError
        const createStoryError: ICreateStoryErrorAction = {
            type: 'CREATE_STORY_ERROR',
            error: axiosError
        }
        return dispatch(createStoryError)
    }
}
