export function isEmpty(value) {
    return !value || value.trim().length === 0;
}

export function hasMinLength(value, min) {
    return value && value.trim().length >= min;
}