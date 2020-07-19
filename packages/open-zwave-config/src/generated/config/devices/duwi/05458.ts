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
            value: "3",
            size: "1",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Show switch state", value: "1" },
              { label: "Night mode", value: "2" },
              { label: "Operated by Indicator CC", value: "3" },
            ],
          },
          {
            type: "short",
            index: "2",
            genre: "config",
            label: "Automatically switch off after",
            units: "seconds",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "0\tDisabled (Default).\n\t\t\t1 - 65535, automatically switch off after a user defined time",
          },
          {
            type: "list",
            index: "3",
            genre: "config",
            label: "What to do on RF off command",
            value: "0",
            size: "1",
            Help:
              "Defines how to interpret RF Off command.\n\t\t\tCan be used in conjunction with Auto Off function: Ignore - to switch on the light by motion detectors and switch it off after some amount of time: in case of multiple motion detectors each would try to switch the light off that would break logics;\n\t\t\tSwitch on - to switch on the light on both On and Off paddle press on the remote and switch it off after some amount of time. Button off click will still work (if button operations are not disabled).",
            Item: [
              { label: "Switch off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch on", value: "2" },
              { label: "Switch on if load is off else switch off", value: "3" },
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
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "byte",
            index: "5",
            genre: "config",
            label: "Dimmer speed",
            units: "x 10 milliseconds",
            min: "0",
            max: "255",
            value: "30",
            Help:
              "Time to dim on button presses and Set command (if it has no duration specified).\n\t\t\tIf not 0, dimming will be done smoothly to preserve bulb life.\n\t\t\t0 : Instantly.\n\t\t\t1 - 255\t: in 10ms units (Default 30).\n\t\t\t",
          },
          {
            type: "byte",
            index: "6",
            genre: "config",
            label: "Dimming long speed",
            units: "Seconds",
            min: "1",
            max: "255",
            value: "3",
            Help:
              "Time to dim on button holds and StartLevel Change command (if it has no duration specified).",
          },
          {
            type: "list",
            index: "7",
            genre: "config",
            label: "Set Maximum Light on On click",
            value: "0",
            size: "1",
            Help:
              "Defines if the dimmer shall set maximum light level on On command.\n\t\t\tBy default on On command dimmer restores last level.\n\t\t\tThis parameter allows to configure to set maximum level on second On command (if already On) or to always switch on to maximum level.",
            Item: [
              { label: "No", value: "0" },
              { label: "If already On", value: "1" },
              { label: "Always", value: "2" },
            ],
          },
          {
            type: "byte",
            index: "8",
            genre: "config",
            label: "Baby Dimming Time",
            units: "minutes",
            min: "0",
            max: "255",
            value: "0",
            Help:
              "Time to dim on double click Off button for Baby-Dim function.\n\t\t\tThis function works only if the load is operated by single press and hold button action.\n\t\t\tIf enabled, the device will wait for a click timeout to see if the second click would be pressed.\n\t\t\tThis will introduce a small delay for single click commands.\n\t\t\t0 : Disabled (Default).\n\t\t\t1 - 99 : in minutes.\n\t\t\t",
          },
          {
            type: "byte",
            index: "9",
            genre: "config",
            label: "Target Dimming Level for Baby Dimming",
            units: "%",
            min: "0",
            max: "99",
            value: "0",
            Help:
              "Target level on which to stop while executing Baby Dimming. Can be 0 to completely switch off the light. ",
          },
          {
            type: "byte",
            index: "10",
            genre: "config",
            label: "Typical click timeout",
            units: "x 10 milliseconds",
            min: "1",
            max: "100",
            value: "50",
            Help:
              "Typical time used to differentiate click, hold, double and triple clicks.",
          },
          {
            type: "list",
            index: "11",
            genre: "config",
            label: "Invert buttons",
            value: "0",
            size: "1",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "12",
            genre: "config",
            label: "Switch by buttons",
            value: "1",
            size: "1",
            Help:
              "If disabled, the local operations by buttons will not switch the load, but only send commands to On/Off association group.\n\t\t\tIn  this mode buttons are not linked with the switch anymore.\n\t\t\tThey can be used separately: buttons to control remote device, switch will operate by RF commands only.",
            Item: [
              { label: "No", value: "0" },
              { label: "By single press and hold", value: "1" },
              { label: "By double press and hold", value: "2" },
            ],
          },
          {
            type: "list",
            index: "13",
            genre: "config",
            label: "Action on button single press or hold",
            value: "4",
            size: "1",
            Help:
              "Defines which command should be sent on button single press or hold.\n\t\t\tBasic and Scene Activation commands are sent to Association group.\n\t\t\tUse Scene Controller Conf to set up Scene ID for Scene Activation.\n\t\t\tSwitch All commands are sent broadcast.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Send Basic Set", value: "1" },
              { label: "Send Switch All", value: "2" },
              { label: "Send Scenes", value: "3" },
              { label: "Send Basic Set and Switch Multilevel", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "14",
            genre: "config",
            label: "Action on button double press or hold",
            value: "0",
            size: "1",
            Help:
              "\n\t\t\tDefines which command should be sent on button double press or press-hold.\n\t\t\tBasic and Scene Activation commands are sent to Association group.\n\t\t\tUse Scene Controller Conf to set up Scene ID for Scene Activation.\n\t\t\tSwitch All commands are sent broadcast.\n\t\t\tIf not disabled, the device will wait for a click timeout to see if the second click would be pressed.\n\t\t\tThis will introduce a small delay for single click commands.\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Send Basic Set", value: "1" },
              { label: "Send Switch All", value: "2" },
              { label: "Send Scenes", value: "3" },
              { label: "Send Basic Set and Switch Multilevel", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "15",
            genre: "config",
            label: "Send the following Switch All commands",
            value: "1",
            size: "1",
            Item: [
              { label: "Switch All Off only", value: "1" },
              { label: "Switch All On only", value: "2" },
              { label: "Switch All On and Off", value: "255" },
            ],
          },
          {
            type: "list",
            index: "16",
            genre: "config",
            label: "What to do on button Down press",
            value: "1",
            size: "1",
            Help:
              '\n\t\t\tDefines how to interpret button Down press. Depends on "Switch by buttons" parameter.\n\t\t\tIf not Disabled this parameter will affect the action selected by the latter parameter.\n\t\t\tCan be used in conjunction with Auto Off function.\n\t\t\t',
            Item: [
              { label: "Switch Off", value: "0" },
              {
                label: "Switch On if load is Off, else switch Off",
                value: "1",
              },
              { label: "Switch on", value: "2" },
            ],
          },
          {
            type: "byte",
            index: "17",
            genre: "config",
            label: "Limit minimal light level",
            units: "dimmer level %",
            min: "1",
            max: "95",
            value: "1",
          },
          {
            type: "byte",
            index: "18",
            genre: "config",
            label: "Limit maximal light level",
            units: "dimmer level %",
            min: "0",
            max: "99",
            value: "99",
            Help:
              "Maximum level should be greater than minimal level. Set to 0 to work as a switch (off or full on only), or set to 10 - 99",
          },
          {
            type: "byte",
            index: "19",
            genre: "config",
            label: "Switch On on a defined level",
            units: "dimmer level %",
            min: "0",
            max: "99",
            value: "0",
            Help: "Set to 0 to use previous light level, or set to 1 - 99",
          },
          {
            type: "byte",
            index: "51",
            genre: "config",
            label: "Pause before pulse",
            units: "x 10/156 milliseconds",
            min: "1",
            max: "60",
            value: "28",
            Help:
              "NB: Do not touch these settings if you are not sure what they mean! For dimmable LEDs and CFL with bypass use value 1. For other bulbs use default value.",
          },
          {
            type: "byte",
            index: "52",
            genre: "config",
            label: "Pause after pulse",
            units: "x 10/156 milliseconds",
            min: "5",
            max: "60",
            value: "28",
            Help:
              "NB: Do not touch these settings if you are not sure what they mean! For dimmable LEDs and CFL with bypass use value 40. For other bulbs use default value.",
          },
          {
            type: "byte",
            index: "53",
            genre: "config",
            label: "Pulse width",
            units: "x 10/156 milliseconds",
            min: "3",
            max: "20",
            value: "10",
            Help:
              "NB: Do not touch these settings if you are not sure what they mean! For dimmable LEDs and CFL with bypass use value 20. For other bulbs use default value.",
          },
          {
            type: "list",
            index: "54",
            genre: "config",
            label: "Pulse type",
            value: "0",
            size: "1",
            Help:
              "NB: Do not touch these settings if you are not sure what they mean!",
            Item: [
              { label: "Long pulse", value: "0" },
              { label: "Short pulse", value: "1" },
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
              {
                index: "1",
                max_associations: "14",
                label: "Single press and hold of up/down buttons",
                auto: "false",
              },
              {
                index: "2",
                max_associations: "14",
                label: "Double press and press-hold of up/down buttons",
              },
              {
                index: "3",
                max_associations: "14",
                label: "Lifeline",
                auto: "true",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
