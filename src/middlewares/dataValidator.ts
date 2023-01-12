import { schema } from "./types";
import { NextFunction, Request, Response } from "express";
import dataValidatorAdapter from "../adapters/dataValidator";

export default function dataValidator(req: Request, res: Response, next: NextFunction, schema: schema) {
    const incomingDataIsValid = dataValidatorAdapter(schema).verify(req.body);
    if(!incomingDataIsValid) throw { type: "unprocessable_entity" }
    return next();
}