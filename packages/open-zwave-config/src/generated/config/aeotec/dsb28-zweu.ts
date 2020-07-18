import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsb28-zweu.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1322/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "http://aeotec.com/z-wave-home-energy-measure",
            name: "ProductPage",
          },
          {
            text: "CEPT (Europe) / Australia / New Zealand / Israel",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "Door/Window Sensor (2nd Edition)", name: "Description" },
          { text: "DSB29-ZWIL", id: "0001", name: "Identifier", type: "0002" },
          {
            text: "Aeon Labs Door/Window Sensor(2nd Edition) DSB29-ZWIL",
            name: "Name",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/805/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/806/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1322/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
