import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:1203:2012",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zr1202us.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/990/",
            id: "1203",
            name: "ZWProductPage",
            type: "2012",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "1203",
            name: "FrequencyName",
            type: "2012",
          },
          { text: "Vision Security Repeater ZR1202US", name: "Name" },
          { text: "Repeater", name: "Description" },
          { text: "ZR1202US", id: "1203", name: "Identifier", type: "2012" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/990/xml",
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
