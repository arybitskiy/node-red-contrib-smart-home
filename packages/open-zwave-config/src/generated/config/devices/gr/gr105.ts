import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0152:0511:0202",
            name: "OzwInfoPage",
          },
          { text: "images/gr/gr105.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1008/",
            id: "0511",
            name: "ZWProductPage",
            type: "0202",
          },
          { text: "GR-105", id: "0511", name: "Identifier", type: "0202" },
          { text: "U-Fairy Control Valve", name: "Name" },
          {
            text: "Auto Valve - Turn on/off water valve or gas valve",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0511",
            name: "FrequencyName",
            type: "0202",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1008/xml",
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
      { action: "remove", id: "38" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
