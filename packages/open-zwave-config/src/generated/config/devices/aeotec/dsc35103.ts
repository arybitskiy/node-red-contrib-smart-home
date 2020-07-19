import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0011:0003",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsc35103.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1622/",
            id: "0011",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Micro Double Smart Switch", name: "Description" },
          {
            text: "Aeon Labs Micro Double Smart Switch DSC17103 ZWUS",
            name: "Name",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0011",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text: "DSC17103 ZWUS",
            id: "0011",
            name: "Identifier",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1622/xml",
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
            index: "2",
            label: "Blinking behavior",
            max: "65535",
            min: "0",
            type: "short",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n\t  This is actually a double byte value. \n\t  The LSB defines the total time the device needs to blink in seconds. \n\t  The MSB defines the on/off interval of the blink in tenths of seconds.\n      ",
          },
          {
            genre: "config",
            index: "80",
            label: "Notification status",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Enables automatic notifications to associated devices whenever there is a state change.",
            Item: [
              { label: "None", value: "0" },
              { label: "Hail", value: "1" },
              { label: "Basic", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "120",
            label: "Set External Switch/Button Control mode",
            size: "1",
            type: "list",
            units: "",
            value: "255",
            Help: "Set External Switch/Button Control mode",
            Item: [
              { label: "Momentary button", value: "0" },
              { label: "2 state switch", value: "1" },
              { label: "Unidentified", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "254",
            label: "Device tag",
            max: "65535",
            min: "0",
            type: "short",
            units: "",
            value: "0",
            Help: "\n\tDevice tag.\n      ",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset device",
            type: "button",
            units: "",
            value: "0",
            write_only: "true",
            Help: "\n\tReset to the default configuration.\n      ",
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
