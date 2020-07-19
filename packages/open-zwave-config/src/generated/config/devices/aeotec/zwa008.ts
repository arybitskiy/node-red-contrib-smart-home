import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Operation mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Parameter defines device operation mode.",
            Item: [
              { label: "Built-in hall sensor", value: "0" },
              { label: "External Input", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Door/Window or alarm status",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Parameter defines state of the sensor when the magnet is close.\n                If the alarm sensor is connected, it determines the output type.\n                Parameter inactive in external button mode (parameter Operation Mode set to 1).\n            ",
            Item: [
              { label: "Closed", value: "0" },
              { label: "Opened", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Visual LED indications",
            max: "7",
            min: "0",
            size: "1",
            type: "byte",
            value: "7",
            Help:
              "\n                This parameter defines events indicated by the visual LED indicator. Disabling events might extend battery life.\n                Values of parameters may be combined, e.g. 1+2=3 means opening/closing and wake up will be indicated by the visual indicator.\n                0 - No indications.\n                1 - Indication of opening/closing status change (input In).\n                2 - Indication of wake up (1 x click or periodical).\n                4 - Indication of device tampering.\n            ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Range test after double click",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Allows to enable activation of Z-Wave range test with double click of a Tamper Switch 2.\n            ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "2nd Association Group triggers",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Parameter defines events which result in sending On/Off commands to devices added to the 2nd Association Group.\n                These commands are sent alternately to switch the devices On and Off.\n                Commands represent the values of BASIC SET command frames.\n                Parameter is inactive in external dry-contact mode (parameter Operation Mode set to 1).\n            ",
            Item: [
              { label: "Switch after opening and closing", value: "0" },
              { label: "Switch after opening", value: "1" },
              { label: "Switch after closing", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Commands sent to 2nd Association Group",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n                Command frames sent to devices added to the 2nd association group.\n            ",
            Item: [
              { label: "On", value: "0" },
              { label: "Off", value: "1" },
              { label: "On and Off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Value of ON command frame sent to 2nd Association Group",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "\n                The value of 0 turns OFF the device, 255 turns it On.\n                In case of associating the Dimmer or Roller Shutter module, values 1-99 allow to set an Associated device to a specified level.\n            ",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Value of OFF command frame sent to 2nd Association Group",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                The value of 0 turns OFF the device, 255 turns it On.\n                In case of associating the Dimmer or Roller Shutter module, values 1-99 allow to set an Associated device to a specified level.\n            ",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Time delay of ON command frame",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n                Time period after which On command frame will be sent.\n            ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Time delay of OFF command frame",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n                Time period after which Off command frame will be sent.\n            ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Delay of tamper alarm cancellation",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            units: "seconds",
            value: "5",
            Help:
              "\n                Time period after which a tamper alarm will be cancelled.\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Reporting tamper alarm cancellation",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Reporting cancellation of tamper alarm to the controller and 5th Association Group.\n            ",
            Item: [
              { label: "Do not send tamper cancellation report", value: "0" },
              { label: "Send tamper cancellation report", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Scene activation functionality",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                The device can trigger scenes via Dry Input Terminal (external contact) using scene IDs assigned to different events.\n            ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Tilt Sensor functionality",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                The device can report Tilt Window events.\n                This functionality can be disabled if the device is mounted on a door or windows without tilt functionality.To disable tilt detection set the value to 0.\n            ",
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
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Control", max_associations: "5" },
              { index: "3", label: "Alarm sensor", max_associations: "5" },
              { index: "4", label: "Alarm tamper", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
