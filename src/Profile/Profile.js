import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Project from '../Project/Project'
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div className='Profile'>
                <div className='Profile__header'>
                    <h2>My Collection</h2>
                </div>
                <div className='Profile__expanded-project'>
                    <Project 
                        title='First V3'
                        date='October 30, 2021'
                        description="After three months of climbing, I finally completed my first V3. It was a simpler route for this type of difficulty, but I am unfamiliar with using undercling holds so it was new to me. Either way, after working on V1's and V2's for a while I was hyped to finally finish a V3!"
                        type='Bouldering'
                        location='San Diego'
                        difficulty='V3'
                        status='Completed'
                    />
                </div>
                <div className='Profile__minimized-project'>
                    <h3>Pink Cloud</h3>
                    <p>October 14, 2021</p>
                    <hr />
                </div>
                <div className='Profile__minimized-project'>
                    <h3>Yellow Cubes</h3>
                    <p>October 12, 2021</p>
                    <hr />
                </div>
            </div>
        )
    }
}

export default Profile