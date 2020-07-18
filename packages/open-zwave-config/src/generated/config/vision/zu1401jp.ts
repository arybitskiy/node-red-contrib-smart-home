import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0101:1001",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zu1401jp.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/849/",
            id: "0101",
            name: "ZWProductPage",
            type: "1001",
          },
          { text: "Japan", id: "0101", name: "FrequencyName", type: "1001" },
          { text: "ZU1401JP", id: "0101", name: "Identifier", type: "1001" },
          { text: "Z-wave USB dongle", name: "Description" },
          { text: "USB Dongle", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/849/xml",
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
