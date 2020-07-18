import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "In-wall Switch Type for Load to control I1",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "With this parameter, you can select between push-button (momentary) and on/off toggle switch types.",
            Item: [
              { label: "Push button", value: "0" },
              { label: "Toggle switch", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Working mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "With this parameter, you can change the device presentation on the user interface.",
            Item: [
              { label: "Dimmer mode", value: "0" },
              { label: "Switch mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Turn Load 1 Off Automatically with Timer",
            units: "second",
            max: "32536",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                0 - Auto OFF Disabled.\n                1 - 32536 = 1 - 32536 seconds - Auto OFF timer enabled for a given amount of seconds.\n                Default value 0.\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Turn Load 1 On Automatically with Timer",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                0 - Auto ON Disabled.\n                1 - 32536 = 1 - 32536 seconds - Auto ON timer enabled for a given amount of seconds.\n                Default value 0.\n            ",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Double click function",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                If the Double click function is enabled, a fast double click on the push-button will set the dimming level to the maximum dimming value.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Restore on/off status for load after power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default value 0.",
            Item: [
              {
                label:
                  "Device saves last on/off status and restores it after a power failure",
                value: "0",
              },
              { label: "Device does not save on/off status", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Watt Power Consumption Reporting Threshold for Load",
            units: "%",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "Set value from 0 - 100 (0% - 100%).\n                0 - Reporting Disabled.\n                1 - 100 = 1% - 100% Reporting enabled.\n                Power report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%.\n                Default value 5.",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Watt Power Consumption Reporting Time Threshold for Load",
            units: "second",
            max: "32767",
            min: "0",
            type: "short",
            value: "300",
            Help:
              "Set value means time interval (0 - 32767) in seconds, when power report is send.\n                0 - Reporting Disabled.\n                1 second to 32767 seconds reporting enabled.\n                Power report is send with time interval set by entered value.\n                Default value 300 (power report in Watts is send each 300s).",
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Minimum dimming value",
            max: "98",
            min: "1",
            type: "byte",
            value: "1",
            Help:
              "1 - 98 = 1% - 98%, step is 1%. Minimum dimming values is set by entered value.\n                Default value 1 (Minimum dimming value is 1%).",
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Maximum dimming value",
            max: "99",
            min: "2",
            type: "byte",
            value: "99",
            Help:
              "2 - 99 = 2% - 99%, step is 1%. Maximum dimming values is set by entered value.\n                Default value 99 (Maximum dimming value is 99%).",
          },
          {
            genre: "config",
            index: "65",
            instance: "1",
            label: "Dimming time (soft on/off)",
            max: "127",
            min: "1",
            type: "byte",
            value: "1",
            Help:
              "Set value means time of moving the Dimmer between min. and max. dimming values by short press of push button I1 or controlled through the controller.\n                1 - 127 = 1 second - 127 seconds.\n                Default value 1 (Dimming time between min. and max. dimming values is 1s).",
          },
          {
            genre: "config",
            index: "66",
            instance: "1",
            label: "Dimming time when key hold",
            max: "255",
            min: "1",
            type: "short",
            value: "3",
            Help:
              "\n                Choose the time during which the Dimmer will move between the min. and max. dimming values during a continuous press of the push-button I1, by an associated device or through the UI controls (BasicSet, SwitchMultilevelSet)\n                default value 3 = 3s.\n                1-127 = 1 second – 127 seconds.\n                128 – 253 = 1 minute – 126 minutes.\n            ",
          },
          {
            genre: "config",
            index: "67",
            instance: "1",
            label: "Ignore start level",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Choose whether the device should use (or disregard) the start dimming level value.\n                If the device is configured to use the start level, it should start the dimming process from the currently set dimming level.\n                This parameter is used with association group 3\n            ",
            Item: [
              { label: "Use the start level value", value: "0" },
              { label: "Ignore start level", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "68",
            instance: "1",
            label: "Dimming duration",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                Choose the time during which the device will transition from the current value to the new target value.\n                This parameter applies to the association group 3.\n                default value 0 (dimming duration according to parameter 66).\n                1 - 127 (from 1 to 127 seconds).\n            ",
          },
          {
            genre: "config",
            index: "70",
            instance: "1",
            label: "Overload safety switch",
            units: "watt",
            max: "255",
            min: "1",
            type: "short",
            value: "200",
            Help:
              "\n                The function allows for turning off the controlled device in case of exceeding the defined power for more than 5s.\n                Controlled device can be turned back on by input I1 or sending a control frame.\n                0 = function not active\n                1–200=1W–200W\n            ",
          },
          {
            genre: "config",
            index: "71",
            instance: "1",
            label: "Calibration trigger",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Choose when will be the calibration procedure triggered.\n            ",
            Item: [
              {
                label:
                  "Calibration done after power cycle if module is excluded",
                value: "0",
              },
              {
                label:
                  "Calibration done after power cycle regardless of inclusion status",
                value: "1",
              },
              { label: "Force calibration", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "72",
            instance: "1",
            label: "Calibration trigger",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            read_only: "true",
            Help:
              "\n                Whit this parameter you can check the calibration status.\n            ",
            Item: [
              { label: "Calibration was successful", value: "1" },
              { label: "Calibration failed", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "73",
            instance: "1",
            label: "Alarm/Notification events",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                This parameter defines the module behaviour in case it receives any Alarm/Notification events.\n            ",
            Item: [
              { label: "Function not active", value: "0" },
              { label: "Turn OFF", value: "1" },
              { label: "Turn ON", value: "2" },
              { label: "Start blinking", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "74",
            instance: "1",
            label: "Alarm/Notification time interval",
            units: "minute",
            max: "125",
            min: "1",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                This parameter defines the time interval of the blinking state, once the module receives an alarm/notification event.\n                Minimum step increase is 1 minute.\n                1 - 127 (from 1 to 125 minutes).\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Basic OnOff", max_associations: "16" },
              {
                index: "3",
                label: "StartStop level change",
                max_associations: "16",
              },
              { index: "4", label: "Multilevel set", max_associations: "16" },
            ],
          },
        ],
      },
      { action: "remove", id: "32" },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;
