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

const MappingsEditor : React.FunctionComponent<MappingsEditorProps> = ({fieldMappings, targetFields, evalResults, addMapping, deleteMapping, updateMapping, applyMappings}) => {
    const flatEvalResults : Array<{field : string, value: string}> = [];
    Object.keys(evalResults).forEach((fieldName) => {
        evalResults[fieldName].forEach((mapped) => {
            flatEvalResults.push({field: fieldName, value: mapped});
        })
    })
    return (
        <div style={{height: "230px"}}>
            <div style={{float: "left", width: "calc(100% - 1000px)", height: "100%"}}>
                <div>
                    <label>Mapping toevoegen: </label>
                    <TargetFieldSelect value={-1} targetFields={targetFields} onChange={addMapping} />
                    <span style={{display: "inline-block", float: "right"}}>
                        <button onClick={applyMappings}>Mapping uitvoeren</button>
                    </span>
                </div>
                {fieldMappings.map((fieldMapping) => (
                    <MappingFormRow key={`${fieldMapping.id}`} fieldMapping={fieldMapping} targetFields={targetFields}
                        deleteMapping={deleteMapping} updateMapping={updateMapping} />
                ))}
            </div>
            <div style={{float: "left", width: "1000px", height: "100%"}}>
                
                <table>
                    <thead>
                        <tr>
                            <th>Doelveld</th>
                            <th>Waarde</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flatEvalResults.map(({field, value}, idx) => (
                            <tr key={`${idx}`}>
                                <td>{field}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default connect((state : AppState) => ({
    ...state.mappingsEditor
}))(MappingsEditor);
