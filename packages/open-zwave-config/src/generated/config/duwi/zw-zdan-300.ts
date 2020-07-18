import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0064:0000:1001",
            name: "OzwInfoPage",
          },
          { text: "images/duwi/zw-zdan-300.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/370/",
            id: "0000",
            name: "ZWProductPage",
            type: "1001",
          },
          {
            text: "CEPT (Europe)",
            id: "0000",
            name: "FrequencyName",
            type: "1001",
          },
          { text: "ZW-ZDAN-300", id: "0000", name: "Identifier", type: "1001" },
          {
            text: "http://www.duewi.de/index.php?productid=37324",
            name: "ProductPage",
          },
          {
            text:
              "For wireless dimming of: light bulbs, HV and LV halogen lamps with conventional transformer, combinable with all Z-Wave transmitters and remote controls.",
            name: "Description",
          },
          {
            text: "http://www.duewi.de/index.php?productid=29184",
            name: "ProductSupport",
          },
          { text: "ZW-ZDAN-300 - Z-Wave Plug-in Dimmer", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/370/xml",
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
