import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import { AppState } from "..";
import mkActions from "./actions";
import MappingsEditor from "./components/MappingsEditor";

export function initializeMappingsEditor(store : Store ) {

    const { addMapping, deleteMapping, updateMapping, applyMappings, fetchTargetFields, fetchMappings } = mkActions(store.dispatch, store.getState);

    ReactDOM.render((
        <Provider store={store}>
            <MappingsEditor addMapping={addMapping} deleteMapping={deleteMapping} updateMapping={updateMapping} applyMappings={applyMappings} />
        </Provider>
    ), document.getElementById("mappings-editor"))


    fetchTargetFields();
    fetchMappings();
    applyMappings();
}
