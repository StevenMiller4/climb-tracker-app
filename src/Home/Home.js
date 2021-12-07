import React, { Component } from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import Project from '../Project/Project'
import './Home.css'

class Home extends Component {

    state = {
        showSignUp: false,
        showSignIn: false
    };
    
    showSignUp = e => {
        this.setState({
            showSignUp: !this.state.showSignUp
        })
    }
    
    showSignIn = e => {
        this.setState({
            showSignIn: !this.state.showSignIn
        });
    }

    render() {
        return (
            <div className='Home'>
                <header className='Home__header'>
                    <h1>Climb Tracker</h1>
                </header>
                <main className='Home__main'>
                    <section>
                        <h3>An easy way to keep tabs on your progress as a climber.</h3>
                        <p>Whether you fancy outdoor, bouldering, top-rope, or lead climbing, Climb Tracker can record your projects and share your betas with others.</p>
                    </section>
                    <section className='Home__SignUp-SignIn'>
                        <section className='Home__SignUp'>
                            <header>
                                <h4>Begin Your Tracking Today</h4>
                            </header>
                                <button
                                    className='Home__SignUp-btn'
                                    onClick={e => {
                                        this.showSignUp(e);
                                    }}
                                > 
                                    Sign Up 
                                </button>
                            <SignUp 
                                showSignUp={this.state.showSignUp}
                                onClose={this.showSignUp}
                            />
                        </section>
                        <section className='Home__SignIn'>
                            <header>
                                <h4>Sign In Here</h4>
                            </header>
                                <button
                                    className='Home__SignIn-btn'
                                    onClick={e => {
                                        this.showSignIn(e);
                                    }}
                                > 
                                    Sign In 
                                </button>
                            <SignIn 
                                showSignIn={this.state.showSignIn}
                                onClose={this.showSignIn}
                            />
                        </section>
                    </section>
                    <section>
                        <h3>- Example -</h3>
                        <Project 
                            title='First V3'
                            date='October 30, 2021'
                            description="After three months of climbing, I finally completed my first V3. It was a simpler route for this type of difficulty, but I am unfamiliar with using undercling holds so it was new to me. Either way, after working on V1's and V2's for a while I was hyped to finally finish a V3!"
                            type='Bouldering'
                            location='San Diego'
                            difficulty='V3'
                            status='Completed'
                        />
                    </section>
                </main>
            </div>
        )
    }
}

export default Home