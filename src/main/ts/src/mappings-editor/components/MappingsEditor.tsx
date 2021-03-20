import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../..';
import { FieldMapping, MappingsEditorState } from '../interfaces';
import MappingFormRow from './MappingFormRow';
import TargetFieldSelect from './TargetFieldSelect';

interface MappingsEditorProps extends MappingsEditorState {
    addMapping : (fieldId : number) => void
    deleteMapping : (id : number) => void
    updateMapping : (fieldMapping : FieldMapping) => void
    applyMappings : () => void
}

const MappingsEditor : React.FunctionComponent<MappingsEditorProps> = ({fieldMappings, targetFields, addMapping, deleteMapping, updateMapping, applyMappings}) => (
    <div>
        <div>
            <label>Mapping toevoegen: </label>
            <TargetFieldSelect value={-1} targetFields={targetFields} onChange={addMapping} />
            <label>Mapping testen: </label>
            <button onClick={applyMappings}>Uitvoeren</button>
        </div>
        {fieldMappings.map((fieldMapping) => (
            <MappingFormRow key={`${fieldMapping.id}`} fieldMapping={fieldMapping} targetFields={targetFields}
                deleteMapping={deleteMapping} updateMapping={updateMapping} />
        ))}
    </div>
);

export default connect((state : AppState) => ({
    ...state.mappingsEditor
}))(MappingsEditor);
