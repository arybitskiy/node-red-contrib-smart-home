import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    CommandClass: [
      {
        id: "64",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Mode",
            max: "0",
            min: "0",
            read_only: "false",
            type: "list",
            units: "",
            value: "0",
            write_only: "false",
            Item: [
              { label: "Heat", value: "1" },
              { label: "Energy Heat", value: "11" },
            ],
          },
        ],
        SupportedModes: [
          {
            Mode: [
              { index: "1", label: "Heat" },
              { index: "11", label: "Energy Heat" },
            ],
          },
        ],
        Compatibility: "",
      },
      {
        id: "67",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Heating",
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "20",
            write_only: "false",
          },
          {
            genre: "user",
            index: "11",
            instance: "1",
            label: "Energy Heat",
            max: "0",
            min: "0",
            read_only: "false",
            type: "decimal",
            units: "C",
            value: "16",
            write_only: "false",
          },
        ],
        Compatibility: [{ Base: [0], CreateVars: [true] }],
      },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Reset to Default",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "0xFF: Set all configuration values to default values (factory settings).\n        CONFIGURATION_REPORT\n        0x55: Configuration settings of the device are altered.\n        0xAA: Configuration of the device is untouched.\n        Note that this value will not change to 0x55 upon modifying the wake up interval and that re-setting the value to 0xAA will always reset the wake up interval.\n      ",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Data request interval",
            size: "1",
            type: "byte",
            value: "20",
            Help:
              "The interval that data is requested (and therefore updated) from the thermostat and boiler. Value in seconds. ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "T room update difference",
            size: "1",
            type: "byte",
            value: "1",
            Help:
              "The value that the room temperature must differ (compared to his previous send value) before an unsolicited room temperature report is send to the associated node. Value in 0.1C. ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "T setpoint update difference",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "The value that the temperature setpoint must differ (compared to his previous send value) before an unsolicited temperature setpoint report is send to the associated node. Value in 0.1C .",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Unsolicited CRC",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "TConfigure if the unsolicited reports are send with the CRC-16 encapsulation. Not that the receiving node should support this encapsulation to parse the Z-Wave frame!",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Type of 'special' thermostat",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Type of 'special' thermostat: NOTE: when remeha Celcia 20 support is set then any other thermostat can not be set (!) NOTE2: when Remeha Celcia 20 gives 'Fout 203' send cfg value again",
            Item: [
              { label: "No special", value: "0" },
              { label: "Remeha Celcia 20", value: "1" },
              { label: "Honeywell (rounded temperatures)", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Status auto report",
            size: "1",
            type: "list",
            value: "0",
            Help: "Status auto report boiler/thermostat report",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Thermostat schedule",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/Disable thermostat schedule inside the heating controller.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
            ],
          },
        ],
      },
      { id: "122", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
