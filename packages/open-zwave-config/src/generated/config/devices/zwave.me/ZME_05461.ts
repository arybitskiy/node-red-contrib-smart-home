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
            label: "Set LED indication mode",
            units: "",
            min: "1",
            max: "99",
            value: "1",
            size: "1",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Show switch state (Default)", value: "1" },
              { label: "Night mode (inverted switch state)", value: "2" },
            ],
          },
          {
            type: "int",
            index: "2",
            genre: "config",
            label: "Automatically switch first channel off after",
            units: "seconds",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "If not zero, automatically switch first channel off after a user defined time",
          },
          {
            type: "int",
            index: "22",
            genre: "config",
            label: "Automatically switch second channel off after",
            units: "seconds",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "If not zero, automatically switch second channel off after a user defined time",
          },
          {
            type: "list",
            index: "3",
            genre: "config",
            label: "What to do on RF first channel off command",
            value: "0",
            size: "1",
            Help:
              "Defines how to interpret RF first channel Off command. Can be used in conjunction with Auto Off function: Ignore - to switch on the light by motion detectors and switch it off after some amount of time: in case of multiple motion detectors each would try to switch the light off that would break logics; Switch on - to switch on the light on both On and Off paddle press on the remote and switch it off after some amount of time. Button off click will still work (if button\n                operations are not disabled).\n            ",
            Item: [
              { label: "Switch off (default)", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch on", value: "2" },
              { label: "Switch on if load is off else switch off", value: "3" },
            ],
          },
          {
            type: "list",
            index: "23",
            genre: "config",
            label: "What to do on RF second channel off command",
            value: "0",
            size: "1",
            Help:
              "Defines how to interpret RF second channel Off command. Can be used in conjunction with Auto Off function: Ignore - to switch on the light by motion detectors and switch it off after some amount of time: in case of multiple motion detectors each would try to switch the light off that would break logics; Switch on - to switch on the light on both On and Off paddle press on the remote and switch it off after some amount of time. Button off click will still work (if button\n                operations are not disabled).\n            ",
            Item: [
              { label: "Switch off (default)", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch on", value: "2" },
              { label: "Switch on if load is off else switch off", value: "3" },
            ],
          },
          {
            type: "list",
            index: "16",
            genre: "config",
            label: "What to do on button Down press (for both channels)",
            value: "0",
            size: "1",
            Help:
              'Defines how to interpret button Down press. Depends on parameters 12 and 32 "Switch by buttons" parameter. If not Disabled this parameter will affect the action selected by the latter parameter. Can be used in conjunction with Auto Off function.',
            Item: [
              { label: "Switch off (Default)", value: "0" },
              {
                label: "Switch On if load is Off, else switch Off",
                value: "1",
              },
              { label: "Switch on", value: "2" },
            ],
          },
          {
            type: "list",
            index: "4",
            genre: "config",
            label: "Ignore Start Level",
            value: "1",
            size: "1",
            Help:
              "Defines if the dimmer shall ignore start level in StartLevelChange command despite it is specified or not.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes (default)", value: "1" },
            ],
          },
          {
            type: "list",
            index: "5",
            genre: "config",
            label: "Restore switch state after power cycle",
            size: "1",
            value: "3",
            Help:
              "Defines if the switch should restore switch state to the last state prior to device power off (power cycle).",
            Item: [
              { label: "No, turn OFF", value: "0" },
              { label: "Yes (only for the first channel)", value: "1" },
              { label: "Yes (only for the second channel)", value: "2" },
              { label: "Yes (for both channels) (Default)", value: "3" },
            ],
          },
          {
            type: "list",
            index: "11",
            genre: "config",
            label: "Invert buttons",
            value: "0",
            size: "1",
            Item: [
              { label: "No (Default)", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "12",
            genre: "config",
            label: "Switch by buttons (first channel)",
            value: "1",
            size: "1",
            Help:
              "If disabled, the local operations by buttons will not switch relay on first channel, but only send commands to On/Off association group. In this mode buttons are not linked with the switch anymore. They can be used separately: buttons to control remote device, switch will operate by RF commands only.",
            Item: [
              { label: "No", value: "0" },
              { label: "By single press and hold (default)", value: "1" },
              { label: "By double press and hold", value: "2" },
            ],
          },
          {
            type: "list",
            index: "32",
            genre: "config",
            label: "Switch by buttons (second channel)",
            value: "2",
            size: "1",
            Help:
              "If disabled, the local operations by buttons will not switch relay on second channel, but only send commands to On/Off association group. In this mode buttons are not linked with the switch anymore. They can be used separately: buttons to control remote device, switch will operate by RF commands only.",
            Item: [
              { label: "No", value: "0" },
              { label: "By single press and hold", value: "1" },
              { label: "By double press and hold (Default)", value: "2" },
            ],
          },
          {
            type: "list",
            index: "13",
            genre: "config",
            label: "Action on button single press or hold",
            value: "2",
            size: "1",
            Help:
              "Defines which command should be sent on button single press or hold. Basic and Scene Activation commands are sent to Association group. Use Scene Controller Conf to set up Scene ID for Scene Activation. Switch All commands are sent broadcast.",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (Default)",
                value: "2",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "1" },
              { label: "Send Scenes", value: "3" },
            ],
          },
          {
            type: "list",
            index: "14",
            genre: "config",
            label: "Action on button double press or hold",
            value: "2",
            size: "1",
            Help:
              "Defines which command should be sent on button double press or press-hold. Basic and Scene Activation commands are sent to Association group. Use Scene Controller Conf to set up Scene ID for Scene Activation. Switch All commands are sent broadcast. If not disabled, the device will wait for a click timeout to see if the second click would be pressed. This will introduce a small delay for single click commands.",
            Item: [
              { label: "Disabled (don't wait for double click)", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel, default)",
                value: "2",
              },
              { label: "Switch On, Off only (send Basic Set)", value: "1" },
              { label: "Send Scenes", value: "3" },
            ],
          },
          {
            type: "int",
            index: "20",
            genre: "config",
            label: "Energy consumption for first channel",
            units: "watts",
            min: "0",
            max: "708",
            value: "0",
            Help:
              "Specify the consumption of the load in watts, for the calculation of power consumption. Max load 1800 W. Disabled if zero.",
          },
          {
            type: "int",
            index: "40",
            genre: "config",
            label: "Energy consumption for second channel",
            units: "watts",
            min: "0",
            max: "708",
            value: "0",
            Help:
              "Specify the consumption of the load in watts, for the calculation of power consumption. Max load 1800 W. Disabled if zero.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                index: "1",
                max_associations: "5",
                label: "Send Reports on switch state change",
              },
              {
                index: "2",
                max_associations: "5",
                label: "Single press and hold of up/down buttons",
              },
              {
                index: "3",
                max_associations: "5",
                label: "Double press and press-hold of up/down buttons",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
