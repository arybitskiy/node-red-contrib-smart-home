import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Factory reset",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Reset but keep on network",
            Item: [
              { label: "No", value: "0" },
              { label: "Reset", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Dry contact report type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Report type on group 1",
            Item: [
              { label: "Alarm", value: "0" },
              { label: "Basic", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Operation Mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "",
            Item: [
              { label: "Normal", value: "1" },
              { label: "Always Awake", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Temperature offset",
            size: "2",
            type: "short",
            units: "K",
            value: "1",
            Help: "",
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
                auto: "false",
                index: "1",
                label: "Binary report",
                max_associations: "5",
              },
              { index: "2", label: "Tamper report", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
