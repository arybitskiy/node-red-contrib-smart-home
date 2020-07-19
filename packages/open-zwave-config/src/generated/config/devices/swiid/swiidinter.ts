import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0166:0100:0100",
            name: "OzwInfoPage",
          },
          { text: "images/swiid/swiidinter.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1082/",
            id: "0100",
            name: "ZWProductPage",
            type: "0100",
          },
          { text: "CBCC SwiidInter - Z-Wave Cord Switch", name: "Name" },
          { text: "SW-ZCS-1", id: "0100", name: "Identifier", type: "0100" },
          {
            text: "CEPT (Europe)",
            id: "0100",
            name: "FrequencyName",
            type: "0100",
          },
          { text: "Z-Wave cord switch", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1082/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
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
            label: "Switch All",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "255",
            Help: "Enable/Disable ALL ON/OFF",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Switch off only", value: "1" },
              { label: "Switch on only", value: "2" },
              { label: "Fully enabled (Default)", value: "255" },
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
              { index: "1", label: "Long press", max_associations: "5" },
              {
                auto: "true",
                index: "2",
                label: "Short press",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
