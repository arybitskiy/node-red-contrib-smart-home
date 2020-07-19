import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0026:0001",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsa38.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1288/",
            id: "0026",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "DSA38-ZWAU", id: "0026", name: "Identifier", type: "0001" },
          { text: "Aeon Labs Panic Button DSA38 ZWAU", name: "Name" },
          { text: "Panic Button", name: "Description" },
          {
            text:
              "CEPT (Europe) / U.S. / Canada / Mexico / Australia / New Zealand",
            id: "0026",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1284/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1285/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1288/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { action: "remove", id: "32" },
      { action: "remove", id: "38" },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "250",
            label: "Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Enable selective Group Mode or Scene Mode when the Panic Button is in Use mode",
            Item: [
              { label: "Group", value: "0" },
              { label: "Scene", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset configuration",
            type: "button",
            units: "",
            value: "0",
            write_only: "true",
            Help: "Reset configuration set up to default setting",
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
