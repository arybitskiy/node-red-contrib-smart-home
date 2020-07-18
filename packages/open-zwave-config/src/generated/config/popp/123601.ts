import type { document } from "../../github.com/OpenZWave/device_configuration";

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
            Help: "Set LED indication mode",
            Item: [
              { label: "Show switch state (Default)", value: "1" },
              { label: "Disabled", value: "0" },
              { label: "Night mode (inverted switch state)", value: "2" },
              { label: "Operated by Indicator Command Class", value: "3" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Automatically switch off after",
            size: "2",
            min: "1",
            max: "65535",
            value: "0",
            Help:
              "If not zero, automatically switch off after a user defined time. Unit: Sec, Min: 0, Max: 65535, Default: 0",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "What to do on RF off command",
            size: "1",
            Help:
              "Defines how to interpret RF Off command. Can be used in conjunction with Auto Off function: Ignore - to switch on the light by motion detectors and switch it off after some amount of time: in case of multiple motion detectors each would try to switch the light off that would break logics; Switch on - to switch on the light on both On and Off paddle press on the remote and switch it off after some amount of time. Button off click will still work (if button operations are not disabled).",
            Item: [
              { label: "Switch off (Default)", value: "0" },
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
            Help:
              "Defines if the switch should restore switch state to the last state prior to device power off (power cycle).",
            Item: [
              { label: "Yes (Default)", value: "1" },
              { label: "No, turn off", value: "0" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", max_associations: "1", label: "Group 1" }],
          },
        ],
      },
    ],
  },
};

export default config;
