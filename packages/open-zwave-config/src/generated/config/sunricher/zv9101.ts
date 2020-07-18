import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0330:D005:0200",
            name: "OzwInfoPage",
          },
          { text: "images/sunricher/zv9101.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2918/",
            id: "D005",
            name: "ZWProductPage",
            type: "0200",
          },
          {
            text: "CEPT (Europe)",
            id: "D005",
            name: "FrequencyName",
            type: "0200",
          },
          {
            text:
              "1. Set primary controller/gateway into inclusion mode (Please refer to your primary controllers manual on how to turn your controller into inclusion).\n2. Power on the in-wall dimmer and set it into inclusion mode. There are two methods to set the in-wall dimmer into inclusion mode:\n1)Repower on the dimmer, it will be set into inclusion mode automatically, and waiting to be included.\n2)Triple press the action button on the dimmer, it will set the plug into inclusion mode.\nThe connected light will stay solid on for 3 seconds to indicate successful inclusion.",
            name: "InclusionDescription",
          },
          { text: "In-wall Dimmer", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2918/Z-Wave In-wall Dimmer SR-ZV9101SAC-HP-EU.pdf",
            name: "ProductManual",
          },
          {
            text: "SR-ZV9101SAC-HP-EU",
            id: "D005",
            name: "Identifier",
            type: "0200",
          },
          {
            text:
              "Press and hold down the action button for over 10 seconds, the dimmer will be reset to factory defaults.",
            name: "ResetDescription",
          },
          {
            text:
              "There are two exclusion methods:\nMethod 1: Exclusion from the primary controller/gateway as follows:\n1. Set the primary controller/gateway into exclusion mode (Please refer to your primary controllers manual on how to set your controller into exclusion).\n2. Triple press the action button, the dimmer will be set to exclusion mode, and waiting to be excluded, then the dimmer will be included to the network.\nMethod 2: Factory reset the dimmer will force the it to be excluded from a network.\n(please refer to the part “Factory Reset” of this manual)\nNote: Factory reset is not recommended for exclusion, please use this procedure only if the primary controller/gateway is missing or otherwise inoperable.",
            name: "ExclusionDescription",
          },
          {
            text:
              "The in-wall dimmer is a Z-Wave device that is used to switch ON/OFF and adjust light intensity of the connected light and can be controlled by other Z-Wave devices. The Inwall Dimmer can be included and operated in any Z-Wave network with other Z-Wave certified devices from other manufacturers and/or other applications. All non- battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2918/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
              "\n              Saving state before power failure. Default Not saved.\n        ",
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
              "Enable/disable to send the basic report to the Lifeline when the load state changed.\n              When value set as 1, re-power on the dimmer, it will send Basic report automatically.\n            Default Enabled.\n        ",
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
              "Fade time (units between 1-127 represent 1-127 seconds.\n            Units Between 128-244 represent minutes, 128 = 1 minute, 129 = 2 minutes.\n              This value has the same function as Duration of Multilevel).\n            Default 1.\n        ",
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
            label: "Choose MOSFET driving type",
            size: "1",
            type: "list",
            value: "1",
            Help:
              '\n          Choose MOSFET driving type". Default trailing edge.\n        ',
            Item: [
              { label: "Trailing edge", value: "0" },
              { label: "Leading edge", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label:
              "Enable/disable external switch to be added to and removed from a network",
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
