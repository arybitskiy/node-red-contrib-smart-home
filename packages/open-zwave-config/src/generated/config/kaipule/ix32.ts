import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Basic Set Level",
            size: "1",
            min: "1",
            max: "255",
            value: "255",
            Help:
              "Basic Set parameter setting, the receivers make relevant adjustment according to parameter value",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Turn Off Light Time",
            size: "1",
            min: "1",
            max: "255",
            units: "5seconds",
            value: "1",
            Help:
              "When the device triggered and sends out BASIC SET to the lightings, the light turns on and off as the set time. \n\t\t\tThe minimum value is 1, means the light bright time is 1*5s (5 seconds), and turn off after 5 seconds, if the value is t, means the bright time is t*5s, turn off after t*5 seconds.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Alarm Elimination Time",
            size: "1",
            min: "1",
            max: "24",
            units: "5seconds",
            value: "4",
            Help: "Eliminate alarm after 5xt seconds.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", max_associations: "1", label: "Lifeline" },
              { index: "2", max_associations: "2", label: "Control BASIC SET" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
