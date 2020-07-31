import React, {useEffect, Fragment} from 'react';
import {IStory} from "../../app/models/story";
import { parseJSON } from 'date-fns';
import Story from "../story/story";
import useStories from "../../app/hooks/useStories";
import {AxiosError} from "axios";
import { Link } from 'react-router-dom';

const Stories = () => {
    const [ stories, fetching, error, fetchStories] = useStories();

    useEffect(() => {
       // @ts-ignore
        fetchStories();
    }, []);

    const data = stories && stories as IStory[];
    const errorMessage = error && (error as AxiosError).message;

    const renderStories = ()  =>
        !fetching &&
        !error &&
        data &&
        data.length > 0 && (
            <div id="wrapper-main">
                <div id="addStory">
                    <Link to='/createStory'>
                        <div className="button">
                            Add Story
                        </div>
                    </Link>
                </div>
                <br />
                <div id="wrapper-grid">
                    {data.map((story: IStory) => (
                            <Story key={story.id}
                                   id={story.id}
                                   created={parseJSON(story.created)}
                                   storyText={story.storyText}
                            />
                    ))
                    }
                </div>
            </div>
        );

    return (
        <Fragment>
            {error && <div>Error: {errorMessage}</div>}
            {fetching ? <div>Fetching stories...</div> : <div>{renderStories()}</div>}
        </Fragment>
    )
};

export default Stories;
