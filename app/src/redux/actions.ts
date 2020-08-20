export const UPDATE_COUNT = "UPDATE_COUNT";
export const UPDATE_DATA = "UPDATE_DATA";
export const LOADING = "LOADING";

const getCount = (count : any) => ({
    type: UPDATE_COUNT,
    count
});

const updateData = (searchResult: any) => ({
    type: UPDATE_DATA,
    searchResult
});

const getLoading = (isLoading: boolean) => ({
    type: LOADING,
    isLoading
})

export { getCount, updateData, getLoading };