import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001D:0334:0301",
            name: "OzwInfoPage",
          },
          { text: "images/leviton/vrs15.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/814/",
            id: "0334",
            name: "ZWProductPage",
            type: "0301",
          },
          { text: "VRS15", id: "0334", name: "Identifier", type: "0301" },
          {
            text:
              "- Manual and remote ON/OFF control of connected loads\n- LED Display options control the length of time they remain lit\n- Push pad always returns to a neutral position whether switch is on or off so it maintains a consistent appearance when mixed in a multi-switch wall box\n- Compatible with Decora Plus screwless wallplates and Decora wallplates\n- Requires the Vizia RF + Handheld Remote - VRCPG for programming and control of the Vizia RF + System (sold separately)",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0334",
            name: "FrequencyName",
            type: "0301",
          },
          { text: "Wall Switch, 15A", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/814/xml",
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
