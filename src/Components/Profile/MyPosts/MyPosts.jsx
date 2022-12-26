import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requireField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'Добавить текст поста'}
                validate={[requireField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
 const MyPosts = React.memo((props) => {

        let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likes} avatar={p.avatar}/>);

        let newPostElement = React.createRef();

        let onAddPost = (values) => {
            props.addPost(values.newPostText);
        }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddNewPostReduxForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>);
 })

export default MyPosts