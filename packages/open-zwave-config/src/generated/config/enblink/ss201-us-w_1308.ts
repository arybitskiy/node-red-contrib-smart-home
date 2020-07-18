import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014D:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/enblink/ss201-us-w_1308.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/969/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "SS201-US-W", id: "0001", name: "Identifier", type: "0001" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "Enblink GoogleTV Controller", name: "Name" },
          {
            text: "Enblink turns Google TV into a home automation hub.",
            name: "Description",
          },
          { text: "http://www.enblink.com/", name: "ProductPage" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/937/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 1,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/969/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
