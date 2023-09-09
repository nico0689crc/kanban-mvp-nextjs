import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum TaskPriorityEnum {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGHT = "HIGHT"
}

export enum TaskEnum {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export enum StepEnums {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export enum ProjectEnums {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}



type EagerTaskComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment: string;
  readonly TaskCommentsBelongsToOneUser: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskCommentsTaskCommentsBelongsToOneUserId: string;
}

type LazyTaskComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment: string;
  readonly TaskCommentsBelongsToOneUser: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskCommentsTaskCommentsBelongsToOneUserId: string;
}

export declare type TaskComments = LazyLoading extends LazyLoadingDisabled ? EagerTaskComments : LazyTaskComments

export declare const TaskComments: (new (init: ModelInit<TaskComments>) => TaskComments) & {
  copyOf(source: TaskComments, mutator: (draft: MutableModel<TaskComments>) => MutableModel<TaskComments> | void): TaskComments;
}

type EagerStepsTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StepsTasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order: number;
  readonly StepsTasksBelongsToOneStep: Steps;
  readonly StepsTasksActionPermormerBelongToUser: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly stepsTasksStepsTasksBelongsToOneStepId: string;
  readonly stepsTasksStepsTasksActionPermormerBelongToUserId: string;
}

type LazyStepsTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StepsTasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly order: number;
  readonly StepsTasksBelongsToOneStep: AsyncItem<Steps>;
  readonly StepsTasksActionPermormerBelongToUser: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly stepsTasksStepsTasksBelongsToOneStepId: string;
  readonly stepsTasksStepsTasksActionPermormerBelongToUserId: string;
}

export declare type StepsTasks = LazyLoading extends LazyLoadingDisabled ? EagerStepsTasks : LazyStepsTasks

export declare const StepsTasks: (new (init: ModelInit<StepsTasks>) => StepsTasks) & {
  copyOf(source: StepsTasks, mutator: (draft: MutableModel<StepsTasks>) => MutableModel<StepsTasks> | void): StepsTasks;
}

type EagerTasksUsersAssigneed = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TasksUsersAssigneed, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TasksUsersAssigneedBelongsToUser: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tasksUsersAssigneedTasksUsersAssigneedBelongsToUserId: string;
}

type LazyTasksUsersAssigneed = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TasksUsersAssigneed, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TasksUsersAssigneedBelongsToUser: AsyncItem<Users>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tasksUsersAssigneedTasksUsersAssigneedBelongsToUserId: string;
}

export declare type TasksUsersAssigneed = LazyLoading extends LazyLoadingDisabled ? EagerTasksUsersAssigneed : LazyTasksUsersAssigneed

export declare const TasksUsersAssigneed: (new (init: ModelInit<TasksUsersAssigneed>) => TasksUsersAssigneed) & {
  copyOf(source: TasksUsersAssigneed, mutator: (draft: MutableModel<TasksUsersAssigneed>) => MutableModel<TasksUsersAssigneed> | void): TasksUsersAssigneed;
}

type EagerTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly priority: TaskPriorityEnum | keyof typeof TaskPriorityEnum;
  readonly due_to?: string | null;
  readonly ReporterUser: Users;
  readonly title: string;
  readonly tags?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tasksReporterUserId: string;
}

type LazyTasks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tasks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description: string;
  readonly priority: TaskPriorityEnum | keyof typeof TaskPriorityEnum;
  readonly due_to?: string | null;
  readonly ReporterUser: AsyncItem<Users>;
  readonly title: string;
  readonly tags?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tasksReporterUserId: string;
}

export declare type Tasks = LazyLoading extends LazyLoadingDisabled ? EagerTasks : LazyTasks

export declare const Tasks: (new (init: ModelInit<Tasks>) => Tasks) & {
  copyOf(source: Tasks, mutator: (draft: MutableModel<Tasks>) => MutableModel<Tasks> | void): Tasks;
}

type EagerSteps = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Steps, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly order: number;
  readonly status: StepEnums | keyof typeof StepEnums;
  readonly projectsID: string;
  readonly OneStepBelongsToProject: Projects;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySteps = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Steps, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly order: number;
  readonly status: StepEnums | keyof typeof StepEnums;
  readonly projectsID: string;
  readonly OneStepBelongsToProject: AsyncItem<Projects>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Steps = LazyLoading extends LazyLoadingDisabled ? EagerSteps : LazySteps

export declare const Steps: (new (init: ModelInit<Steps>) => Steps) & {
  copyOf(source: Steps, mutator: (draft: MutableModel<Steps>) => MutableModel<Steps> | void): Steps;
}

type EagerProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Projects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly status: ProjectEnums | keyof typeof ProjectEnums;
  readonly ProjectUser: Users;
  readonly OneProjectHasManySteps?: Steps[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectsProjectUserId: string;
}

type LazyProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Projects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly status: ProjectEnums | keyof typeof ProjectEnums;
  readonly ProjectUser: AsyncItem<Users>;
  readonly OneProjectHasManySteps: AsyncCollection<Steps>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectsProjectUserId: string;
}

export declare type Projects = LazyLoading extends LazyLoadingDisabled ? EagerProjects : LazyProjects

export declare const Projects: (new (init: ModelInit<Projects>) => Projects) & {
  copyOf(source: Projects, mutator: (draft: MutableModel<Projects>) => MutableModel<Projects> | void): Projects;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly family_name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly family_name: string;
  readonly email: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}