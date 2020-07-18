import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:8380:0001",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/zrc-100eu.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1639/",
            id: "8380",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "Remotec bw8380eu", name: "Description" },
          {
            text: "CEPT (Europe)",
            id: "8380",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "ZRC-100EU / BW8380EU", name: "Name" },
          { text: "ZRC-100EU", id: "8380", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1639/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
