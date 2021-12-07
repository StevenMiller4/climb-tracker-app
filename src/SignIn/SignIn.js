import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SignIn.css'

class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            email: '',
            password: ''
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const userProfile = {
            email: e.target['profile-email'].value,
            password: e.target['profile-password'].value,
        }
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e)
        this.setState({
            email: '',
            password: '',
        })
    }

    render() {
        if(!this.props.showSignIn) {
            return null;
        }
        return (
            <div className='SignIn'>
                <section className='SignIn__form'>
                    <form onSumbit={this.handleSubmit}>
                        <div className='field'>
                            <label htmlFor='profile-email-input'>
                                Email:
                            </label>
                            <input type='text' name='profile-email' value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                        <div className='field'>
                            <label htmlFor='profile-password-input'>
                                Password:
                            </label>
                            <input type='password' name='profile-password' value={this.state.password} onChange={this.handlePasswordChange} />
                        </div>
                        <div className='SignIn__btn-container'>
                            <button className='SignIn__submit' type='submit'>
                                Submit
                            </button>
                            <button className='SignIn__cancel' onClick={this.onClose}>
                                Close
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default SignIn

SignIn.propTypes = {
    onClose: PropTypes.func.isRequired,
    showSignIn: PropTypes.bool.isRequired
}