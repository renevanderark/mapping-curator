import xhr from "xhr";
import { Dispatch } from "redux";
import { AppState } from "..";
import { FieldMapping, MappingsEditorAction, MappingsEditorActionTypes } from "./interfaces";


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

    const fetchMappings = () => 
        xhr({
            method: "GET",
            url: `/mappings/mappings`,
            headers: {
                "Accept": "application/json"
            }
        }, (err, resp, body) => {
            dispatch({
                type: MappingsEditorActionTypes.RECEIVE_MAPPINGS,
                payload: JSON.parse(body)
            });
        });
    
    const addMapping = (fieldId : number) =>
        xhr({
            method: "POST",
            url: `/mappings/mappings`,
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                fieldId: fieldId
            })
        }, (err, resp, body) => {

            if (!err && resp.statusCode >= 200 && resp.statusCode < 300) {
                console.log(body);
                fetchMappings();
            }
        });

    const deleteMapping = (id : number) =>
        xhr({
            method: "DELETE",
            url: `/mappings/mappings`,
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        }, (err, resp, body) => {

            if (!err && resp.statusCode >= 200 && resp.statusCode < 300) {
                console.log(body);
                fetchMappings();
            }
        });
    
    const updateMapping = (fieldMapping : FieldMapping) => 
        xhr({
            method: "PUT",
            url: `/mappings/mappings`,
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(fieldMapping)
        }, (err, resp, body) => {

            if (!err && resp.statusCode >= 200 && resp.statusCode < 300) {
                console.log(body);
                fetchMappings();
            }
        });

    return {
        fetchTargetFields: fetchTargetFields,
        fetchMappings: fetchMappings,
        addMapping: addMapping,
        deleteMapping: deleteMapping,
        updateMapping: updateMapping
    }
}