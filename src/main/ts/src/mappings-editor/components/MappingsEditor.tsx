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
}

const MappingsEditor : React.FunctionComponent<MappingsEditorProps> = ({fieldMappings, targetFields, addMapping, deleteMapping, updateMapping}) => (
    <div>
        <div>
            <label>Mapping toevoegen: </label>
            <TargetFieldSelect value={-1} targetFields={targetFields} onChange={addMapping} />
        </div>
        {fieldMappings.map((fieldMapping) => (
            <MappingFormRow key={`${fieldMapping.id}`} fieldMapping={fieldMapping} targetFields={targetFields}
                deleteMapping={deleteMapping} updateMapping={updateMapping} />
        ))}

        <pre>{JSON.stringify(targetFields, null, 2)} <br/> {JSON.stringify(fieldMappings, null, 2)} </pre>
    </div>
);

export default connect((state : AppState) => ({
    ...state.mappingsEditor
}))(MappingsEditor);
