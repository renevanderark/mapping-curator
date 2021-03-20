import { combineReducers, createStore } from "redux";
import { MappingsEditorState } from "./mappings-editor/interfaces";
import { initializeMappingsEditor } from "./mappings-editor/mappings-editor";
import mappingsEditorReducer from "./mappings-editor/reducer";

export interface AppState {
    mappingsEditor : MappingsEditorState
}

const store = createStore(combineReducers({
    mappingsEditor: mappingsEditorReducer
}));

initializeMappingsEditor(store);