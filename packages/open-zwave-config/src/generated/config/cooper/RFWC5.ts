import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Group 1 Level",
            max: "255",
            min: "1",
            type: "byte",
            units: "",
            value: "10",
            Help:
              "Value 0x00-0x63 or 0xFF is the level for all nodes listed in the Group 1",
          },
          {
            genre: "config",
            index: "2",
            label: "Group 2 Level",
            max: "255",
            min: "1",
            type: "byte",
            units: "",
            value: "20",
            Help:
              "Value 0x00-0x63 or 0xFF is the level for all nodes listed in the Group 2",
          },
          {
            genre: "config",
            index: "3",
            label: "Group 3 Level",
            max: "255",
            min: "1",
            type: "byte",
            units: "",
            value: "30",
            Help:
              "Value 0x00-0x63 or 0xFF is the level for all nodes listed in the Group 3",
          },
          {
            genre: "config",
            index: "4",
            label: "Group 4 Level",
            max: "255",
            min: "1",
            type: "byte",
            units: "",
            value: "40",
            Help:
              "Value 0x00-0x63 or 0xFF is the level for all nodes listed in the Group 1",
          },
          {
            genre: "config",
            index: "5",
            label: "Group 5 Level",
            max: "255",
            min: "1",
            type: "byte",
            units: "",
            value: "50",
            Help:
              "Value 0x00-0x63 or 0xFF is the level for all nodes listed in the Group 4",
          },
        ],
      },
      { id: "113", Compatibility: "" },
      {
        id: "133",
        Associations: [
          {
            num_groups: "6",
            Group: [
              {
                auto: "false",
                index: "1",
                label: "Group 1",
                max_associations: "232",
              },
              { index: "2", label: "Group 2", max_associations: "232" },
              { index: "3", label: "Group 3", max_associations: "232" },
              { index: "4", label: "Group 4", max_associations: "232" },
              { index: "5", label: "Group 5", max_associations: "232" },
              { index: "255", label: "Group 255", max_associations: "1" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
