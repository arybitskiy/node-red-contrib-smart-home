import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0012:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/icare/zw-66.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/938/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "ZW-66", id: "0001", name: "Identifier", type: "0001" },
          { text: "Sanjose USB Dongle", name: "Name" },
          { text: "USB Adapter", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/938/xml",
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
