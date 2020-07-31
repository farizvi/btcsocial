import React from 'react';
import '../../app/layout/App.scss';
import { Link } from 'react-router-dom';
import {IStory} from "../../app/models/story";
import { format } from 'date-fns';
import Truncate from 'react-truncate';

const Story = ({id, created, storyText} :IStory) => {
    return (
        <div className="container">
            <p className="date">{format(created, 'MMMM d, yyyy')}</p>
            <p className="story">
                <Truncate lines={3}>
                    {storyText}
                </Truncate>
            </p>
            <br />
            <Link to={'/story/'+id}>
                <div className="button">
                    Read More
                </div>
            </Link>
        </div>
    );
};

export default Story;
