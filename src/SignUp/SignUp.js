import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SignUp.css'

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            name: '',
            email: '',
            password: '',
            repeatPw: ''
        }
    }

    handleNameChange = (e) => {
        const { value } = e.target
        this.setState({
            name: value
        })
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

    handleRepeatChange = (e) => {
        this.setState({
            repeatPw: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const newProfile = {
            name: e.target['profile-name'].value,
            email: e.target['profile-email'].value,
            password: e.target['profile-password'].value,
            repeatPw: e.target['profile-repeatPw'].value,
        }
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e)
        this.setState({
            name: '',
            email: '',
            password: '',
            repeatPw: ''
        })
    }

    render() {
        if(!this.props.showSignUp) {
            return null;
        }
        return (
            <div className='SignUp'>
                <section className='SignUp__form'>
                    <h2>Sign Up</h2>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <form onSumbit={this.handleSubmit}>
                        <div className='field'>
                            <label htmlFor='profile-name-input'>
                                Name:
                            </label>
                            <input type='text' name='profile-name' value={this.state.name} onChange={this.handleNameChange} />
                        </div>
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
                        <div className='field'>
                            <label htmlFor='profile-repeatPw-input'>
                                Repeat Password:
                            </label>
                            <input type='password' name='profile-repeatPw' value={this.state.repeatPw} onChange={this.handleRepeatChange} />
                        </div>
                        <div className='SignUp__btn-container'>
                            <button className='SignUp__submit' type='submit'>
                                Submit
                            </button>
                            <button className='SignUp__cancel' onClick={this.onClose}>
                                Close
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default SignUp

SignUp.propTypes = {
    onClose: PropTypes.func.isRequired,
    showSignUp: PropTypes.bool.isRequired
}