import Api from "../../API/Api";
const api = new Api();
const endPoint = 'banner';


export const getBannerDataApi = async () => {
    return new Promise (async (resolve, reject) => {
        try{
            const result = await api.get(`${endPoint}.json`)
            resolve(result.data);
            console.log('this is data in api file --->', result);
        }catch(error){
            reject(error)
        }
    })
}