import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0130:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/quby/qb2.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/683/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "Quby QB2 Energy Display", name: "Name" },
          { text: "QEDII", name: "Description" },
          {
            text: "Australia / New Zealand",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "QB2", id: "0001", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/683/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [{ id: "112" }],
  },
};

export default config;
