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
            index: "1",
            genre: "config",
            label: "Re-trigger Wait Time",
            size: "2",
            min: "0",
            max: "255",
            units: "minutes",
            value: "3",
            Help:
              "By default, to conserve battery life, after the WAPIRZ-1 detects motion it cannot\tbe re-triggered by motion again for 3 minutes.\n\t\t\tEach time motion is detected (even during this wait time) the 3 minute timer starts over. \n\t\t\tThe length of the re-trigger wait time can be adjusted with this setting.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", max_associations: "5", label: "Lifeline" }],
          },
        ],
      },
    ],
  },
};

export default config;
