import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requireField} from "../../utils/validators/validators";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import styles from './../common/FormsControls/FormsControls.module.css'

const maxLength30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error}) => { //деструктуризация props, теперь не нужно писать props.error  и т.д.
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input} name={'email'} type="text" placeholder={'email'}
                       validate={[requireField, maxLength30]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} type="password" placeholder={'password'}
                       validate={[requireField, maxLength30]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox"/>remember me
            </div>
                { error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return (
            <Navigate replace to="/profile" />
        )
    }
    return <div>
        <h3>Login</h3>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);