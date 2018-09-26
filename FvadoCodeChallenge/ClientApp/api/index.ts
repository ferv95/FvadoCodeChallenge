import { phoneModel } from "../models/phoneModel";



const getPhones = (): Promise<phoneModel[]> => {

    const getPhonesUrl = 'https://fvadocodechallengeapi.azurewebsites.net/api/Phones';

    return fetch(getPhonesUrl).then((response) => (response.json())).then(mapPhonesModel);

}

const mapPhonesModel = (response: any): phoneModel[] => {
    const phones: phoneModel[] = [];
    response.forEach((phonejson: any) => {
        const phone: phoneModel = {
            ID: phonejson.id,
            Brand: phonejson.brand,
            Color: phonejson.color,
            Description: phonejson.description,
            ImgURL: phonejson.imgURL,
            Model: phonejson.model,
            Price: phonejson.price,
        };
        phones.push(phone);
    });
    return phones;
}

export const phoneAPI = {
    getPhones,
}