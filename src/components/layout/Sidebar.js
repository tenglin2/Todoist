import React from 'react';
import { FaChevronDown, FaInbox, FaRegCalenderAlt, FaRegCalendar } from 'react-icons/fa';

export const Sidebar = function() {
	return (
		<div className="sidebar" data-testid="sidebar">
			{/* Following BEM style which is block, element, modifier */}
			<ul className="sidebar__generic">
				<li>
					<span>
						<FaInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li>
					<span>
						<FaRegCalendar />
					</span>
					<span>Today</span>
				</li>
				<li>
					<span>
						<FaRegCalendar />
					</span>
					<span>Next 7 Days</span>
				</li>
			</ul>

			<div className="sidebar__middle">
				<span>
					<FaChevronDown />
				</span>
				<h2>Projects</h2>
			</div>

			<ul className="sidebar__projects">Projects will be here</ul>
		</div>
	);
};
