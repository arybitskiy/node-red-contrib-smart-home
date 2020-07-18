import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0039:0003:0001",
            name: "OzwInfoPage",
          },
          { text: "images/honeywell/lynx-touch-l5100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/678/",
            id: "0003",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "L5100", id: "0003", name: "Identifier", type: "0001" },
          { text: "Honeywell Lynx Touch L5100", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0003",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "Honeywell", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/678/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
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
