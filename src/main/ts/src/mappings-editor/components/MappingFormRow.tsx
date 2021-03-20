import * as React from 'react';
import { FieldMapping, TargetField } from "../interfaces";
import TargetFieldSelect from './TargetFieldSelect';

interface MappingFormRowProps {
    fieldMapping : FieldMapping
    targetFields : Array<TargetField>
    deleteMapping : (id : number) => void
    updateMapping : (fieldMapping : FieldMapping) => void

}

const MappingFormRow : React.FunctionComponent<MappingFormRowProps> = ({fieldMapping, targetFields, deleteMapping, updateMapping}) => (
    <div>
        <input type="text" placeholder="xpath..." value={fieldMapping.xpath} onChange={(ev) => console.log(`TODO: update xpath to ${ev.target.value}`)} />
        <TargetFieldSelect value={fieldMapping.fieldId} 
            targetFields={targetFields} 
            onChange={(fieldId) => updateMapping({...fieldMapping, fieldId: fieldId})} />
        <button onClick={() => deleteMapping(fieldMapping.id)}>Verwijderen</button>
    </div>
)

export default MappingFormRow;