import type { document } from "../../github.com/OpenZWave/device_configuration";

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
            type: "byte",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Mode",
            value: "255",
            Help: "The mode in which a different Z-Wave message is sent.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "11",
            label: "Double press time",
            value: "20",
            Help:
              "The time that a user has to activate the double button pressed scene, if time is passed then the single pressed button scene is notified. (value * 10 ms)",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "12",
            label: "Temperature offset",
            value: "0",
            size: "2",
            Help:
              "A signed integer to determine the offset of the temperature.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              {
                index: "1",
                max_associations: "8",
                label: "Group 1",
                auto: "false",
              },
              { index: "2", max_associations: "8", label: "Group 2" },
              { index: "3", max_associations: "8", label: "Group 3" },
              { index: "4", max_associations: "8", label: "Group 4" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
