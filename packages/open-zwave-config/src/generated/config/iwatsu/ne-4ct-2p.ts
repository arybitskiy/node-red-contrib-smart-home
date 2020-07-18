import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0123:0102:0102",
            name: "OzwInfoPage",
          },
          { text: "images/iwatsu/ne-4ct-2p.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/946/",
            id: "0102",
            name: "ZWProductPage",
            type: "0102",
          },
          { text: "NE-4CT-2P", id: "0102", name: "Identifier", type: "0102" },
          { text: "Japan", id: "0102", name: "FrequencyName", type: "0102" },
          { text: "Iwatsu Smart Connect NE-4CT-2P", name: "Name" },
          {
            text:
              "Smart-CONNECT CT. \n\nElectric power measuring equipment with Z-Wave.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/946/xml",
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
