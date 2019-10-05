import { collatedTasks } from '../constants';

export const collatedTasksExist = function(selectedProject) {
	collatedTasksExist.find((task) => task.key === selectedProject);
};
