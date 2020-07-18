import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0908:2009",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zm1602eu5.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2901/",
            id: "0908",
            name: "ZWProductPage",
            type: "2009",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0908",
            name: "FrequencyName",
            type: "2009",
          },
          { text: "ZM1602US-5", id: "0908", name: "Identifier", type: "2009" },
          {
            text:
              "Put the Z-Wave™ Interface Controller into “inclusion” mode, and following its instruction to add the ZM 1602 to your controller. To get in the “inclusion” mode, the distance between siren and controller is suggested to be in one meter. Open the bracket and press the program switch of ZM 1602 for 1 second at least & release to be included. After setting, the LED Setting Lighting should go off,",
            name: "InclusionDescription",
          },
          {
            text:
              "Features:\n\n*Loud audible alarm>105dB@1 meter\n*LED strobe lighting\n*Low battery detection\n*Siren for Battery Back-Up \n*100ft line of sight\n*LED Status Indicator\n*Operating temp: -15oC~60oC\n*Working Voltage: 6V\n*Dimensions: 116*77*40mm",
            name: "Description",
          },
          { text: "Wireless Siren", name: "Name" },
          {
            text:
              "removing the back cover of the ZM1602 to get into “Awake” mode,",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2901/ZM1602-5 Siren_R3_20180417 (RED).pdf",
            name: "ProductManual",
          },
          {
            text:
              "Set up the Z-Wave™ Interface Controller into “exclusion” mode, and following its instruction to delete the ZM 1602 from your controller. Press the Tamper Switch of ZM 1602 for 1 second at least & release to be excluded.",
            name: "ExclusionDescription",
          },
          {
            text:
              "This device can’t be reset manually. It is reset to factory defaults when it is excluded. Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2901/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
              { label: "All Enable", value: "0" },
              { label: "Siren Only", value: "1" },
              { label: "Strobe Only", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Alarm Auto Stop Time",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Defines the duration of siren time when triggered",
            Item: [
              { label: "30s", value: "0" },
              { label: "60s", value: "1" },
              { label: "120s", value: "2" },
              { label: "Will Not Automatically Stop", value: "3" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { id: "37", Compatibility: [{ SetAsReport: [true] }] },
      { id: "128", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
