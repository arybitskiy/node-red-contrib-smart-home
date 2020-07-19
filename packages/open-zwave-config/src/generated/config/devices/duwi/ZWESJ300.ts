import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "short",
            index: "0",
            genre: "config",
            label: "Running time",
            units: "",
            Help:
              "Continuous operation. 0x01-0x7F: 1-127 seconds in 1-second steps. 0x80-0xFE: 130-1390 seconds (0xFE) in 10 second-steps. 0xFF: 120 seconds (default;",
          },
          {
            type: "list",
            index: "1",
            genre: "config",
            label: "Stop-functionality",
            units: "",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled (default)", value: "1" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
