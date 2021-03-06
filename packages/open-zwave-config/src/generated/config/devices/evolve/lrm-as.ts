import type { document } from "../../../github.com/OpenZWave/device_configuration";

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
            index: "3",
            label: "Night Light",
            units: "",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "By default, the LED on the LRM-AS will turn OFF when the load attached is turned ON. To make the LED turn ON when the load attached is turned ON, set parameter to a value of 0.",
          },
          {
            type: "byte",
            genre: "config",
            index: "4",
            label: "Invert Switch",
            units: "",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "To change the top of the switch to OFF and the bottom of the switch to ON, set parameter to 1.",
          },
          {
            type: "byte",
            genre: "config",
            index: "29",
            label: "Load Sense",
            units: "",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "Set this parameter to 0 to disable load sense. Set this parameter to 1 to enable load sense",
          },
        ],
      },
    ],
  },
};

export default config;
