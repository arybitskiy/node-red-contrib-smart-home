import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010A:5A00:1300",
            name: "OzwInfoPage",
          },
          { text: "images/vitrum/vitrumII-Blind.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/7/",
            id: "5A00",
            name: "ZWProductPage",
            type: "1300",
          },
          {
            text:
              "Switch with two touch keys for control of curtains and roller blinds\nTwo-button roll-down shutters and curtains control\nTouch control with capacitive technology and concave surface for tactile identification of the switch itself\nAcoustic feedback signal\nCrown backlit by low-consumption LEDs",
            name: "Description",
          },
          { text: "VITRUM II Control of Roller Blinds - EU BOX", name: "Name" },
          {
            text:
              "http://www.vitrum.com/eng/content/vitrum-ii-roll-down-shutter-and-curtain-control",
            name: "ProductSupport",
          },
          {
            text: "CEPT (Europe)",
            id: "5A00",
            name: "FrequencyName",
            type: "1300",
          },
          {
            text:
              "http://www.vitrum.com/eng/content/vitrum-ii-roll-down-shutter-and-curtain-control",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/7/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "96",
        Compatibility: [
          { IgnoreMCCapReports: [true], MapRootToEndpoint: [true] },
        ],
      },
    ],
  },
};

export default config;
