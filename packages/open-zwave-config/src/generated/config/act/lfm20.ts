import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0001:3133:5246",
            name: "OzwInfoPage",
          },
          { text: "images/act/lfm20.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/134/",
            id: "3133",
            name: "ZWProductPage",
            type: "5246",
          },
          { text: "ZRF113 - Isolated Contact Fixture Module", name: "Name" },
          {
            text:
              "http://www.act-solutions.com/Contact-Advanced-Control-Technologies.html",
            name: "ProductSupport",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "3133",
            name: "FrequencyName",
            type: "5246",
          },
          { text: "ZRF113", id: "3133", name: "Identifier", type: "5246" },
          {
            text:
              "http://www.act-solutions.com/HomePro-Product-Matrix.html#Euro",
            name: "ProductPage",
          },
          {
            text:
              "- The relay on this device is isolated from the power line, so it can be used to switch any load, including low voltage. This can be used in areas where an X10 universal module may have been used.\n\n- The LED on the ZRF113 will turn on when the load attached is ON. The LED is user configured however to turn ON when the load attached is OFF, if so desired.\n\n- The ZRF113 supports the AS101 and AS001 auxiliary switch.\n\n- Max load 20 amps.\n\n- Supports Z-Wave 40Kbps speed\n\n- Signal (Frequency): 908.42 MHz",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/134/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    Protocol: [{ nodeinfosupported: "false" }],
    CommandClass: [{ id: "112" }],
  },
};

export default config;
