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
            label: "Night light",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "The LED on the TZ74 will by default, turn ON when the load attached is turned OFF. To make the LED turn ON when the load attached is turned ON instead, set parameter to a value of 0.",
            Item: [
              { label: "The LED is ON when the load is ON", value: "0" },
              { label: "The LED is ON when the load is OFF", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Memory Function",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help: "switch memory function",
            Item: [
              { label: "no switch memory function", value: "0" },
              {
                label: "The socket status is same as before when power ON",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Invert switch",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Change the top of the switch to OFF or ON , set parameter 4 to 1.",
            Item: [
              { label: "The top of the switch is ON", value: "0" },
              { label: "The top of the switch is OFF", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Edge or Pulse mode",
            min: "1",
            max: "3",
            value: "3",
            size: "1",
            Help: "switch mode",
            Item: [
              { label: "Edge Mode", value: "1" },
              { label: "Pulse Mode", value: "2" },
              { label: "Edge-toggle Mode", value: "3" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
