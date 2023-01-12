import { Request, Response, NextFunction } from "express";

export default function errorHandler(incomingError: any, req: Request, res: Response, next: NextFunction) {
    console.error(incomingError)

    const errors = {
        conflict: { statusCode: 409, defaultMessage: "Conflict" },
        not_found: { statusCode: 404, defaultMessage: "Not found" },
        unauthorized: { statusCode: 401, defaultMessage: "Unauthorized" },
        unprocessable_entity: { statusCode: 422, defaultMessage: "Unprocessable entity" },
        internal_server_error: { statusCode: 500, defaultMessage: "Internal server error" } 
    }

    const { type: errorType, message: receivedMessage } = incomingError;

    if(!errors[errorType]) 
        return res.status(errors.internal_server_error.statusCode).send(errors.internal_server_error.defaultMessage)

    return res.status(errors[errorType].statusCode)
              .send(receivedMessage ?? errors[errorType].defaultMessage)
}