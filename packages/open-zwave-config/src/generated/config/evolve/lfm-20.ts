import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0113:3133:5246",
            name: "OzwInfoPage",
          },
          { text: "images/evolve/lfm-20.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1007/",
            id: "3133",
            name: "ZWProductPage",
            type: "5246",
          },
          { text: "Scene Capable Fixture Relay", name: "Description" },
          { text: "Evolve LFM-20", name: "Name" },
          { text: "LFM-20", id: "3133", name: "Identifier", type: "5246" },
          {
            text: "U.S. / Canada / Mexico",
            id: "3133",
            name: "FrequencyName",
            type: "5246",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1007/xml",
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
