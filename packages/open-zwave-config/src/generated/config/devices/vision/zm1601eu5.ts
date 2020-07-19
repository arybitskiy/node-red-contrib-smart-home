import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0508:2005",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zm1601eu5.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1278/",
            id: "0508",
            name: "ZWProductPage",
            type: "2005",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1278/ZM 1601-5 Siren_20150602.pdf",
            name: "ProductManual",
          },
          { text: "ZM1601US-5", id: "0508", name: "Identifier", type: "2005" },
          {
            text:
              "removing the back cover of the ZM1601 to get into “Awake” mode",
            name: "WakeupDescription",
          },
          {
            text:
              "Put the Z-Wave™ Interface Controller into “inclusion” mode, and following its instruction to add the ZM 1601 to your controller. To get in the “inclusion” mode, the distance between siren and controller is suggested to be in one meter. Open the bracket and press the program switch of ZM 1601 for 1 second at least & release to be included. After setting, the LED Setting Light should go off,",
            name: "InclusionDescription",
          },
          { text: "Wireless Siren & Strobe Alarm, Battery Type", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0508",
            name: "FrequencyName",
            type: "2005",
          },
          {
            text:
              "Features: \n \n*Loud audible alarm>105dB@1 meter\n*LED strobe lighting\n*Low battery detection\n*Siren for Battery Back-Up \n*100ft line of sight\n*LED Status Indicator\n*Operating temp: -15oC~60oC\n*Working Voltage: 6V\n*Dimensions: 116*77*40mm",
            name: "Description",
          },
          {
            text:
              "Set up the Z-Wave™ Interface Controller into “exclusion” mode, and following its instruction to delete the ZM 1601 from your controller. Press the program switch of ZM 1601 for 1 second at least & release to be excluded. After setting The LED setting light will flash again",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1278/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Siren Strobe Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines the reaction of the siren: turn either Siren sound, Strobe light, or both when triggered",
            Item: [
              { label: "Strobe and Siren", value: "0" },
              { label: "Siren Only", value: "1" },
              { label: "Strobe Only", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Alarm Auto Stop",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Defines the auto time out of the alarm indication",
            Item: [
              { label: "30 seconds", value: "0" },
              { label: "60 seconds", value: "1" },
              { label: "120 seconds", value: "2" },
              { label: "Will Not Automatically Stop", value: "3" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "37", Compatibility: [{ SetAsReport: [true] }] },
      { id: "128", Compatibility: [{ SetAsReport: [true] }] },
    ],
  },
};

export default config;
