import * as React from 'react';
import { FieldMapping, TargetField } from "../interfaces";
import TargetFieldSelect from './TargetFieldSelect';
import XpathInputField from './XpathInputField';

interface MappingFormRowProps {
    fieldMapping : FieldMapping
    targetFields : Array<TargetField>
    deleteMapping : (id : number) => void
    updateMapping : (fieldMapping : FieldMapping) => void

}

const MappingFormRow : React.FunctionComponent<MappingFormRowProps> = ({fieldMapping, targetFields, deleteMapping, updateMapping}) => (
    <div>
        <XpathInputField fieldValue={fieldMapping.xpath} validationError={fieldMapping.validationError}
            onChange={(xpath) => updateMapping({...fieldMapping, xpath: xpath})} />
        
        <TargetFieldSelect value={fieldMapping.fieldId} 
            targetFields={targetFields} 
            onChange={(fieldId) => updateMapping({...fieldMapping, fieldId: fieldId})}
        />
        <button onClick={() => deleteMapping(fieldMapping.id)}>Verwijderen</button>
        <span style={{color: "red"}}>{fieldMapping.validationError}</span>
    </div>
)

export default MappingFormRow;