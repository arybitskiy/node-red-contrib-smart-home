import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0001:3330:5257",
            name: "OzwInfoPage",
          },
          { text: "images/act/zrw230.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/475/",
            id: "3330",
            name: "ZWProductPage",
            type: "5257",
          },
          {
            text:
              "http://www.act-solutions.com/HomePro-Product-Matrix.html#Euro",
            name: "ProductPage",
          },
          {
            text: "CEPT (Europe)",
            id: "3330",
            name: "FrequencyName",
            type: "5257",
          },
          { text: "ZRW230 - European Wall Mounted 1-Gang", name: "Name" },
          {
            text:
              "The ZRW230 is a 6A, 230 VAC, 50 Hz, RF wall switch with 3-way capability.\n\nThis wall switch can be controlled manually, with the ZTH200 RF Remote Control, or the ACT multilevel auxiliary switch (AS200).  These will turn loads ON and OFF up to and including 6A.\nThe ON/OFF status will also be indicated by the state of its LED.  The ZRW230 is a single paddle design which controls the connected load and serves as a transmitter using multiple button taps.\n\nReplaces the current wall switch, and can add 3-way capability.\n\nEach ZRW230 Wall Mounted Switch functions as an automatic repeater to other HomePro Modules to ensure full home coverage of the RF signal.\n\nHas automatic Static Update Controller (SUC) capability.",
            name: "Description",
          },
          { text: "ZRW230", id: "3330", name: "Identifier", type: "5257" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/475/xml",
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
