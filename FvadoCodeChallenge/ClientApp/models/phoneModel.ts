export interface phoneModel {
    ID: string;
    Brand: string;
    Model: string;
    ImgURL: string;
    Color: string;
    Description: string;
    Price: number;
}

export const GenerateEmptyPhoneModel = (): phoneModel => {
    const phone: phoneModel = {
        ID: '',
        Brand: '',
        Color: '',
        Description: '',
        ImgURL: '',
        Model: '',
        Price: 0,
    };
    return phone;
}
