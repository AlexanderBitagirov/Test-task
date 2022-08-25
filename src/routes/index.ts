import React from "react";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";


export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN = "/",
    CONTACTS = "contacts"
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login}
]


export const privateRoutes: IRoute[] = [
    {path: RouteNames.CONTACTS, element: Contacts}
]
