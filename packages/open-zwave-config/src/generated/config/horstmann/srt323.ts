import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0004:0001",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/srt323.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1241/",
            id: "0004",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "CEPT (Europe)",
            id: "0004",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "323", id: "0004", name: "Identifier", type: "0001" },
          { text: "Room thermostat", name: "Description" },
          { text: "Secure Controls SRT 323 Thermostat", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1241/xml",
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
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Temperature sensor reading",
            size: "1",
            type: "list",
            value: "255",
            Help: "Enables or not the temperature sensor reading",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Temperature Scale",
            size: "1",
            type: "list",
            value: "0",
            Help: "Controls the temperature sensor scale",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Delta T: Temperature change",
            max: "100",
            min: "1",
            type: "byte",
            value: "10",
            Help:
              "Change between temperatures to trigger a temperature report (step 0.1) (Default 10 = 1C)",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                auto: "true",
                index: "2",
                label: "Thermostat Operating State Reports",
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
