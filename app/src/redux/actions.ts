export const UPDATE_COUNT = "UPDATE_COUNT";

export const getCount = (count : any) => ({
    type: UPDATE_COUNT,
    count
});

export default getCount;