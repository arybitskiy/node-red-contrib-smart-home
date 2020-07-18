import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0C02:200C",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zl7431.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1792/",
            id: "0C02",
            name: "ZWProductPage",
            type: "200C",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0C02",
            name: "FrequencyName",
            type: "200C",
          },
          {
            text: "Vision ZL7431US In-wall 1 relay switch",
            name: "Description",
          },
          { text: "ZL7431US", id: "0C02", name: "Identifier", type: "200C" },
          { text: "ZL7431US", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1792/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            label: "Behavior",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help: "",
            Item: [
              { label: "2 Wall Switches", value: "1" },
              { label: "Light Indicator", value: "1" },
            ],
          },
        ],
      },
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
