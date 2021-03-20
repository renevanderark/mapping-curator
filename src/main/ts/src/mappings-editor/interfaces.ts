import { Action } from "redux";

export enum MappingsEditorActionTypes {
    RECEIVE_TARGET_FIELDS = "RECEIVE_TARGET_FIELDS",
    RECEIVE_MAPPINGS = "RECEIVE_MAPPINGS"
}

export interface MappingsEditorAction extends Action<MappingsEditorActionTypes> {
    payload : Array<FieldMapping> | Array<TargetField>
}

interface FieldMapping {
    id : number
    fieldId : number
    xpath : string
}

interface TargetField {
    id : number
    name : string
}

export interface MappingsEditorState {
    targetFields : Array<TargetField>
    fieldMappings : Array<FieldMapping>
}