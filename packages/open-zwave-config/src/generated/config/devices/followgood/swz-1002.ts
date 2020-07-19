import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0137:0002:3001",
            name: "OzwInfoPage",
          },
          { text: "images/followgood/swz-1002.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/830/",
            id: "0002",
            name: "ZWProductPage",
            type: "3001",
          },
          { text: "Binary Power Switch", name: "Description" },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "3001",
          },
          { text: "Power Switch", name: "Name" },
          { text: "SWZ-1002", id: "0002", name: "Identifier", type: "3001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/830/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
