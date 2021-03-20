import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../..';
import { MappingsEditorState } from '../interfaces';

interface MappingsEditorProps extends MappingsEditorState {

}

const MappingsEditor : React.FunctionComponent<MappingsEditorProps> = ({fieldMappings, targetFields}) => (
    <pre>{JSON.stringify(targetFields, null, 2)}</pre>
);

export default connect((state : AppState) => ({
    ...state.mappingsEditor
}))(MappingsEditor);
