import React from 'react'
import { Link } from 'react-router-dom'
import DiemList from './DiemList'
const Dashboard = () => (
	<div>
		This is the dashboard!
		<Link to='/create'>Add Diem</Link>
		<DiemList />
	</div>
)

export default Dashboard