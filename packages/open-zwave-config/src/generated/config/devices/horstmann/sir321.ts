import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0002:0010",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/sir321.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1012/",
            id: "0002",
            name: "ZWProductPage",
            type: "0010",
          },
          { text: "SIR 321", id: "0002", name: "Identifier", type: "0010" },
          {
            text:
              "Secure Intelligent Relay is having One relay, and support of duration base schedule, measuring of temperature and delta and interval temperature reporting etc",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0002",
            name: "FrequencyName",
            type: "0010",
          },
          { text: "Secure Controls SIR 321 Intelligent Relay", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1012/xml",
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
            index: "1",
            instance: "1",
            label: "Enable Fails Safe Timer",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enables or not the Fails Safe Timer",
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
            label: "Temperature reporting intervals",
            max: "65534",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "Time interval to trigger a temperature report (step 1s) (Default 0 = disabled)",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Delta T: Temperature change",
            max: "100",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "Change between temperatures to trigger a temperature report (step 0.1) (Default 0 = disabled)",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Temperature Cutoff",
            max: "1000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help: "Temperature that when reached will cut off the switch",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "4" },
              {
                auto: "true",
                index: "2",
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
