import * as React from 'react';
import { FieldMapping, TargetField } from "../interfaces";
import TargetFieldSelect from './TargetFieldSelect';

interface MappingFormRowProps {
    fieldMapping : FieldMapping
    targetFields : Array<TargetField>
}

const MappingFormRow : React.FunctionComponent<MappingFormRowProps> = ({fieldMapping, targetFields}) => (
    <div>
        <input type="text" placeholder="xpath..." value={fieldMapping.xpath} onChange={(ev) => console.log(`TODO: update xpath to ${ev.target.value}`)} />
        <TargetFieldSelect value={fieldMapping.fieldId} 
            targetFields={targetFields} 
            onChange={(fieldId) => console.log(`TODO: update to field ${fieldId}`)} />
        <button onClick={() => console.log(`TODO: delete ${fieldMapping.id}`)}>Verwijderen</button>
    </div>
)

export default MappingFormRow;