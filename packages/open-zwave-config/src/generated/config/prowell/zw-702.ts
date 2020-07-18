import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0163:0301:3001",
            name: "OzwInfoPage",
          },
          { text: "images/prowell/zw-702.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/995/",
            id: "0301",
            name: "ZWProductPage",
            type: "3001",
          },
          {
            text:
              "CEPT (Europe) / U.S. / Canada / Mexico / CEPT (Europe) / CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0301",
            name: "FrequencyName",
            type: "3001",
          },
          { text: "Queenlock Z-Wave Mortise Lock", name: "Name" },
          {
            text:
              "Use AES encryption to Lock/Unlock Door,have User Code management?Logging and schedule setting",
            name: "Description",
          },
          { text: "ZW-708", id: "0301", name: "Identifier", type: "3001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/942/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/943/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/985/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/986/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/995/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
