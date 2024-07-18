export type IList = {
    name: string;
    value: string;
};

export type IFeatures = {
    title: string;
    list: IList[];
};

export type ICloudinaryObj = {
    access_control: null,
    access_mode: string,
    aspect_ratio: number,
    asset_id: string,
    backup_bytes: number,
    bytes: number,
    created_at: string,
    created_by: { access_key: string, custom_id: string, external_id: string },
    etag: string,
    filename: string,
    folder: string,
    format: string,
    height: number,
    pixels: number,
    public_id: string,
    resource_type: string,
    secure_url: string,
    status: string,
    type: string,
    uploaded_at: string,
    uploaded_by: { access_key: string, custom_id: string, external_id: string },
    url: string,
    version: number,
    width: number
};

export type IPhotosList = {
    src: string;
    width: number;
    height: number;
    title: string;
}

export type IAllImages = {
    folder: string;
    list: IPhotosList[];
}

export interface IImagesState {
    mockUps: IPhotosList[];
    allImages: IAllImages[];
}