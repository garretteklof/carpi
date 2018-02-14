import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLevel from './DashboardLevel'
import DiemListDoughnut from './DiemListDoughnut'
import DiemList from './DiemList'

const Dashboard = () => (
	<section className='section'>
		<div className='container'>
			<DashboardLevel />
			<div className='columns'>
				<div className='column is-two-fifths'>
					<DiemListDoughnut />
				</div>
				<div className='column'>
					<DiemList />
				</div>
			</div>
		</div>
	</section>
)

export default Dashboard