import { Request } from "express";

export type AppReq = Request & { user: { _id: string } };
