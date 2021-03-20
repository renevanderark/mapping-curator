import * as React from 'react';
import { FieldMapping, TargetField } from "../interfaces";

interface TargetFieldSelectProps {
    value : number
    targetFields : Array<TargetField>
    onChange : (fieldId : number) => void
}

const TargetFieldSelect : React.FunctionComponent<TargetFieldSelectProps> = ({value, targetFields, onChange}) => (
    <select value={value} onChange={(ev) => onChange(parseInt(ev.target.value))}>
        {value === -1 ? (<option value={-1}>- maak een keuze -</option>) : null }
        {targetFields.map((targetField) => (
            <option key={`${targetField.id}`} value={targetField.id}>{targetField.name}</option>
        ))}
    </select>
)

export default TargetFieldSelect;