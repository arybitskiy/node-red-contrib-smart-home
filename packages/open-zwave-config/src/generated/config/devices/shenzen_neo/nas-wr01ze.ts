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
            label: "Remember Relay ON/OFF status",
            value: "1",
            size: "1",
            Help:
              "\n        This parameter defined the relay status if remember or not.\n        If remembered, the plug will restore the relay status last power off when the plug supply power next time.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Button On/Off",
            value: "1",
            size: "1",
            Help:
              "\n        This parameter defines the button on/off function is enabled or not on the top of the wall plug.\n        If enabled, users can turn on and off the wall plug by pressing the button on the top of the wall plug.\n        If disabled, the wall plug cannot be turned on and off by pressing the button.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Led Display",
            value: "1",
            size: "1",
            Help:
              "\n        This parameter defines the LED indication Function ON/OFF.\n        If disabled, then LED indication Function and will always be turn-off, while enabled means LED Function is on.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Configure Plug Time switch Function",
            value: "0",
            size: "1",
            Help:
              "\n        This parameter defines the timer function Enable/Disable.\n        If disabled, then time switch function is not available.\n        The time period will be defined in parameter #5.\n        If enabled, and when turn the plug relay on, the timer in plug start run with time period defined in parameter #5 and the plug will turn the relay off.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Configure Time switch Period",
            units: "minute",
            value: "120",
            min: "0",
            max: "32767",
            size: "2",
            Help:
              "\n        This parameter defines the time period that plug time switch off. This parameter can be configured 0 - 32767(in minutes).\n        If Parameter #4 is enabled, and relay is turn-on, the relay will be turn-off after delay this parameter.\n      ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Send Meter Report",
            value: "1",
            size: "1",
            Help:
              "\n        This parameter defines Disable/Enable meter report measure data to controller.\n        When device is detected an OCP event or the relay turned on or turned off, device still will report all meter values once if this configuration is disabled. \n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Meter Report Interval",
            units: "second",
            value: "300",
            min: "30",
            max: "32767",
            size: "2",
            Help:
              "This parameter defines interval time (30-32767 seconds) that Meter report data to main controller .",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "8",
            label: "Configure maximum over-load current",
            units: "Ampere",
            value: "16",
            min: "1",
            max: "16",
            size: "1",
            Help:
              "\n        This parameter defines maximum current (in Amperes) the plug can provide to load that be connected to plug.\n        If the current consumed by load is greater than maximum current, the plug will cut off power, and send NOTIFICATION_EVENT_POWER_MANAGEMENT_OVER_LOAD_DETECTED to associated devices in lifeline. Red Led will blink every seconds until current is normal (less than Parameter #8).\n        You must remove the loader and turn on the Plug (press the button once) to enable current monitor and clear NOTIFICATION ALARM. This parameter value must be great than #10.\n        If user set this parameter to default by Configure CC, the parameter #10 will be set to default value.\n      ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "9",
            label: "Configure power report",
            units: "cA",
            value: "50",
            min: "1",
            max: "1600",
            size: "2",
            Help:
              "\n        This parameter defines by how much power consumed must change to be reported to the Z-Wave Controller or Z-Wave Gateway, in centiAmperes (1-1600). If the rate of power consumed change ratio is greater than this parameter, the plug will report the results, voltage, current, power and energy, that plug measure to Z-Wave Controller or Z-Wave Gateway\n        The changed value = [Value] x 0.01A\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Configure maximum Alarm current",
            units: "Ampere",
            value: "13",
            min: "1",
            max: "16",
            size: "1",
            Help:
              "\n        This parameter defines maximum current (in Amperes), if the current plug provide to load is greater than this parameter, the plug will send over-current notification to the controller and the LED will turn RED, but plug cannot cut-off power. This parameter value must be less than parameter #8.\n        If user set this parameter to default by Configure CC, the parameter #8 will be set to default value.\n      ",
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
              { index: "2", max_associations: "5", label: "Over-load current" },
              { index: "3", max_associations: "5", label: "Send Notification" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
