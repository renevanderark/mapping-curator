import { MappingsEditorAction, MappingsEditorActionTypes, MappingsEditorState } from "./interfaces";

const initialState : MappingsEditorState = {
    fieldMappings: [],
    targetFields: [],
    evalResults: {}
}

export default function(state :  MappingsEditorState, action : MappingsEditorAction) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case MappingsEditorActionTypes.RECEIVE_TARGET_FIELDS:
            return {
                ...state,
                targetFields: action.payload
            }
        case MappingsEditorActionTypes.RECEIVE_MAPPINGS:
            return {
                ...state,
                fieldMappings: action.payload
            }
        case MappingsEditorActionTypes.RECEIVE_EVAL_RESULTS:
            return {
                ...state,
                evalResults: action.payload
            }
        default:
            return state;
    }
}