import { MappingsEditorAction, MappingsEditorActionTypes, MappingsEditorState } from "./interfaces";

const initialState : MappingsEditorState = {
    fieldMappings: [],
    targetFields: []
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
        default:
            return state;
    }
}