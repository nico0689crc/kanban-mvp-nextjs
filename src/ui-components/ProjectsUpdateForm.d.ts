/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Projects } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectsUpdateFormInputValues = {
    title?: string;
    description?: string;
    status?: string;
};
export declare type ProjectsUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectsUpdateFormOverridesProps = {
    ProjectsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ProjectsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjectsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    projects?: Projects;
    onSubmit?: (fields: ProjectsUpdateFormInputValues) => ProjectsUpdateFormInputValues;
    onSuccess?: (fields: ProjectsUpdateFormInputValues) => void;
    onError?: (fields: ProjectsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectsUpdateFormInputValues) => ProjectsUpdateFormInputValues;
    onValidate?: ProjectsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectsUpdateForm(props: ProjectsUpdateFormProps): React.ReactElement;
