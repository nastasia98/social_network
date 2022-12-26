export const requireField = value =>{
    if (value) return undefined;
    return 'Field is empty. Please type something'
}

export const maxLengthCreator = (length) => (value) => {
    if(value && value.length < length) return undefined;
    return `Text's length should be less than ${length} symbols`
}
