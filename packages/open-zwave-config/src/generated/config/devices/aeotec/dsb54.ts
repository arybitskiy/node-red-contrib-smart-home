import type { document } from "../../../github.com/OpenZWave/device_configuration";

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
            label:
              "Toggle the sensor binary report value when the Magnet switch is opened/closed.",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "0, Open: FF, Close: 00; 1, Open: 00, Close: FF;\n              Default setting: 0\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label:
              "Toggle the basic set value when Magnet switch is opened/closed.",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "0, Open: FF, Close: 00; 1, Open: 00, Close: FF;\n              Default setting: 0\n            ",
          },
          {
            genre: "config",
            index: "101",
            instance: "1",
            label:
              "If battery power is below the warning value, low battery checking function will be triggered and Low Battery Warning Report will be sent.",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "0, Disable, 1, Enable;\n              Default setting: 0\n            ",
          },
          {
            genre: "config",
            index: "111",
            instance: "1",
            label: "The low battery check Interval time,0-4294967295 seconds.",
            max: "1",
            min: "0",
            type: "int",
            value: "86640",
            Help:
              "This parameter is available when the low battery checking\n                  function is activated or the device was waked up by other\n                  actions (i.e. the z-wave button trigger, magnet switch\n                  trigger and the Wake Up Interval Set timeout trigger).\n                  The Recessed Door Sensor will check the battery power\n                  when it was wake up as other ways. For example: the\n                  z-wave button trigger, magnet switch trigger and the\n                  Wake Up Interval Set timeout trigger.\n              Default setting: 86640\n            ",
          },
          {
            genre: "config",
            index: "121",
            instance: "1",
            label:
              "Flag values for which reports to send when the Magnet of Recessed Door Sensor is triggered.",
            max: "1",
            min: "0",
            type: "int",
            value: "256",
            Help:
              "Bitsets:\n                4 -> Sensor Binary\n                8 -> Basic Set\n              Default setting: 0x00000100 (Basic Set)\n            ",
          },
          {
            genre: "config",
            index: "254",
            label: "Device Tag",
            max: "255",
            min: "0",
            type: "short",
            units: "",
            value: "0",
            Help: "Device Tag",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset configuration settings to factory defaults",
            type: "button",
            value: "0",
            write_only: "true",
            Help: "Reset to factory defaults.",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Low Battery Warning Report",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
