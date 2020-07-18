import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Watt Meter Report Period",
            max: "32000",
            min: "1",
            type: "short",
            value: "720",
            Help:
              "If the setting is configured for 1hour (set value =720), the device will report its instant power consumption every 1 hour to Z-Wave Controller. Unit: 5 seconds.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "kWh meter report period",
            max: "32000",
            min: "1",
            type: "short",
            value: "6",
            Help:
              "If the setting is configured for 1hour (set value =6), the device will report its power consumption in KWh every 1 hour to Z-Wave Controller. Unit: 10 minutes.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Selected end point",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Selected end points",
            Item: [
              { label: "Relay 1 and Relay 2", value: "1" },
              { label: "Relay 1", value: "2" },
              { label: "Relay 2", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Edge or Pulse mode or Edge-Toggle mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Edge or Pulse mode or Edge-Toggle mode defines the operating mode of the externally connected switch. Default: Edge Mode",
            Item: [
              { label: "Edge Mode", value: "1" },
              { label: "Toggle Mode", value: "2" },
              { label: "Edge/Toggle Mode", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Threshold of Current for Load Caution",
            max: "600",
            min: "10",
            type: "short",
            value: "600",
            Help: "Threshold of Current for Load Caution. Unit 0.01A",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Threshold of kWh for Load Caution",
            max: "10000",
            min: "0",
            type: "short",
            value: "10000",
            Help: "Threshold of kWh for Load Caution. Unit 1KWh",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Relay control mode",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Relay control mode. Default: Power mode",
            Item: [
              { label: "By measuring 2w of power as 'On'.", value: "1" },
              { label: "Directly", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Restore relay state mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Restore switch state mode",
            Item: [
              { label: "NC terminal", value: "0" },
              { label: "Last relay switch state", value: "1" },
              { label: "NO terminal", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Existence of endpoint 3",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Whether endpoint 3 exists.",
            Item: [
              { label: "Endpoint 3 exists", value: "1" },
              { label: "No Endpoint 3", value: "2" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                index: "1",
                label: "Relay 1 and 2 together",
                max_associations: "1",
              },
              { index: "2", label: "Relay 1", max_associations: "1" },
              { index: "3", label: "Relay 2", max_associations: "1" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
