import { IAllImages, ICloudinaryObj, IPhotosList } from './types';

export const groupImagesByFolder = (objectsList: ICloudinaryObj[]) => {
    const tab: IAllImages[] = [];
    const foldersMap: Record<string, IPhotosList[]> = {};
  
    objectsList.forEach((obj: ICloudinaryObj) => {
      const { folder, filename, secure_url, width, height } = obj;
  
      if (folder.includes('maquettes') || folder.includes('logo')) {
        return;
      }

      const folderName = folder.replace('villa-calm/', '');
  
      if (!foldersMap[folderName]) {
        foldersMap[folderName] = [];
      }
      foldersMap[folderName].push({ src: secure_url, width, height, title: filename });
    });
  
    for (const folderName in foldersMap) {
      tab.push({ folder: folderName, list: foldersMap[folderName] });
    }
  
    return tab;
};

export const sortFolders = (a: { folder: string }, b: { folder: string }) => {
    const folderOrder = [
      'octobre-2023', 'novembre-2023', 'decembre-2023',
      'janvier-2024', 'fevrier-2024', 'mars-2024',
      'avril-2024', 'mai-2024', 'juin-2024',
      'juillet-2024', 'aout-2024', 'septembre-2024',
      'video'
    ];
    
    const indexA = folderOrder.indexOf(a.folder);
    const indexB = folderOrder.indexOf(b.folder);
    
    if (indexA === -1 && indexB === -1) {
      return 0;
    } else if (indexA === -1) {
      return 1;
    } else if (indexB === -1) {
      return -1;
    } else {
      return indexA - indexB;
    }
};
