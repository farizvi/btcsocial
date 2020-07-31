import axios from 'axios';
import {IStory} from "../models/story";
import {ICreateStory} from "../models/createStory";

const url = '/api/stories';

const getStories = async (): Promise<IStory[]> => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await axios.get(url, config);

    return response.data.stories;
}

const createStory = async (story: ICreateStory) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    console.log(story)
    await axios.post(url, JSON.stringify(story), config);
}

const storiesService = {
    getStories,
    createStory
}

export default storiesService;
