import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0002:0003",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/ssr302.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/116/",
            id: "0002",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "AS2-RF thermostat transmits via Z Wave mesh radio technology and is capable of operation  in most domestic houses with an operating range of approximately 30 metres. Ideal for controlling combi boilers, it can be mounted  in any suitable location without the need to disturb existing wiring or décor. Operates from 3 standard AA batteries, with 2 years+ life and separate clock battery.",
            name: "Description",
          },
          { text: "SSR302", id: "0002", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "Secure SSR302 2ch Zwave Relay Box (Rx)", name: "Name" },
          { text: "http://www.securetogether.eu/", name: "ProductPage" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/116/xml",
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
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "4" }],
          },
        ],
      },
      {
        id: "64",
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Idle Mode" },
              { index: "1", label: "Heat Mode" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;
