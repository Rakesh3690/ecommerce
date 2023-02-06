import React from 'react'
import Team from '../components/Team'
import persons from './persons'
export default function TeamDetails() {
    const members = persons.map(people => {
        return (
            <div>
                <Team
                    member_image={people.image}
                    member_name={people.name}
                    member_role={people.role}
                />
            </div>
        )
    })
    return (
        <div className='team_details'>
            {members}
        </div>
    )
}
