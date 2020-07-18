import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Configuring the OFF Delay",
            units: "second",
            value: "0",
            min: "0",
            max: "65536",
            size: "2",
            Help:
              "This parameter sets the delay time from when the Door/Window Sensor sends the BASIC_SET command to Association Group 2 and when the BASIC_SET(0) is sent.,It accepts a value up to 65,535, in seconds.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Basic Set Level",
            value: "255",
            min: "0",
            max: "255",
            size: "1",
            Help:
              "This parameter sets the value sent by the BASIC_SET command to Association Group 2.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "Control Commands" },
              {
                index: "3",
                max_associations: "5",
                label: "Send Notification Report",
              },
              {
                index: "4",
                max_associations: "5",
                label: "Send Binary Sensor Report",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
