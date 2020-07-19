import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Set to Default",
            value: "-1",
            Help:
              "Set all configuration values to default values (factory settings).",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Button Type",
            value: "0",
            size: "1",
            Help: "The way how the button reacts when press/released",
            Item: [
              {
                label:
                  "Toggle light when button is pressed, no action when button is released.",
                value: "0",
              },
              {
                label:
                  "Toggle light when button is released, Start dimming when button pressed.",
                value: "1",
              },
              {
                label:
                  "Toggle light when button is pressed and when button is Released, start dimming when quickly press and release button.",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Control Type",
            value: "0",
            size: "1",
            Help:
              "The way the Built-in Dimmer reacts when light is turned on/off with button",
            Item: [
              {
                label:
                  "Switch own light on and send a Z-Wave message to all associated nodes (direct and extern)",
                value: "0",
              },
              {
                label:
                  "Don.t switch own light on but only send a Z-Wave message to associated node. (extern only)",
                value: "1",
              },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Dimming enabled",
            value: "1",
            Help:
              "This parameter is used to enable the dimming option of the product. When disabled the dimming and fading routine are disabled.",
            Item: [
              { label: "Dimming disabled.", value: "0" },
              { label: "Dimming enabled.", value: "2" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Maximum Powerload",
            value: "200",
            size: "2",
            Help:
              "The maximum powerload in watts when light is turned on, when measured higher then this value the Inline Dimmer is automatically turned off.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Dimming Speed",
            value: "3",
            Help:
              "The speed of dimming when activated (manual and RF). Dim speed is 1% per value (* 10 ms)",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "8",
            label: "Fading up  Speed",
            value: "3",
            Help:
              "The speed of fading up when activated (manual and RF). Fade speed is 1% per value (* 10 ms)",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "9",
            label: "Toggle time",
            value: "50",
            Help:
              "The time window to repress button to start dimming. Toggle time is value (* 10ms)",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "11",
            label: "Auto meter report: percentage",
            value: "20",
            Help:
              "A percentage that an energy value must be different compared to a previous sent value before an unsolicited meter report is sent. Minimum value = 10%  Maximum value = 100%",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "12",
            label: "Auto meter report: watt",
            value: "10",
            Help:
              "A watt value that an energy value must be different compared to a previous sent value before an unsolicited meter report is sent. Minimum value = 5 watt  Maximum value = 255 watt",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "13",
            label: "Auto meter report: time",
            value: "20",
            Help:
              "A time value that has to be passed compared to a previous sent value before a unsolicited meter report is sent. Minimum value = 10 seconds  Maximum value = 255 seconds",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "14",
            label: "Last known status",
            value: "0",
            Help:
              "What to do with lamp status when power applied. If 0x00: Always switch light off when power applied. If > 0x00: Switch lamp on/off depending on last known lampstatus before power was disconnected.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "15",
            label: "Fading down speed",
            value: "1",
            Help:
              "The speed of fading up when activated (manual and RF). Fade speed is 1% per value (* 10 ms)",
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
                max_associations: "8",
                label:
                  "Group 1: All nodes in this group will receive a BASIC_SET frame when light is set to a certain state with the button of the Built-in Dimmer (manual switching).",
                auto: "false",
              },
              {
                index: "2",
                max_associations: "1",
                label:
                  "Group 2: The node associated in this group will receive a SWITCH_MULTILEVEL_REPORT frame every time the level of light is changed, where the value represents the (changed) dim level. The status is reported after every change that means manual but also if changed by Z-Wave. The node in this group will also received the (auto) METER_REPORT.",
                auto: "true",
              },
              {
                index: "3",
                max_associations: "1",
                label:
                  "Group 3: If configured that the control mode is extern only (configuration param3, value 1) then a BASIC_SET frame is sent to the node in this group when the button is changed.",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
