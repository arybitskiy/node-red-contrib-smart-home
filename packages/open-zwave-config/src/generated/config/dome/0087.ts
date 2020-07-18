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
            label: "Meter Report",
            units: "level",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Help:
              "\n        This parameter enables/disables the METER_REPORT function, which sends periodic reports to Group1 members with information on line voltage, current load, and power and energy consumption.\n        Also see Param 2 and 6.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "2",
            label: "Meter Report interval",
            min: "1",
            max: "65535",
            size: "2",
            units: "Seconds",
            value: "300",
            Help:
              "This parameter sets the amount of time between each successive METER_REPORT signal sent to Group 1 (also see Param 1 and 6.)",
          },
          {
            type: "byte",
            genre: "config",
            index: "3",
            label: "Overload Current Level",
            min: "1",
            max: "16",
            size: "1",
            units: "Amp",
            value: "13",
            Help:
              "\n        Sets the maximum current the plug will pass before it cuts off power and sends a NOTIFICATION_EVENT_POWER_MANAGEMENT_OVER_LOAD_DETECTED signal to Group 1 and a BASIC_SET(FF) to Group 2.\n        The LED will then blink red once per second until the notification is cleared after the current returns to normal.\n        To clear the NOTIFICATION and start monitoring again, the BUTTON must be pushed once (only after the current is back to normal) or a BINARY_SWITCH_SET(FF) command must be sent.\n        NOTE: this value must be higher than Param 4.\n      ",
          },
          {
            type: "byte",
            genre: "config",
            index: "4",
            label: "Alert Current Level",
            min: "1",
            max: "15",
            units: "Amp",
            size: "1",
            value: "12",
            Help:
              "\n        Sets the current level at which the On/Off Plug-In Switch will flash its LED yellow, until the current returns to below this level.\n        It will NOT cut off current to the device; this functions as a visible warning to the user.\n        NOTE: this value must be lower than Param 3.\n      ",
          },
          {
            type: "list",
            genre: "config",
            index: "5",
            label: "Indicator LED",
            units: "level",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Help: "This parameter enables or disables the indicator LED.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "6",
            label: "Current change METER_REPORT level",
            units: "%",
            min: "1",
            max: "100",
            size: "1",
            value: "5",
            Help:
              "\n        In addition to sending a METER_REPORT to Group 1 in the time interval set by Param 2, the On/Off Plug-In Switch also sends a METER_REPORT when it detects a relative change in current flow.\n        This parameter sets this minimum current change amount, in percent, at which point the On/Off Plug-In Switch will send a METER_REPORT to Group 1.\n        Also see Param 1 and 2.\n      ",
          },
          {
            type: "list",
            genre: "config",
            index: "7",
            label: "Remember On/Off Status",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Help:
              "\n        This parameter sets whether or not the On/Off Plug-In Switch will remember if it was turned on or off when it was last plugged in.\n        If enabled, whenever the device is rebooted (plugged in and out of the main outlet,) it will resume its state from before the reboot.\n        If disabled, it will turn on every time the device is rebooted.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "8",
            label: "Timer Function",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Help:
              "If this parameter is enabled, whenever the On/Off Plug-In Switch is turned on, it will automatically turn off after a set amount of time (set in Param 9.)",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "9",
            label: "Meter Report interval",
            min: "1",
            max: "65535",
            size: "2",
            units: "Seconds",
            value: "150",
            Help:
              "\n        Sets the time interval before the On/Off Plug-In Switch automatically shuts off.\n        See Param 8.\n      ",
          },
          {
            type: "list",
            genre: "config",
            index: "10",
            label: "Locally switch",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Help:
              "If this parameter is enabled, the user can turn the device on or off using the BUTTON.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
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
              { index: "2", max_associations: "5", label: "Overload Current" },
              {
                index: "3",
                max_associations: "5",
                label: "Notification Report",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
