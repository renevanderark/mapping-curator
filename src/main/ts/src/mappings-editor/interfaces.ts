import { Action } from "redux";

export enum MappingsEditorActionTypes {
    RECEIVE_TARGET_FIELDS = "RECEIVE_TARGET_FIELDS",
    RECEIVE_MAPPINGS = "RECEIVE_MAPPINGS",
    RECEIVE_EVAL_RESULTS = "RECEIVE_EVAL_RESULTS"
}

export interface MappingsEditorAction extends Action<MappingsEditorActionTypes> {
    payload : Array<FieldMapping> | Array<TargetField> | { [key : string] : Array<string> }
}

export interface FieldMapping {
    id : number
    fieldId : number
    xpath : string
    validationError : string
}

export interface TargetField {
    id : number
    name : string
}

export interface MappingsEditorState {
    targetFields : Array<TargetField>
    fieldMappings : Array<FieldMapping>
    evalResults :  { [key : string] : Array<string> }
}