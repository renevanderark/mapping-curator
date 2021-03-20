import xhr from "xhr";
import { Dispatch } from "redux";
import { AppState } from "..";
import { MappingsEditorAction, MappingsEditorActionTypes } from "./interfaces";


export default function(dispatch : Dispatch<MappingsEditorAction>, getState : () => AppState)  {
    const fetchTargetFields = () => 
        xhr({
            method: "GET",
            url: `/mappings/target-fields`,
            headers: {
                "Accept": "application/json"
            }
        }, (err, resp, body) => {
            dispatch({
                type: MappingsEditorActionTypes.RECEIVE_TARGET_FIELDS,
                payload: JSON.parse(body)
            });
        });

    return {
        fetchTargetFields: fetchTargetFields
    }
}