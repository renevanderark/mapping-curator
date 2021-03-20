import { Action } from "redux";

export enum MappingsEditorActionTypes {
    RECEIVE_TARGET_FIELDS = "RECEIVE_TARGET_FIELDS"
}

export interface MappingsEditorAction extends Action<MappingsEditorActionTypes> {
    payload : Array<TargetField> | FieldMapping
}

interface FieldMapping {
    targetFieldId : number
    xpathValue : string
}

interface TargetField {
    id : number
    name : string
}

export interface MappingsEditorState {
    targetFields : Array<TargetField>
    fieldMappings : Array<FieldMapping>
}