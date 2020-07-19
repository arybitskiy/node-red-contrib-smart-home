import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0138:0002:0001",
            name: "OzwInfoPage",
          },
          { text: "images/firstalert/zcombo.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/862/",
            id: "0002",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "Smoke and Carbon Monoxide Alarm", name: "Description" },
          { text: "ZCOMBO", id: "0002", name: "Identifier", type: "0001" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "Smoke/CO Alarm", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/862/xml",
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
            index: "1",
            instance: "1",
            label: "Send double alarm messages",
            size: "1",
            type: "list",
            value: "0",
            Help: "Causes the device to send double alarm messages.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
