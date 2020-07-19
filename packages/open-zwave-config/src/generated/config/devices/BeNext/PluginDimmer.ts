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
            index: "3",
            label: "Control Type",
            value: "0",
            size: "1",
            Help:
              "The way the Built-in Dimmer reacts when light is turned on/off with button",
            Item: [
              {
                label:
                  "Switch own light on and send a Z-Wave message to all associated nodes (direct and external)",
                value: "0",
              },
              {
                label:
                  "Don.t switch own light on but only send a Z-Wave message to associated node. (external only)",
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
            label: "Maximum Power load",
            value: "125",
            size: "2",
            Help:
              "The maximum power load in watts when light is turned on, when measured higher then this value the Inline Dimmer is automatically turned off.",
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
            index: "11",
            label: "Auto meter report: percentage",
            min: "0",
            max: "100",
            size: "1",
            value: "2",
            Help:
              "A percentage that an energy value must be different compared to a previous sent value before an unsolicited meter report is sent. Minimum value = 0% (disabled report)  Maximum value = 100%",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "12",
            label: "Auto meter report: watt",
            min: "0",
            max: "255",
            size: "1",
            value: "3",
            Help:
              "A watt value that an energy value must be different compared to a previous sent value before an unsolicited meter report is sent. Minimum value = 0 watt  (disabled report) Maximum value = 255 watt",
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
            num_groups: "2",
            Group: [
              {
                index: "1",
                max_associations: "8",
                label: "BASIC Report on manual switching",
                auto: "false",
              },
              {
                index: "2",
                max_associations: "1",
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
