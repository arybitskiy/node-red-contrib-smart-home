import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001D:0334:1001",
            name: "OzwInfoPage",
          },
          { text: "images/leviton/vrf01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/807/",
            id: "0334",
            name: "ZWProductPage",
            type: "1001",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0334",
            name: "FrequencyName",
            type: "1001",
          },
          {
            text:
              '› Preset On Level option sets the fan speed when the device is turned on, regardless of the previous setting\n› Off-Low-Medium-High speed settings\n› Microprocessor-controlled "kick start" allows fan to go directly from OFF to any speed setting\n› LED Locator and fan speed display\n› Requires the Vizia RF + Handheld Remote - VRCPG for programming and control of the Vizia RF + System (sold separately)',
            name: "Description",
          },
          { text: "Scene Capable Quiet Fan Speed Control", name: "Name" },
          { text: "VRF01", id: "0334", name: "Identifier", type: "1001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/807/xml",
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
      { id: "134", Compatibility: [{ ClassGetVersionSupported: [false] }] },
    ],
  },
};

export default config;
