import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../..';
import { MappingsEditorState } from '../interfaces';

interface MappingsEditorProps extends MappingsEditorState {
    addMapping: (fieldId : number) => void
}

const MappingsEditor : React.FunctionComponent<MappingsEditorProps> = ({fieldMappings, targetFields, addMapping}) => (
    <div>
        <div>
            <label>Mapping toevoegen: </label>
            <select value={-1} onChange={(ev) => addMapping(parseInt(ev.target.value))}>
                <option value={-1}>- maak een keuze -</option>
                {targetFields.map((targetField, idx) => (
                    <option key={`${targetField.id}`} value={targetField.id}>{targetField.name}</option>
                ))}
            </select>
        </div>

        <pre>{JSON.stringify(targetFields, null, 2)} <br/> {JSON.stringify(fieldMappings, null, 2)} </pre>
    </div>
);

export default connect((state : AppState) => ({
    ...state.mappingsEditor
}))(MappingsEditor);
