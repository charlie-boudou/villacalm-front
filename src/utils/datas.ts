import { IFeatures } from "./types";
import { TFunction } from 'i18next';

export const featuresInfos = (t: TFunction): IFeatures => {
    return {
        title: t('features'),
        list: [
            { name: t('livingArea'), value: '170 m²' },
            { name: t('bedrooms'), value: t('bedroomsVal') },
            { name: t('bathrooms'), value: t('bathroomsVal') },
            { name: t('terrace'), value: '100 m²' },
            { name: t('pool'), value: t('poolVal') },
            { name: 'Sala', value: '30 m²' },
            { name: t('view'), value: t('viewVal') },
            { name: t('location'), value: 'Khao Phra Village' },
            { name: t('proximity'), value: t('proximityVal') },
            { name: t('availability'), value: t('availabilityVal') },
        ],
    };
};