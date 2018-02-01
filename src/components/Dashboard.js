import React from 'react';
import AddDiem from './AddDiem';
import { Link } from 'react-router-dom';

const Dashboard = () => (
	<div>
		This is the dashboard!
		<Link to='/create'>Add Diem </Link>
	</div>
);

export default Dashboard;