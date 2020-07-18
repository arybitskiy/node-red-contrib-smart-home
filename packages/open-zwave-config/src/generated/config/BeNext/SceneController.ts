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
            index: "16",
            label: "Double press time",
            value: "20",
            Help:
              "The time that a user has to activate the double button pressed scene, if time is passed then the single pressed button scene is notified.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                max_associations: "8",
                label:
                  "Group 1: All CENTRAL_SCENE_NOTIFICATION messages are sent to the nodes in this group.",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
