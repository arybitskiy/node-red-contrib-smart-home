import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:1401:2014",
            name: "OzwInfoPage",
          },
          { text: "images/vision/brg1-433.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/762/",
            id: "1401",
            name: "ZWProductPage",
            type: "2014",
          },
          {
            text: "Plug-in Dimmer & CT-Clamp Module(Power Meter)",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "1401",
            name: "FrequencyName",
            type: "2014",
          },
          { text: "BRG1-433", id: "1401", name: "Identifier", type: "2014" },
          { text: "Vision Security Dimmer BRG1-433", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/762/xml",
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
