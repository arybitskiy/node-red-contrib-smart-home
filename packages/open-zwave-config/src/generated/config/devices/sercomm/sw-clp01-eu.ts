import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0151:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "images/sercomm/sw-clp01-eu.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/927/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "SW-CLP01-EU", id: "0001", name: "Identifier", type: "0002" },
          { text: "Clamp Power Meter", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "Z-Wave Clamp Power Meter", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/927/xml",
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
