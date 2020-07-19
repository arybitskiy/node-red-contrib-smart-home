import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Night light",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "\n                The LED on the switch will by default, turn ON when the load attached is turned OFF.\n                To make the LED turn ON when the load attached is turned ON instead, set parameter to a value of 0.\n            ",
            Item: [
              { label: "The LED is ON when the load is ON", value: "0" },
              { label: "The LED is ON when the load is OFF", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Memory function",
            value: "1",
            size: "1",
            Help:
              "Default with memory: the socket status is same as before when power on",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Invert switch",
            value: "0",
            size: "1",
            Help: "In the edge mode invert switch",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "4",
            label: "LED Transmission Indication",
            value: "1",
            size: "1",
            Help: "Led flicker on transmission",
            Item: [
              { label: "No flicker", value: "0" },
              { label: "Only 1 second at beginning", value: "1" },
              { label: "Always", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Suspend Group 4",
            value: "0",
            size: "1",
            Help: "Enable/Disable group 4",
            Item: [
              { label: "Enable", value: "0" },
              { label: "Disable", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "On/Off Dimmer 1" },
              { index: "3", max_associations: "5", label: "On/Off Dimmer 2" },
              { index: "4", max_associations: "5", label: "Wireless" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
