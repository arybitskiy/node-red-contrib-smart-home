import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/011F:0002:0001",
            name: "OzwInfoPage",
          },
          { text: "images/ingersoll/dwzwave1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/647/",
            id: "0002",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "Schlage_DWZWAVE1",
            id: "0002",
            name: "Identifier",
            type: "0001",
          },
          {
            text:
              "http://www.nexiahome.com/Products/ProductDetail.aspx?model=043156955534",
            name: "ProductPage",
          },
          {
            text:
              "This sensor detects whether a door is open or closed and communicates with a Z-Wave gateway.Door window contacts should blend in with their environment and these contacts does just that by being one of the smallest in the industry. \n\nEach sensor comes in standard white with an optional and included brown cover. This allows you to quickly change the color to best match the decor. It's designed to work as well or better than the original manufacturer models, uses a long life lithium battery and is compatible with major alarm panel manufacturers.",
            name: "Description",
          },
          { text: "Schlage Home Door and Window Sensor", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/647/xml",
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
            index: "99",
            label: "Fault Restore Report",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "255",
            Help:
              "\n\t\t\t\tEnable or disable Basic Sets of 0x00 on a fault restore to nodes in Group 2. Default = Enabled.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "255" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Reports", max_associations: "1" },
              { index: "2", label: "Control", max_associations: "3" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
