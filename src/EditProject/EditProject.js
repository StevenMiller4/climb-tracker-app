import React, { Component } from 'react'
import './EditProject.css'

class EditProject extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            type: '',
            location: '',
            difficulty: '',
            status: '',
            date: '',
            description: ''
        }
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleTypeChange = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    handleDifficultyChange = (e) => {
        this.setState({
            difficulty: e.target.value
        })
    }

    handleStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleCancelClick = (e) => {
        this.setState({
            title: '',
            type: '',
            location: '',
            difficulty: '',
            status: '',
            date: '',
            description: ''
        })
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render() {
        return(
            <div className='EditProject'>
                <h2>Create a Route</h2>
                    <form
                        className='EditProject__form'
                        onSubmit={this.handleSubmit}
                    >
                        <div className='field'>
                            <label htmlFor='project-title-edit'>
                                Title: 
                            </label>
                            <input type='text' className='project-title-edit' name='project-title' value={this.state.title} onChange={this.handleTitleChange} />
                        </div>
                        <div className='field'>
                            <label htmlFor='project-type-edit'>
                                Type of Climb:
                            </label>
                            <br />
                            <select id='project-type-edit' name='project-type-id' onChange={this.handleTypeChange} >
                                <option value={null}>...</option>
                                <option value='outdoor'>Outdoor</option>
                                <option value='bouldering'>Bouldering</option>
                                <option value='top-rope'>Top-Rope</option>
                                <option value='lead'>Lead</option>
                            </select>
                        </div>
                        <div className='field'>
                            <label htmlFor='location'>
                                Location:
                            </label>
                            <input type='text' className='project-location-edit' name='location' placeholder='San Diego' required onChange={this.handleLocationChange} />
                        </div>
                        <div className='field'>
                            <label htmlFor='project-difficulty-edit'>
                                Difficulty:
                            </label>
                            <br />
                            <select id='project-difficulty-edit' name='project-difficulty-id' onChange={this.handleDifficultyChange} >
                                <option value={null}>...</option>
                                <option value="vb">VB</option>
                                <option value="v0">V0</option>
                                <option value="v1">V1</option>
                                <option value="v2">V2</option>
                                <option value="v3">V3</option>
                                <option value="v4">V4</option>
                                <option value="v5">V5</option>
                                <option value="v6">V6</option>
                                <option value="v7">V7</option>
                                <option value="v8">V8</option>
                                <option value="v9">V9</option>
                                <option value="v10+">V10+</option>
                            </select>
                        </div>
                        <div className='field'>
                            <span>Status of Climb:</span>
                            <br />
                            <input type='radio' id='completed' name='status' value='completed' checked={this.state.status === 'completed'} onChange={this.handleStatusChange} />
                            <label htmlFor='completed'>
                                Completed
                            </label>
                            <br />
                            <input type='radio' id='incomplete' name='status' value='incomplete' checked={this.state.status === 'incomplete'} onChange={this.handleStatusChange} />
                            <label htmlFor='incomplete'>
                                Incomplete
                            </label>
                        </div>
                        <div className='field'>
                            <label htmlFor='date'>
                                Date Completed / Attempted:
                            </label>
                            <br />
                            <input type='date' id='date' name='date' onChange={this.handleDateChange} />
                        </div>
                        <div className='field'>
                            <h4>Description of Route:</h4>
                            <textarea className='project-description-edit' name='description' onChange={this.handleDescriptionChange} />
                        </div>
                        <div className='EditProject-btn-container'>
                            <button className='EditProject__submit' type='submit'>
                                Add Route
                            </button>
                            <button className='EditProject__cancel' type='cancel' onClick={this.handleCancelClick}>
                                Cancel
                            </button>
                        </div>
                    </form>
            </div>
        )
    }
}

export default EditProject