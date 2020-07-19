import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0003:0001",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/hrt4zw.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/115/",
            id: "0003",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "CEPT (Europe)",
            id: "0003",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "ThermostatThe innovative Horstmann CentaurPlus ZW combined wireless room stat and time control offers installers and householders the opportunity to easily and cost effectively update existing combi boiler controls.\n\nThe CentaurPlus has an integral transmitter and receiver, enabling wireless communication with the latest generation Horstmann HRT4-ZW TPI room thermostat.\n\nSuitable for combi boilers\nVolt free contacts\nAutomatic BST /GMT time change\nBack lit display\nBoost and Advance\nHelps to meet Part L1 of 2010 Building Regs for existing installations\nBuilt in Z Wave receiver\nIndustry Standard 6 terminal wall plate\nZW wireless technology\nTPI energy saving software\nClear backlit display\nTemperature range 5-30°C\nBattery operated for wire free installation",
            name: "Description",
          },
          { text: "Secure SRT321 Zwave Stat (Tx)", name: "Name" },
          { text: "http://www.securetogether.eu/", name: "ProductPage" },
          { text: "SRT321", id: "0003", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/115/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
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
      },
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Temperature sensor reading",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Temperature Scale",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Temperature Delta T",
            type: "byte",
            value: "10",
            Help: "\n        Delta T in steps of 0.1 degree.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              {
                index: "1",
                label: "Thermostat Mode Set",
                max_associations: "4",
              },
              {
                auto: "true",
                index: "2",
                label: "Binary Switch Set",
                max_associations: "4",
              },
              {
                auto: "true",
                index: "3",
                label: "Unsolicited Battery Level Reports",
                max_associations: "4",
              },
              {
                auto: "true",
                index: "4",
                label: "Thermostat Set Point Reports",
                max_associations: "4",
              },
              {
                auto: "true",
                index: "5",
                label: "Unsolicited Sensor Multilevel Reports",
                max_associations: "4",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
