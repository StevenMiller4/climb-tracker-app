import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../ProjectList/ProjectList'
import './Project.css'
import PropTypes from 'prop-types'

class Project extends Component {

    render() {
        const { title, date, description, type, location, difficulty, status, id } = this.props
        return (
            <div className='Project'>
                <h2 className='Project__title'>
                    {title}
                </h2>
                <div className='Project__dates'>
                    <div className='Project__dates-added'>
                        <span className="Date">
                            {date}
                        </span>
                    </div>
                </div>
                <hr />
                <div className='Project__description'>
                    <span>
                        {description}
                    </span>
                </div>
                <div className='Project__list'>
                    <ProjectList
                        type={type}
                        location={location}
                        difficulty={difficulty}
                        status={status}
                    />
                </div>
                <div className='Project__button-container'>
                    <button
                        className='Project__edit-project-button'
                        type='button'
                        tag={Link}
                        to={`/edit-route`}
                    >
                        Edit
                    </button>
                    <button
                        className='Project__delete-project-button'
                        type='button'
                        id={this.props.id}
                        onClick={this.handleClickDelete}
                    >
                        Delete
                    </button>
                    <hr />
                </div>
            </div>
        )
    }

}

export default Project

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}