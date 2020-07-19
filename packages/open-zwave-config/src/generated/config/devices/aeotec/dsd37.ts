import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0025:0004",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsd37.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1017/",
            id: "0025",
            name: "ZWProductPage",
            type: "0004",
          },
          { text: "DSD37-ZWAU", id: "0025", name: "Identifier", type: "0004" },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / Australia / New Zealand",
            id: "0025",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "Aeon Labs Range Extender DSD37-ZWAU", name: "Name" },
          { text: "Range Extender / Repeater", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/752/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1004/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1017/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
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
            index: "200",
            label: "Partner ID",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Partner ID",
            Item: [
              { label: "Aeon Labs Standard (Default)", value: "0" },
              { label: "Others", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "254",
            label: "Device Tag",
            max: "255",
            min: "0",
            type: "short",
            value: "0",
            Help: "Device Tag",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset configuration settings to factory defaults",
            type: "button",
            value: "0",
            write_only: "true",
            Help: "Reset to factory defaults.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "LifeLine", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
