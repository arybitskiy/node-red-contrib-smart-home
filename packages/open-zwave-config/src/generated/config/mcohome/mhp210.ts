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
            index: "2",
            label: "Report",
            size: "1",
            value: "0",
            Help:
              "\n                Bit 0: KWH Report\n                Bit 1: Voltage Report\n                Bit 2: Current Report\n                Bit 3: Watt Report\n                (Bit Set to 1: enable 0:disable)\n            ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Interval time",
            size: "2",
            min: "0",
            max: "65535",
            units: "second",
            value: "600",
            Help: "0 to 65535 second.\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              {
                index: "1",
                max_associations: "5",
                label: "Unsolicited report",
                auto: "false",
              },
              {
                index: "2",
                max_associations: "1",
                label: "Lifeline",
                auto: "true",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
