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
            label: "LED indication mode",
            size: "1",
            value: "1",
            Help: "Set LED indication mode",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Show switch (default)", value: "1" },
              { label: "Operated by Indicator Command Class", value: "2" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Automatically switch Off",
            size: "2",
            units: "seconds",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "\n\t\t\tIf not zero, automatically switch device off after an user defined time.\n\t\t\t0 -> Disabled (default)\n\t\t\t1-65535 -> Enabled time in seconds.\n\t\t\t",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Behaviour for a RF Off-Command",
            size: "1",
            value: "0",
            Help:
              "\n\t\t\tDefines how to interpret RF Off-Command. \n\t\t\tIgnore - to switch on the light by motion detectors and switch it off after some amount of time;\n\t\t\tin case of multiple motion detectors each would try to switch the light off that would break logics;\n\t\t\tSwitch on - to switch on the light on both On and Off paddle press on the remote and switch it off after some amount of time.\n\t\t\tButton off click will still work (if button operations are not disabled).\n\t\t\t",
            Item: [
              { label: "Switch off (default)", value: "0" },
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
              { label: "Yes (default)", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "20",
            label: "Energy consumption",
            size: "2",
            units: "Watts",
            min: "0",
            max: "3500",
            value: "0",
            Help:
              "\n\t\t\tSpecify the consumption of the load in Watts, for the calculation of power.\n\t\t\t0 -> Disabled (default)\n\t\t\t1 - 3500 -> Watts\n\t\t\t",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "21",
            label: "LED OFF color",
            size: "1",
            value: "0",
            Help: "Color for OFF state",
            Item: [
              { label: "Off (default)", value: "0" },
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
            label: "LED ON color",
            size: "1",
            value: "3",
            Help: "Color for ON state",
            Item: [
              { label: "Off", value: "0" },
              { label: "Red", value: "1" },
              { label: "Green", value: "2" },
              { label: "Blue (default)", value: "3" },
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
              { index: "1", max_associations: "5", label: "Lifeline" },
              {
                index: "2",
                max_associations: "5",
                label: "Controlled by buttons",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
