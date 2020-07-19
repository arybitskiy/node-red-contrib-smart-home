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
            label: "Led mode",
            size: "1",
            value: "1",
            Help: "Set LED indication mode",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Show switch", value: "1" },
              { label: "Indicator CC", value: "2" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Automatically switch off after",
            size: "2",
            units: "second",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "If not zero, automatically switch device off after an user defined time. Unit: Sec, Min: 0, Max: 65535, Default: 0",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "What to do on RF Off-Command",
            size: "1",
            value: "0",
            Help:
              "Defines how to interpret RF Off-Command.\n                Can be used in conjunction with Auto Off function: Ignore - to switch on the light by motion detectors and switch it off after some amount of time: in case of multiple motion detectors each would try to switch the light off that would break logics;\n                Switch on - to switch on the light on both ON and OFF paddle press on the remote and switch it off after some amount of time.\n                Button OFF click will still work (if button operations are not disabled).\n            ",
            Item: [
              { label: "Switch off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch on", value: "2" },
              { label: "Switch on if load is off else switch off", value: "3" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Restore switch state after power cycle",
            size: "1",
            value: "1",
            Help:
              "Defines if the switch should restore switch state to the last prior to device power off (power cycle).",
            Item: [
              { label: "No, turn off", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "20",
            label: "Energy consumption",
            size: "2",
            units: "watt",
            min: "0",
            max: "3500",
            value: "0",
            Help:
              "Specify the consumption of the load in watts, for the calculation of power consumption. Maximum load 1800 W. Unit: Watts, Min: 0, Max: 3500, Default: 0",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "21",
            label: "Off color",
            size: "1",
            value: "0",
            Help: "Color to OFF state",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue", value: "3" },
              { label: "Yellow", value: "4" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "22",
            label: "On color",
            size: "1",
            value: "3",
            Help: "Color to ON state",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue (Default)", value: "3" },
              { label: "Yellow", value: "4" },
            ],
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
                max_associations: "5",
                label: "Send reports on switch state change",
              },
              {
                index: "2",
                max_associations: "5",
                label: "Controlled by buttons",
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
