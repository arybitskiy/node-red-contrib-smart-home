import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            index: "1",
            label: "Metering Reports",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "Choose if you want the Mini Plug to send metering reports to the controller.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "2",
            label: "Metering Reports Interval",
            size: "2",
            min: "1",
            max: "65535",
            value: "300",
            units: "seconds",
            Help:
              "Choose how often you want the Mini Plug to send metering reports to the controller, in seconds.",
          },
          {
            type: "byte",
            genre: "config",
            index: "6",
            label: "Power Reporting Percentage Threshold",
            units: "%",
            size: "1",
            min: "1",
            max: "100",
            value: "5",
            Help:
              "Percentage change of electricity, voltage, power consumption, or energy before report is sent.\n                Defaults to 5%.",
          },
          {
            type: "byte",
            genre: "config",
            index: "3",
            label: "Overload Protection",
            size: "1",
            min: "1",
            max: "16",
            value: "13",
            units: "Amperes",
            Help:
              "Use this parameter to adjust the max amount of electricity you want your Mini Plug to handle, by Amperes.\n                Defaults to 13A.",
          },
          {
            type: "byte",
            genre: "config",
            index: "4",
            label: "LED Notifications - Heavy Load",
            size: "1",
            min: "1",
            max: "13",
            value: "12",
            units: "Amperes",
            Help:
              "Use this parameter to adjust the LED Notification for Heavy Load by setting a threshold of Amperes.\n                Must be lower than Parameter #3.\n                Defaults to 12A",
          },
          {
            type: "list",
            genre: "config",
            index: "5",
            label: "LED Notifications",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help: "Use this parameter to turn LED notifications on or off.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "7",
            label: "On/Off Status After Power Failure",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help:
              'Choose the recovery state for the Mini Plug if power outage occurs. Off sets the state to "OFF" once power is restored.\n                Resume sets the state to the previous state prior to the outage.\n                Defaults to Resume.',
            Item: [
              { label: "Off", value: "0" },
              { label: "Resume", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "8",
            label: "Auto Turn-Off Timer",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Use this parameter to enable or disable the auto turn-off timer function.\n                If enabled, the Mini Plug will automatically turn off after a fixed period of time, set in Parameter #9.\n                Defaults to Disabled.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "9",
            label: "Auto Turn-Off Timer Interval",
            units: "minutes",
            size: "2",
            min: "1",
            max: "65535",
            value: "150",
            Help:
              "Use this parameter to set the time, in minutes, after which the Mini Plug should turn off if Auto Turn-Off Timer is Enabled (Parameter #8).\n                Defaults to 150 minutes.",
          },
          {
            type: "list",
            genre: "config",
            index: "10",
            label: "Manual Control",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "Choose if you want the Z-Wave button to turn the Mini Plug on or off manually, or if you want to disable this function. Defaults to Enabled.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "Status" },
              { index: "3", max_associations: "5", label: "Notifications" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
