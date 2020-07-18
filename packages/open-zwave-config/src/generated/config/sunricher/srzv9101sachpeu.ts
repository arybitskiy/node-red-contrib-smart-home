import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0330:D00C:0200",
            name: "OzwInfoPage",
          },
          { text: "images/sunricher/srzv9101sachpeu.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3331/",
            id: "D00C",
            name: "ZWProductPage",
            type: "0200",
          },
          {
            text:
              "Press and hold down the action button for over 10 seconds, the dimmer will be reset to factory defaults.\n\nNote: Factory reset is not recommended for exclusion, please use this procedure only if the primary controller/gateway is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "The micro smart dimmer is a Z-Wave device designed to work with various types of light sources. It may be\nconnected to two-wire or three-wire configuration so it can operate with or without neutral lead. The\ndimmer can switch or dim connected light source either through Z-Wave devices or through the wall\nswitch connected directly to it. The smart dimmer is equipped with an algorithm of smart light source\ndetection which makes configuration easier and ensures high compatibility of the device. It may be used\nas a switch with non-dimmable light sources (in 3-wire connection).",
            name: "Description",
          },
          { text: "Micro Smart Dimmer", name: "Name" },
          {
            text:
              "1. Set primary controller/gateway into inclusion mode (Please refer to your primary controller’s manual on how to turn your controller into inclusion).\n2. Power on the in-wall dimmer and set it into inclusion mode. There are two methods to set the in-wall dimmer into inclusion mode:\n1)Repower on the dimmer, it will be set into inclusion mode automatically, and waiting to be included.\n2)Triple press the action button on the dimmer, it will set the dimmer into inclusion mode.\nThe connected light will stay solid on for 3 seconds to indicate successful inclusion.",
            name: "InclusionDescription",
          },
          {
            text:
              "There are two exclusion methods:\nMethod 1: Exclusion from the primary controller/gateway as follows:\n1. Set the primary controller/gateway into exclusion mode (Please refer to your primary controllers manual on how to set your controller into exclusion).\n2. Triple press the action button, the dimmer will be set to exclusion mode, and waiting to be excluded, then the dimmer will be excluded from the network.\nMethod 2: Factory reset the dimmer will force it to be excluded from a network. (please refer to the part “Factory Reset” of this manual)\nNote: Factory reset is not recommended for exclusion, please use this procedure only if the primary controller/gateway is missing or otherwise inoperable.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3331/SR-ZV9040A-A Micro Smart Dimmer.pdf",
            name: "ProductManual",
          },
          {
            text: "SR-ZV9040A-A",
            id: "D00C",
            name: "Identifier",
            type: "0200",
          },
          {
            text: "CEPT (Europe)",
            id: "D00C",
            name: "FrequencyName",
            type: "0200",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3331/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
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
            instance: "1",
            label: "Saving state before power failure",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n              Saving state before power failure.\n            Default Not saved.\n        ",
            Item: [
              {
                label:
                  "State NOT saved at power failure, all outputs are set to OFF upon power restore",
                value: "0",
              },
              {
                label:
                  "State NOT saved at power failure, all outputs are set to ON upon power restore",
                value: "1",
              },
              {
                label:
                  "State saved at power failure, all outputs are set to previous state upon power restore",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Send the basic report",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable/disable to send the basic report to the Lifeline when the load state changed.\n              When value set as 1, re-power on the dimmer, it will send Basic report automatically. \n\t\tDefault Enabled.\n        ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Fade time",
            max: "255",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "Fade time (units between 1-127 represent 1-127 seconds.\n\t\tUnits Betwen 128-244 represent minutes, 128 = 1 minute, 129 = 2 minutes.\n              This value has the same function as Duration of Multilevel). \n\t\tDefault 1.\n        ",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Setting minimum brightness value",
            max: "50",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Setting minimum brightness value.\n              Valid value: 0 - 50, the bigger the value is, the higher the loads minimum brightness is.\n              Note: when configure this value, the value of Multilevel will be configured as 1 automatically so that users can preview the corresponding effect of minimum brightness value\n        ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Setting maximum brightness value",
            max: "100",
            min: "0",
            type: "byte",
            value: "100",
            Help:
              "Setting maximum brightness value.\n              Valid value: 0 - 100, the bigger the value is, the higher the load maximum brightness is.\n        ",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Choose MOSFET driving type",
            size: "1",
            type: "list",
            value: "1",
            Help:
              '\n          Choose MOSFET driving type". \n\t\tDefault trailing edge.\n        ',
            Item: [
              { label: "Trailing edge", value: "0" },
              { label: "Leading edge", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "External switch type",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n\t   Choose external switch type. \n\t\tDefault normal on/off switch. \n        ",
            Item: [
              { label: "Push button switch", value: "0" },
              { label: "normal on/off switch", value: "1" },
              { label: "3-way switch", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "External switch to be added to and removed from a network",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable/disable external switch to be added to and removed from a network.\n              When enables this function, triple press the external switch within 1.5 seconds to be added to or removed from a net-work.\n            Default Enabled.\n        ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Detect load after re-power on",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n           Enable/disable to detect load after re-power on (detect load type, minimum brightness, maximum brightness)\n        ",
            Item: [
              { label: "Disable", value: "0" },
              {
                label: "Enable to detect every time after re-power on",
                value: "1",
              },
              {
                label: "Enable to detect only after first re-power on",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Wiring type",
            read_only: "true",
            size: "1",
            type: "list",
            value: "0",
            Help: "\n           Wiring type\n        ",
            Item: [
              { label: "Unknown", value: "0" },
              { label: "2 Wire With No Neutral", value: "1" },
              { label: "3 Wire With Neutral", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Load type",
            read_only: "true",
            size: "1",
            type: "list",
            value: "0",
            Help: "\n           Load type\n        ",
            Item: [
              { label: "Unknown", value: "0" },
              { label: "Resistive", value: "1" },
              { label: "Inductive", value: "2" },
              { label: "Capacitive", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Over current protection",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n           Enable/disable over current protection (over 1.5A for 20 seconds continuously)\n        ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Power automatic report absolute threshold",
            size: "2",
            type: "short",
            units: "W",
            value: "10",
            Help:
              "\n           Power automatic report absolute threshold, unit is W. \n\t   When power changes above the absolute threshold, immediately report current power value\n        ",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Power automatic report percentage threshold",
            size: "1",
            type: "byte",
            units: "%",
            value: "20",
            Help:
              "\n           Power automatic report percentage threshold, unit is %.\n           When power changes above the percentage threshold, immediately report current power value\n        ",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Power metering automatich report time cycle",
            size: "4",
            type: "int",
            units: "second",
            value: "600",
            Help:
              "\n           Power metering automatic report time cycle, unit is second.\n\t   Valid time cycle value: 5-2678400, when set as 0 report function is disabled\n        ",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Energy metering automatich report time cycle",
            size: "4",
            type: "int",
            value: "1800",
            Help:
              "\n           Energy metering automatic report time cycle, unit is second.\n           Valid time cycle value: 5-2678400, when set as 0 report function is disabled\n        ",
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label: "Energy metering automatich report time cycle",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "\n           Voltage metering automatic report time cycle, unit is second.\n           Valid time cycle value: 5-2678400, when set as 0 report function is disabled\n        ",
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Current metering automatich report time cycle",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "\n           Current metering automatic report time cycle, unit is second.\n           Valid time cycle value: 5-2678400, when set as 0 report function is disabled\n        ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "On/Off", max_associations: "8" },
              { index: "3", label: "Dimmer", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
