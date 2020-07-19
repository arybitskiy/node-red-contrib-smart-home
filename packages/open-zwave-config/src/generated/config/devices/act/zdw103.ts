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
            index: "1",
            genre: "config",
            label: "Ignore Start-Level (Transmitting)",
            size: "1",
            value: "1",
            Help:
              "Dimmers controlled by this switch will start dimming from their current level.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "3",
            genre: "config",
            label: "Night Light",
            size: "1",
            value: "0",
            Help:
              "In night-light mode the LED on the switch will turn ON when the switch is turned OFF.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "4",
            genre: "config",
            label: "Invert Switch",
            size: "1",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "5",
            genre: "config",
            label: "Ignore Start-Level (Receiving)",
            size: "1",
            value: "1",
            Help: "This dimmer will start dimming from its current level.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "byte",
            index: "7",
            genre: "config",
            label: "On/Off Command Dim Step",
            units: "",
            min: "1",
            max: "99",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            type: "byte",
            index: "8",
            genre: "config",
            label: "On/Off Command Dim Rate",
            units: "x 10 milliseconds",
            min: "1",
            max: "255",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            type: "byte",
            index: "9",
            genre: "config",
            label: "Local Control Dim Step",
            units: "",
            min: "1",
            max: "99",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            type: "byte",
            index: "10",
            genre: "config",
            label: "Local Control Dim Rate",
            units: "x 10 milliseconds",
            min: "1",
            max: "255",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            type: "byte",
            index: "11",
            genre: "config",
            label: "ALL ON/ALL OFF Dim Step",
            units: "",
            min: "1",
            max: "99",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            type: "byte",
            index: "12",
            genre: "config",
            label: "ALL ON/ALL OFF Dim Rate",
            units: "x 10 milliseconds",
            min: "1",
            max: "255",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            type: "list",
            index: "14",
            genre: "config",
            label: "Enable Shade Control Group 2",
            size: "1",
            value: "0",
            Help:
              "The ZDW103 can operate shade control devices via its group 2.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "15",
            genre: "config",
            label: "Enable Shade Control Group 3",
            size: "1",
            value: "0",
            Help:
              "The ZDW103 can operate shade control devices via its group 3.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "19",
            genre: "config",
            label: "LED Transmission Indication",
            size: "1",
            value: "2",
            Help:
              "The ZDW103 will flicker its LED when it is transmitting to any of its 4 groups. This flickering can be set to not flicker at all, to flicker the entire time it is transmitting, or to flicker for only 1 second when it begins transmitting.",
            Item: [
              { label: "None", value: "0" },
              { label: "While Transmitting", value: "1" },
              { label: "One Second Maximum", value: "2" },
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
              { index: "1", max_associations: "5", label: "Group 1" },
              {
                index: "2",
                max_associations: "5",
                label: "Group 2 (two taps)",
              },
              {
                index: "3",
                max_associations: "5",
                label: "Group 3 (three taps)",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
