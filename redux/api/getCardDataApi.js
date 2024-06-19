import Api from "../../API/Api"
const api = new Api();
const endpoint = 'card'


export const getCardDataApi = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await api.get(`${endpoint}.json`)
            resolve(result?.data)
            console.log('this is card data in api file ---->', result.data)
        } catch (error) {
            console.log(error);
        }
    })
}