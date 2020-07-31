import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {createStoryActionCreator} from "../../app/redux/actions/storyActions";

const AddStory = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data.storyText)
        dispatch(createStoryActionCreator(data.storyText));
        history.push('/');
    };

    return (
        <div id="wrapper-main">
            <div id="wrapper-grid">
                <div className="container">
                    <form>
                        <h3>Create Story</h3>
                        <textarea
                            aria-invalid={errors.storyText ? "true" : "false"}
                            name="storyText"
                            ref={register({ required: true })}
                        ></textarea>
                        <br />
                        { errors.storyText && (
                            <span role="alert">
                                This field is required
                            </span>
                        )}
                        <a onClick={handleSubmit(onSubmit)}>
                            <div className="button">
                                Add Story
                            </div>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddStory;
