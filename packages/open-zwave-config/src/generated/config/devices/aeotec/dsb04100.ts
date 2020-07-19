import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0004:0002",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsb04100.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/114/",
            id: "0004",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "The Aeon Labs Door/Window Sensor is a battery-powered Z-Wave magnetic door/window sensor with an extremely small form factor. The D/W sensor will send radio signals up to 6 associated Z-Wave devices within its own Z-Wave network when the main unit separates from the smaller unit.\n\nBidirectional mounting plate and push button allows for easy end-user installation. The Aeon Labs Door/Window Sensor also has tamper prevention capabilities and low-battery alerts.",
            name: "Description",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0004",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text: "http://www.aeon-labs.com/site/support/",
            name: "ProductSupport",
          },
          {
            text: "DSB04100-ZWUS",
            id: "0004",
            name: "Identifier",
            type: "0002",
          },
          { text: "Aeon Labs Door/Window Sensor", name: "Name" },
          {
            text: "http://www.aeon-labs.com/site/products/view/1/",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/114/xml",
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
            label:
              "Toggle the sensor binary report value when the Magnet switch is opened/closed.",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default setting: Open: FF, Close: 00",
            Item: [
              { label: "Open: FF, Close: 00", value: "0" },
              { label: "Open: 00, Close: FF", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Enable wake up 10 minutes when the power is switched on.",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default setting: Disable",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label:
              "Toggle the basic set value when Magnet switch is opened/closed.",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default setting: Open: FF, Close: 00",
            Item: [
              { label: "Open: FF, Close: 00", value: "0" },
              { label: "Open: 00, Close: FF", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "121",
            instance: "1",
            label:
              "Determines which report will be sent when Magnet switch is opened/ closed.",
            max: "65535",
            min: "0",
            size: "4",
            type: "int",
            value: "255",
            Help:
              "Which reports need to send automatically in timing intervals for group 1. Bitsets: 0->Battery report, 4->Sensor Binary, 8->Basic Set, Default setting: 0x00000100 (Basic Set)\n\t\t\tIdeal Setting for OZW is 17 (Sensor Binary and Battery Report)",
          },
          {
            genre: "config",
            index: "254",
            label: "Device Tag",
            max: "255",
            min: "0",
            type: "short",
            units: "",
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
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "6" }],
          },
        ],
      },
    ],
  },
};

export default config;
