import TagManager from 'react-gtm-module';

const tagManager = (dataLayer) => {
  const tagManagerArgs = {
    dataLayer,
    dataLayerName: 'AppDataLayer',
  };

  TagManager.dataLayer(tagManagerArgs);
};

export default tagManager;
