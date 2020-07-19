import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "133",
        Instance: [{ index: "1" }],
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label: "Group 1",
                max_associations: "5",
                Node: [{ id: "1" }],
              },
            ],
          },
        ],
        Compatibility: [{ CreateVars: [true] }],
      },
      {
        id: "64",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            max: "0",
            min: "0",
            read_only: "false",
            type: "list",
            units: "",
            value: "0",
            write_only: "false",
            Item: [
              { label: "Off", value: "0" },
              { label: "Heat", value: "1" },
              { label: "Cool", value: "2" },
              { label: "Auto", value: "3" },
              { label: "Aux Heat", value: "4" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
              { index: "2", label: "Cool" },
              { index: "3", label: "Auto" },
              { index: "4", label: "Aux Heat" },
            ],
          },
        ],
        Compatibility: [{ CreateVars: [true] }],
      },
      {
        id: "67",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Heating 1",
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "F",
            value: "65",
            write_only: "false",
          },
          {
            genre: "user",
            index: "2",
            instance: "1",
            label: "Cooling 1",
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "F",
            value: "80",
            write_only: "false",
          },
        ],
        Compatibility: [{ Base: [0], CreateVars: [true] }],
      },
    ],
  },
};

export default config;
