import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/011A:0603:0101",
            name: "OzwInfoPage",
          },
          { text: "images/enerwave/zw20r.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/713/",
            id: "0603",
            name: "ZWProductPage",
            type: "0101",
          },
          {
            text: "CEPT (Europe)",
            id: "0603",
            name: "FrequencyName",
            type: "0101",
          },
          { text: "ZWN-RSM2", id: "0603", name: "Identifier", type: "0101" },
          { text: "Wenzhou MTLC Electric ZWN-RSM2", name: "Name" },
          {
            text:
              "Smart Lighting Control Module(RSM2) which can be used with traditional switch, for use with incandescent, incandescent, fluorescent, ballast , motor , meet customer's requirements.",
            name: "Description",
          },
          {
            text: "http://www.smart-wave.us/product_show.asp?classid=2&ID=34",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/713/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Toggle LED mode",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help: "Set to 1 for LED to be in sync with switch.",
            Item: [
              { label: "0: LED is on when switch is off", value: "0" },
              { label: "1: LED is on when switch is on", value: "1" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
