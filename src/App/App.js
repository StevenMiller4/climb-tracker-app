import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import AddProject from '../AddProject/AddProject'
import EditProject from '../EditProject/EditProject'
import './App.css'


class App extends Component {

    render() {
        return (
            <div className='App'>
                <Nav />
                    <section>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route path='/profile' element={<Profile />} />
                            <Route path='/add-route' element={<AddProject />} />
                            <Route path='/edit-route' element={<EditProject />} />
                        </Routes>
                    </section>
                <footer className='App__footer'>Footer</footer>
            </div>
        )
    }

}

export default App;