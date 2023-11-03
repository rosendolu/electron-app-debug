const path  = require('path')
module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
          // name: appName,
        //   loadingGif: path.resolve(__dirname, './install.gif'),
          // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        //   iconUrl: path.resolve(__dirname, './icon/app.ico'),
          // The ICO file to use as the icon for the generated Setup.exe
          setupIcon: path.resolve(__dirname, './icon/app.ico'),
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
