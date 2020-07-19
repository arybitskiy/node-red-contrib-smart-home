import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "3",
            genre: "config",
            label: "LED Mode",
            size: "1",
            value: "0",
            Help:
              "By default, the LED on the switch will turn OFF when the Associated device is turned ON.",
            Item: [
              { label: "LED OFF when the load is on", value: "0" },
              { label: "LED ON when the load is on", value: "1" },
              { label: "LED is always ON", value: "2" },
              { label: "LED is always OFF", value: "3" },
              { label: "LED blinks during RF transmissions", value: "4" },
            ],
          },
          {
            type: "bool",
            index: "4",
            genre: "config",
            label: "Invert Switch",
            size: "1",
            value: "False",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON.",
          },
          {
            type: "bool",
            index: "5",
            genre: "config",
            label: "Ignore Start-Level When Transmitting Dim Commands",
            size: "1",
            value: "True",
            Help:
              "The associated dimmer will start dimming from its current level, ignoring any commanded start level.",
          },
          {
            type: "byte",
            index: "7",
            genre: "config",
            label: "Dim Step",
            units: "%",
            min: "1",
            max: "99",
            value: "3",
            Help:
              "Dim Step can be set to a value of 1 to 99. This value indicates how many levels the dimmer will change each time the Dim Timer expires.",
          },
          {
            type: "byte",
            index: "8",
            genre: "config",
            label: "Dim Timer",
            units: "10ms",
            min: "1",
            max: "255",
            value: "10",
            Help:
              "The Dim Timer (how fast the dim steps happen). It can be set to a value of 1 to 255. This value indicates in 10 millisecond resolution, how often the dim level will change.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Group 1", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
