import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0064:0000:0001",
            name: "OzwInfoPage",
          },
          { text: "images/duwi/zw-edan-300.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/337/",
            id: "0000",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "ZW-EDAN-300 - Flush-mount Z-Wave dimmer", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0000",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "ZW-EDAN-300", id: "0000", name: "Identifier", type: "0001" },
          {
            text:
              "For wireless dimming of: light bulbs, HV and LV halogen lamps  with conventional transformer. Combinable with all Z-Wave transmitters and remote controls. For installation in splash-proof junction box IP 44, can be selectively installed in flush-mounted power points and canopies or triggered directly via wireless rockers.",
            name: "Description",
          },
          {
            text: "http://www.duewi.de/index.php?productid=29184",
            name: "ProductSupport",
          },
          {
            text: "http://www.duewi.de/index.php?productid=37321",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/337/xml",
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
