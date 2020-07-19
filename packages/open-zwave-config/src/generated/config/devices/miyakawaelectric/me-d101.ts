import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0122:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/miyakawaelectric/me-d101.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/633/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "Japan", id: "0001", name: "FrequencyName", type: "0001" },
          { text: "ME-D101", id: "0001", name: "Identifier", type: "0001" },
          {
            text: "Electric power measuring instrument for the home",
            name: "Description",
          },
          {
            text: "MSK CT type electric power measuring instrument",
            name: "Name",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/633/xml",
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
