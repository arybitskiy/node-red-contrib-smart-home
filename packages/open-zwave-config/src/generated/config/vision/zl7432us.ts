import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:1717:2017",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zl7432us.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1807/",
            id: "1717",
            name: "ZWProductPage",
            type: "2017",
          },
          {
            text: "Vision Security ZL7432US In-wall 2 relays switch",
            name: "Description",
          },
          { text: "ZL7432US", id: "1717", name: "Identifier", type: "2017" },
          {
            text: "U.S. / Canada / Mexico",
            id: "1717",
            name: "FrequencyName",
            type: "2017",
          },
          { text: "ZL7432US In-wall 2 relays switch", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1807/xml",
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
