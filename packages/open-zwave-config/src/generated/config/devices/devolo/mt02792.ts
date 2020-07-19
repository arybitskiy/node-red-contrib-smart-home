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
            index: "1",
            genre: "config",
            label: "Watt Meter Report Period",
            min: "1",
            max: "32767",
            value: "720",
            Help:
              "\n                0 Disable automatic interval meter reporting of Watts.\n                1 to 32767 Enable automatic interval reporting with an interval of 5 * the value.\n            ",
          },
          {
            type: "short",
            index: "2",
            genre: "config",
            label: "KWH Meter Report Period",
            min: "1",
            max: "32767",
            value: "6",
            Help:
              "\n                0 Disable automatic interval meter kWh reporting.\n                If the setting is configured for 1hour (set value =6), the Home Control Metering Plug will report its Accumulated Power Consumption (KW/h) every 1 hour to Group1 node. The maximum interval to report its Accumulated Power Consumption (KW/h) is 227.55 days (10min*32767/1440=227.55 days).\n            ",
          },
          {
            type: "short",
            index: "3",
            genre: "config",
            label: "Threshold of current for Load caution",
            min: "10",
            max: "1300",
            value: "1300",
            Help:
              "\n                This is a warning when the current of load over the preset threshold value, if the setting value is 1300, when the load current of Relay1 over this value, Home Control Metering Plug will send current meter report to warn the Group1 node, the Range of the setting value is from 10 to 1300,and the default value is 1300.\n            ",
          },
          {
            type: "short",
            index: "4",
            genre: "config",
            label: "Threshold of KWh for Load caution",
            min: "1",
            max: "10000",
            value: "1000",
            units: "KWh",
            Help:
              "\n                0 Disable kWh Load Caution Reporting\n                1 to 10000 Enable automatic warning when the accumulated kWh power consumption exceeds the setting value from 1KWh to 10000KWh.\n            ",
          },
          {
            type: "list",
            index: "5",
            genre: "config",
            label: "Restore switch state mode",
            min: "0",
            max: "2",
            value: "1",
            size: "1",
            Help:
              "\n                Whenever the AC power return from lost, Home Control Metering Plug will restore the switch state which could be SWITCH OFF, LAST SWITCH STATE, SWITCH ON. The default setting is LAST SWITCH STATE.\n            ",
            Item: [
              { label: "Switch Off", value: "0" },
              { label: "Last switch state", value: "1" },
              { label: "Switch On", value: "2" },
            ],
          },
          {
            type: "list",
            index: "6",
            genre: "config",
            label: "Mode of Switch Off function",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "\n                When the mode of switch On/Off is set to 0, any command of switch off will be disabled and the On/Off function of include button will be disabled. The default setting is enable mode.\n            ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            index: "7",
            genre: "config",
            label: "LED indication mode",
            min: "1",
            max: "3",
            value: "0",
            size: "1",
            Help: "\n                LED indication mode\n            ",
            Item: [
              { label: "Switch state", value: "1" },
              { label: "Night Mode", value: "2" },
              { label: "One flash mode", value: "3" },
            ],
          },
          {
            type: "short",
            index: "8",
            genre: "config",
            label: "Auto off timer",
            min: "0",
            max: "32767",
            value: "0",
            units: "second",
            Help:
              "\n                0 Disable the auto off function.\n                1 to 32767 1s to 32767s for automatically turning off.\n            ",
          },
          {
            type: "list",
            index: "9",
            genre: "config",
            label: "RF off command mode",
            min: "0",
            max: "3",
            value: "0",
            units: "",
            size: "1",
            Help:
              "\n                Whenever a switch off command,BASIC_SET, BINARY_SWITCH_SET, SWITCH_ALL_OFF, is received, it could be interpreted as a variety of 4 commands.\n            ",
            Item: [
              { label: "Switch Off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch toggle", value: "2" },
              { label: "Switch On", value: "3" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", max_associations: "1", label: "Lifeline" }],
          },
        ],
      },
    ],
  },
};

export default config;
