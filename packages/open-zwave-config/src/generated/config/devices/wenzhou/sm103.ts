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
            label: "On Level",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "99",
            Help:
              "\n\t\t\t\tDefines the level in the event sent when the sensor is triggered.  Default is 99 (full brightness for a Z-Wave dimmer). 100-127 will set device on to the last value it was when turned off.\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "Off Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "seconds",
            value: "1",
            Help:
              "\n\t\t\t\tOn Time sets the number of seconds the sensor stays alerted before the off event is sent.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Power Saving",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t  \tEnable/Disable power saving mode. 0 enables.\n\t\t\t",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { action: "add", id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Reports", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
