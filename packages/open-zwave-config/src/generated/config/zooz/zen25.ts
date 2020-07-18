import type { document } from "../../github.com/OpenZWave/device_configuration";

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
            index: "1",
            label: "On/Off Status Recovery After Power Failure",
            units: "",
            size: "1",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "Recovery state for the Double Plug's outlets if power outage occurs",
            Item: [
              { value: "0", label: "Previous state" },
              { value: "1", label: "ON" },
              { value: "2", label: "OFF" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "2",
            label: "Power Wattage Report Value Threshold",
            units: "Watts",
            size: "4",
            min: "0",
            max: "65535",
            value: "5",
            Help: "Minimum change in watts to report",
          },
          {
            type: "int",
            genre: "config",
            index: "3",
            label: "Power Wattage Report Frequency",
            units: "seconds",
            size: "4",
            min: "30",
            max: "2678400",
            value: "30",
            Help: "How often to report power consumption (W) in seconds",
          },
          {
            type: "int",
            genre: "config",
            index: "4",
            label: "Energy (kWh) Report Frequency ",
            units: "seconds",
            size: "4",
            min: "5",
            max: "2678400",
            value: "300",
            Help: "How often to report energy usage (kWh)in seconds",
          },
          {
            type: "int",
            genre: "config",
            index: "5",
            label: "Voltage Report Frequency ",
            units: "seconds",
            size: "4",
            min: "5",
            max: "2678400",
            value: "300",
            Help: "How often to report voltage (V) in seconds",
          },
          {
            type: "int",
            genre: "config",
            index: "6",
            label: "Electrical Current Report Frequency",
            units: "seconds",
            size: "4",
            min: "5",
            max: "2678400",
            value: "300",
            Help: "How often to report electrical current (A) in seconds",
          },
          {
            type: "byte",
            genre: "config",
            index: "7",
            label: "Overload Protection",
            units: "Amps",
            size: "1",
            min: "1",
            max: "10",
            value: "10",
            Help:
              "Turns off once amperage exceeds specified amount (both outlets combined)",
          },
          {
            type: "list",
            genre: "config",
            index: "8",
            label: "Auto Turn-Off Timer - Left (CH1) outlet",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Enable (or disable) the auto turn-off timer for the left (CH1) outlet.  See parameter 9 to set the amount of time.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "9",
            label: "Auto Turn-Off Timer Interval - Left (CH1) outlet",
            units: "minutes",
            size: "4",
            min: "1",
            max: "65535",
            value: "60",
            Help:
              "Set the time (in minutes) to turn off the left (CH1) outlet if the Auto Turn-Off Timer - Left is enabled (see parameter 8).",
          },
          {
            type: "list",
            genre: "config",
            index: "10",
            label: "Auto Turn-On Timer - Left (CH1) outlet",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Enable (or disable) the auto turn-on timer for the left (CH1) outlet.  See parameter 11 to set the amount of time since the device was turned off before it turns back on.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "11",
            label: "Auto Turn-On Timer Interval - Left (CH1) outlet",
            units: "minutes",
            size: "4",
            min: "1",
            max: "65535",
            value: "60",
            Help:
              'Set the time (in minutes) to turn on the left (CH1) outlet after it is turned off.  Requires the "Auto Turn-On Timer - Left" parameter (10) to be enabled.',
          },
          {
            type: "list",
            genre: "config",
            index: "12",
            label: "Auto Turn-Off Timer - Right (CH2) outlet",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Enable (or disable) the auto turn-off timer for the right (CH2) outlet.  See parameter 13 to set the amount of time.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "13",
            label: "Auto Turn-Off Timer Interval - Right (CH2) outlet",
            units: "minutes",
            size: "4",
            min: "1",
            max: "65535",
            value: "60",
            Help:
              "Set the time (in minutes) to turn off the right (CH2) outlet if the Auto Turn-Off Timer - Right is enabled (see parameter 12).",
          },
          {
            type: "list",
            genre: "config",
            index: "14",
            label: "Auto Turn-On Timer - Right (CH2) outlet",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "Enable (or disable) the auto turn-on timer for the right (CH2) outlet.  See parameter 15 to set the amount of time since the device was turned off before it turns back on.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "15",
            label: "Auto Turn-On Timer Interval - Right (CH2) outlet",
            units: "minutes",
            size: "4",
            min: "1",
            max: "65535",
            value: "60",
            Help:
              'Set the time (in minutes) to turn on the right (CH2) outlet after it is turned off.  Requires the "Auto Turn-On Timer - Right" parameter (14) to be enabled.',
          },
          {
            type: "list",
            genre: "config",
            index: "16",
            label: "Manual Control",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help:
              "Enable (or disable) manual control of the outlets using the Z-Wave button on the double plug",
            Item: [
              { label: "Disabled for both outlets", value: "0" },
              { label: "Enabled for both outlets", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "17",
            label: "LED Indicator Mode",
            units: "",
            size: "1",
            min: "0",
            max: "3",
            value: "0",
            Help: "Enable (or disable) LED indicators next to each outlet",
            Item: [
              {
                value: "0",
                label:
                  "LED displays power consumption whenever device is plugged in (LED stays on at all times even if plug is off)",
              },
              {
                value: "1",
                label:
                  "LED displays power consumption whenever device is plugged in (LED is only on if outlet is ON)",
              },
              {
                value: "2",
                label:
                  "LED displays power consumption for 5 seconds when device is turned on or off",
              },
              {
                value: "3",
                label:
                  "LED is OFF at all times except for inclusion, exclusion and Z-Wave range test",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "18",
            label: "Enable/Disable Power Reports",
            units: "",
            size: "1",
            min: "0",
            max: "4",
            value: "0",
            Help:
              "Enable (or disable) power reports sent to the hub (requires firmware version 2 or higher)",
            Item: [
              {
                value: "0",
                label: "Enable power monitoring and reports from USB port",
              },
              {
                value: "1",
                label:
                  "Disable power monitoring on both outlets and reports from USB port",
              },
              { value: "2", label: "Disable power monitoring of left outlet" },
              { value: "3", label: "Disable power monitoring of right outlet" },
              { value: "4", label: "Disable reports from USB port only" },
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
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Notifications", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
