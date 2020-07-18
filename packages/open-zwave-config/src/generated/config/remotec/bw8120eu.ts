import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/5254:8120:8201",
            name: "OzwInfoPage",
          },
          { text: "images/remotec/bw8120eu.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/801/",
            id: "8120",
            name: "ZWProductPage",
            type: "8201",
          },
          {
            text: "CEPT (Europe)",
            id: "8120",
            name: "FrequencyName",
            type: "8201",
          },
          { text: "Dual Mode Switch-Dimmer", name: "Name" },
          { text: "BW8120EU", id: "8120", name: "Identifier", type: "8201" },
          { text: "Dual Mode Switch-Dimmer", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/801/xml",
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
