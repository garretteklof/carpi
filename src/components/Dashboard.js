import React from 'react'
import { Link } from 'react-router-dom'
import DiemList from './DiemList'
import DiemListFilters from './DiemListFilters'

const Dashboard = () => (
	<div>
		<Link to='/create'>Add Diem</Link>
		<DiemListFilters />
		<DiemList />
	</div>
)

export default Dashboard