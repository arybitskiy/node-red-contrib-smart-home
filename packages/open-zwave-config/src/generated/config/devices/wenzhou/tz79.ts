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
            label: "LED Behaviour",
            value: "1",
            size: "1",
            Help: "Defines the behavior of the LED.",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverted", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Memory function",
            value: "1",
            size: "1",
            Help: "",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Watt meter report period",
            min: "1",
            max: "32767",
            units: "5 sec",
            value: "720",
            Help:
              "If the setting is configured for 1 hour (value=720), the TZ79 will report its instant power consumption every 1 hour.",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "4",
            label: "kWh meter report period",
            min: "1",
            max: "32767",
            units: "10 min",
            value: "6",
            Help:
              "If the setting is configured for 1 hour (value=6), the TZ79 will report its accumulated power consumption (kWh) every 1 hour.",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Threshold of Watt for Load Caution",
            min: "10",
            max: "3000",
            units: "Watt",
            value: "3000",
            Help: "",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Threshold of Kwh for Load Caution",
            min: "0",
            max: "10000",
            units: "Kwh",
            value: "0",
            Help: "",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Mode",
            value: "3",
            size: "1",
            Help: "",
            Item: [
              { label: "Edge", value: "1" },
              { label: "Pulse", value: "2" },
              { label: "Edge-toggle", value: "3" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "Group2" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
