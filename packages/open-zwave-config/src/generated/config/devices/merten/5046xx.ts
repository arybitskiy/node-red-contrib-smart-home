import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/007A:0001:4003",
            name: "OzwInfoPage",
          },
          { text: "images/merten/5046xx.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/494/",
            id: "0001",
            name: "ZWProductPage",
            type: "4003",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "4003",
          },
          {
            text: "Radio sensor cover for in wall dimmer",
            name: "Description",
          },
          {
            text: "5046xx -  Radio sensor cover for in wall dimmer",
            name: "Name",
          },
          { text: "5046xx", id: "0001", name: "Identifier", type: "4003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/494/xml",
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
