// Building custom hooks. Not sure what that is. I know that hooks are just a functional way of doing a class component with use state and use effect to replace state constructor values and component lifecycle methods.
import React from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { collatedTasksExist } from '../helpers';

export const useTasks = function(selectedProject) {
	// Initialize tasks state as an empty array.
	const [ tasks, setTasks ] = React.useState([]);
	const [ archivedTasks, setArchivedTasks ] = React.useState([]);

	React.useEffect(
		function() {
			// The empty array means to run it only once and it works by comparing state changes. So for instance if [task] the effect hook would apply only if task changes.
			let unsubscribe = firebase.firestore().collection('tasks').where('userId', '==', 'ountryad');

			unsubscribe =
				selectedProject && !collatedTasksExist(selectedProject)
					? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
					: selectedProject === 'TODAY'
						? (unsusbcribe = unsubscribe.where('date', '==', moment().formate('DD/MM/YYYY')))
						: selectedProject == 'INBOX' || selectedProject === 0
							? (unsubscribe = unsubscribe.where('date', '==', ''))
							: unsubscribe;

			unsubscribe = unsubscribe.onSnapshot((snapshot) => {
				const newTasks = snapshot.docs.map((task) => ({
					id: task.id,
					...task.data()
				}));

				setTasks(
					selectedProject === 'NEXT_7'
						? newTasks.filter(
								(task) =>
									moment(task.data, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true
							)
						: newTasks.filter((task) => task.archived !== true)
				);

				setArchivedTasks(newTasks.filter((task) => task.archived !== false));
			});

			return () => unsubscribe();
		},
		[ selectedProject ]
	);

	return { tasks, archivedTasks };
};

const selectedProject = 1;
const { tasks, archivedTasks } = useTasks(selectedProject);
