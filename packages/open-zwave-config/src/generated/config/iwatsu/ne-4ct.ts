import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0123:0103:0103",
            name: "OzwInfoPage",
          },
          { text: "images/iwatsu/ne-4ct.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/947/",
            id: "0103",
            name: "ZWProductPage",
            type: "0103",
          },
          {
            text:
              "Smart-CONNECT CT. \n\nElectric power measuring instrument with Z-Wave",
            name: "Description",
          },
          { text: "Iwatsu Smart Connect NE-4CT", name: "Name" },
          { text: "NE-4CT", id: "0103", name: "Identifier", type: "0103" },
          { text: "Japan", id: "0103", name: "FrequencyName", type: "0103" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/947/xml",
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
