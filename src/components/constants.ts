export interface routeType {
    path : string,
    title : string
}

export const adminRoutes : routeType[]= [
    {path : '/', title : 'Home'},
    {path : '/services', title : 'Services'},
    {path : '/contact', title : 'Contact'},
    {path : '/about', title : 'About'},
]

export const employeeRoutes : routeType[] = [
    {path : '/', title : 'Home'},
    {path : '/about', title : 'About'},
]