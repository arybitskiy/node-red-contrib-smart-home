import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0001:0004",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/scsc17.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1740/",
            id: "0001",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text: "http://www.horstmann.co.uk/central-heating.php",
            name: "ProductPage",
          },
          { text: "C17-ZW", id: "0001", name: "Identifier", type: "0004" },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "C-Stat", name: "Name" },
          { text: "C-Stat", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/864/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1740/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 6,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "64",
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
            ],
          },
        ],
        Compatibility: [{ GetSupported: [false] }],
      },
      { id: "67", Compatibility: [{ OverridePrecision: [0], Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Temperature Scale",
            size: "1",
            type: "list",
            value: "0",
            Help: "Controls the temperature sensor scale",
            Item: [
              { label: "Celsius", value: "1" },
              { label: "Fahrenheit", value: "128" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Lower temperature limit",
            max: "30",
            min: "5",
            type: "byte",
            value: "5",
            Help: "Defines the minimum temperature. Steps are 1C",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Upper temperature limit",
            max: "30",
            min: "5",
            type: "byte",
            value: "30",
            Help: "Defines the maximum temperature. Steps are 1C",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Delta T: Temperature change",
            max: "50",
            min: "1",
            type: "byte",
            value: "5",
            Help:
              "Change between temperatures to trigger a temperature report (step 0.1)\n        1 to 50, 1 or 0.1 (Default 5 = 0,5C) -> (1C = 10)\n      ",
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
              { index: "2", label: "Control", max_associations: "4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
