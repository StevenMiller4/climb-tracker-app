import React from 'react'
import './ProjectList.css'
import PropTypes from 'prop-types'

function ProjectList(props) {
    const { type, location, difficulty, status } = props
    return (
        <>
            <dl className='ProjectList__list'>
                <dt>Type of Climb</dt>
                    <dd>{type}</dd>
                <dt>Location</dt>
                    <dd>{location}</dd>
                <dt>Difficulty</dt>
                    <dd>{difficulty}</dd>
                <dt>Status</dt>
                    <dd>{status}</dd>
            </dl>
        </>
    )
}

export default ProjectList