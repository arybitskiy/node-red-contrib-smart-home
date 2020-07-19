import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0103:0002:0002",
            name: "OzwInfoPage",
          },
          { text: "images/diehlcontrols/766366.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1208/",
            id: "0002",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "DiehlControls Dimmer Actuator", name: "Name" },
          { text: "Dimmer Actuator", name: "Description" },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "766366", id: "0002", name: "Identifier", type: "0002" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/996/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1208/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
