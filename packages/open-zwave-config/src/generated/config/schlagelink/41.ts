import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0097:5501:6941",
            name: "OzwInfoPage",
          },
          { text: "images/schlagelink/41.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/729/",
            id: "5501",
            name: "ZWProductPage",
            type: "6941",
          },
          {
            text:
              "Product number 41, A plugin module for a power socket which can switch on/off",
            name: "Description",
          },
          { text: "Wintop iPlug, Brazil", name: "Name" },
          { text: "Brazil", id: "5501", name: "FrequencyName", type: "6941" },
          { text: "41", id: "5501", name: "Identifier", type: "6941" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/729/xml",
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
