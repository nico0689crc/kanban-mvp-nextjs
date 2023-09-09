// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TaskPriorityEnum = {
  "LOW": "LOW",
  "MEDIUM": "MEDIUM",
  "HIGHT": "HIGHT"
};

const TaskEnum = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const StepEnums = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const ProjectEnums = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const { TaskComments, StepsTasks, TasksUsersAssigneed, Tasks, Steps, Projects, Users } = initSchema(schema);

export {
  TaskComments,
  StepsTasks,
  TasksUsersAssigneed,
  Tasks,
  Steps,
  Projects,
  Users,
  TaskPriorityEnum,
  TaskEnum,
  StepEnums,
  ProjectEnums
};