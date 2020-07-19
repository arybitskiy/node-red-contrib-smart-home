import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0150:0191:0001",
            name: "OzwInfoPage",
          },
          { text: "images/smartthings/pgc401m.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/878/",
            id: "0191",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "http://www.smartthings.com/", name: "ProductPage" },
          { text: "SmartThings Hub", name: "Name" },
          {
            text:
              "Hub to connect SmartThings and Z-Wave devices to the SmartThings cloud.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0191",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "PGC401M", id: "0191", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/878/xml",
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
