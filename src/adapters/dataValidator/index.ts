import { DataValidator } from "./types";
import Schemas from "./schemas";

export default function dataValidatorAdapter(schemaName: string): DataValidator {
    const schema = Schemas[schemaName];

    if(!schema) throw {
        type: "internal_server_error",
        message: "Configuration error, the schema requested to data validator does not exist "
    }

    function verify(data: any) {
        const { error } = schema.validate(data);
        return !error;
    }

    return {
        verify,
    }
}