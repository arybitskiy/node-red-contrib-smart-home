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
              "In night-light mode the LED on the switch will turn ON when the switch is turned OFF, instead of following the state of the load.",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Night-light", value: "1" },
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
            label: "Ignore Start-Level (Receiving)",
            size: "1",
            value: "True",
            Help:
              "This dimmer will always start dimming from its current level, ignoring any commanded start level.",
          },
        ],
      },
      {
        id: "38",
        Value: [
          {
            type: "byte",
            genre: "user",
            index: "0",
            label: "Level",
            min: "0",
            max: "100",
            value: "0",
          },
        ],
      },
    ],
  },
};

export default config;
