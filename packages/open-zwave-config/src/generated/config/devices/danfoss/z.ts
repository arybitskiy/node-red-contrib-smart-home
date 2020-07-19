import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 10,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0002:0003:0005",
            name: "OzwInfoPage",
          },
          { text: "images/danfoss/z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/932/",
            id: "0003",
            name: "ZWProductPage",
            type: "0005",
          },
          {
            text: "http://heating.consumers.danfoss.com/xxTypex/585379.html",
            name: "ProductPage",
          },
          { text: "014G0013", id: "0003", name: "Identifier", type: "0005" },
          {
            text: "CEPT (Europe)",
            id: "0003",
            name: "FrequencyName",
            type: "0005",
          },
          { text: "Danfoss Living Connect Z v1.06 014G0013", name: "Name" },
          { text: "Electronic radiator thermostat", name: "Description" },
          {
            text: "https://products.z-wavealliance.org/products/1507/",
            id: "0004",
            name: "ZWProductPage",
            type: "0005",
          },
          { text: "014G0013", id: "0004", name: "Identifier", type: "0005" },
          {
            text: "CEPT (Europe)",
            id: "0004",
            name: "FrequencyName",
            type: "0005",
          },
          {
            text: "https://products.z-wavealliance.org/products/1506/",
            id: "0175",
            name: "ZWProductPage",
            type: "0005",
          },
          {
            text: "CEPT (Europe)",
            id: "0175",
            name: "FrequencyName",
            type: "0005",
          },
          { text: "014G0801", id: "0175", name: "Identifier", type: "0005" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/932/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/967/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1035/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1258/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1506/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1507/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 10,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { action: "remove", id: "32" },
      { id: "67", Compatibility: [{ OverridePrecision: [2], Base: [0] }] },
    ],
  },
};

export default config;
