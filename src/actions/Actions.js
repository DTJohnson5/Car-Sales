export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const adjoinAttribute = feature => {
    return {type: ADD_FEATURE, payload: feature};
};

export const extractAttribute = feature => {
    return {type: REMOVE_FEATURE, payload: feature};
};