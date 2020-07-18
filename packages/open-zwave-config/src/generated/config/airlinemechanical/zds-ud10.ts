import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0111:0200:8200",
            name: "OzwInfoPage",
          },
          { text: "images/airlinemechanical/zds-ud10.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/106/",
            id: "0200",
            name: "ZWProductPage",
            type: "8200",
          },
          { text: "AMC Dimming Switch Module", name: "Name" },
          {
            text: "NDS/ZDS-UD10",
            id: "0200",
            name: "Identifier",
            type: "8200",
          },
          { text: "Z-Wave US Plug-in Switch/Dimmer", name: "Description" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0200",
            name: "FrequencyName",
            type: "8200",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/106/xml",
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
