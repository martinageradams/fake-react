export const isObject = (value: any): boolean => typeof value === 'object' && value !== null
export const isText = (value: any): boolean => typeof value === 'string' || typeof value === 'number'
export const isFunction = (value: any): boolean => typeof value === 'function'
export const isString = (value: any): boolean => typeof value === 'string'
export const isArray = (value: any): boolean => Array.isArray(value)
export const isEmpty = (value: any): boolean => value === null || value === undefined
export const isNumber = (value: any): boolean => value === 'number'
