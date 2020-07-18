import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0001:3330:524D",
            name: "OzwInfoPage",
          },
          { text: "images/act/zrm230.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/476/",
            id: "3330",
            name: "ZWProductPage",
            type: "524D",
          },
          {
            text:
              "The ZRM230 is a 6A, 230 VAC, 50 Hz, RF wall switch with 3-way capability.  This wall switch can be controlled manually, with the ZTH200\nZ-Wave RF Remote Control, or the ACT multilevel auxiliary switch (AS200).  This will control loads ON and OFF up to and inclduing 6A.\n\nThe ZRM230 is a Dual Paddle design, where the first switch controls the connected load and also serves as a transmitter by using multiple switch taps (controls one group of 5 Z-Wave modules), and the second paddle is a transmitter only (controls two groups of 5 Z-Wave modules).\n\nReplaces the existing wall switch, and can add 3-way capability.\n\nEach ZRM230 Wall Mounted Switch functions as an automatic repeater to other HomePro Modules to ensure full home coverage of the RF signal.\n\nHas automatic Static Update Controller (SUC) capability",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "3330",
            name: "FrequencyName",
            type: "524D",
          },
          {
            text:
              "http://www.act-solutions.com/HomePro-Product-Matrix.html#Euro",
            name: "ProductPage",
          },
          { text: "ZRM230 - Wall Mounted 3-Way Switch 2-Gang", name: "Name" },
          { text: "ZRM230", id: "3330", name: "Identifier", type: "524D" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/476/xml",
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
