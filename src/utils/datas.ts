import { IFeatures } from "./types";
import { TFunction } from 'i18next';

export const featuresInfos = (t: TFunction): IFeatures => {
    return {
        title: t('features'),
        list: [
            { name: t('land'), value: '530 m²' },
            { name: t('totalConstruction'), value: '270 m²' },
            { name: t('livingArea'), value: '170 m²' },
            { name: t('bedrooms'), value: t('bedroomsVal') },
            { name: t('bathrooms'), value: t('bathroomsVal') },
            { name: t('terrace'), value: '100 m²' },
            { name: t('pool'), value: '7m x 3m' },
            { name: 'Sala', value: '30 m²' },
            { name: t('view'), value: t('viewVal') },
            { name: t('location'), value: 'Khao Phra Village' },
            { name: t('proximity'), value: t('proximityVal') },
            { name: t('availability'), value: t('availabilityVal') },
        ],
    };
};