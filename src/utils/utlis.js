import { axiosReq } from "../api/axiosDefaults"

export const fecthMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosReq.get(resource.next)
        setResource(prevResource => ({
            ...prevResource,
            next:data,
            /*reduce method to loop through new page of results*/ 
            results: data.results.reduce((acc, cur) => {
                /*compare each id to avoid duplicates showing*/
                return acc.some(accResult => accResult.id === cur.id) 
                ? acc
                : [...acc, cur];
            }, prevResource.results)
        }));
    } catch(err) {}
};