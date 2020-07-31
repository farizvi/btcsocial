import React, {Fragment, useEffect} from "react";
import useStories from "../../app/hooks/useStories";
import {IStory} from "../../app/models/story";
import {AxiosError} from "axios";
import { RouteComponentProps } from'react-router-dom';
import {format, parseJSON} from "date-fns";

interface IDetailParams {
    id: string
}

const StoryDetail: React.FC<RouteComponentProps<IDetailParams>> = (match, id: string) => {
    const [ stories, fetching, error, fetchStories] = useStories();

    useEffect(() => {
        // @ts-ignore
        fetchStories();
    }, []);

    const data = stories && stories as IStory[];
    const errorMessage = error && (error as AxiosError).message;

    const selectedStory: IStory = (data && data.length > 0) && data.filter(d => d.id.toString() === match.match.params.id)[0];

    const renderStory = () =>
        !fetching &&
        !error &&
        data &&
        data.length > 0 &&
        selectedStory !== null && (
            <div id="wrapper-main">
                <div id="wrapper-grid">
                    <div className="container">
                        <p className="date">{format(parseJSON(selectedStory.created), 'MMMM d, yyyy')}</p>
                        <p className="story">{selectedStory.storyText}</p>
                    </div>
                </div>
            </div>
        )


    return (
        <Fragment>
            {error && <div>Error: {errorMessage}</div>}
            {fetching ? <div>Fetching stories...</div> : <div>{renderStory()}</div>}
        </Fragment>
    )
};

export default StoryDetail;
