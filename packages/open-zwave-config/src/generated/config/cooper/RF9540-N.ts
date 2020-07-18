import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001A:0101:4449",
            name: "OzwInfoPage",
          },
          { text: "images/cooper/RF9540-N.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/797/",
            id: "0101",
            name: "ZWProductPage",
            type: "4449",
          },
          { text: "Cooper RF9540-N", name: "Name" },
          { text: "RF9540-N", id: "0101", name: "Identifier", type: "4449" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0101",
            name: "FrequencyName",
            type: "4449",
          },
          {
            text: "Aspire RF All load smart dimmer master",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/797/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Delayed OFF time",
            max: "255",
            min: "0",
            type: "byte",
            units: "seconds",
            value: "0",
            Help:
              "\n\t\t\tThe configuration value is a signed single byte number. This value may represent a value with no units or may represent a value such as time. 0 to 127 (decimal) represents 0 to 127 seconds of time. -128 to -1 (negative decimal numbers) represents 128 to 255 seconds as calculated by this formula.  Config value = desired time in seconds (or desired value) -256 For an example of 172 seconds: config value = 172 - 256 = -84 (decimal) or 0xAC (hex) \n\t\t  ",
          },
          {
            genre: "config",
            index: "2",
            label: "Panic ON time",
            max: "255",
            min: "1",
            type: "byte",
            units: "seconds",
            value: "0",
            Help:
              "\n\t\t  The amount of time in seconds the switch will turn on for when panic mode is trigered.  The configuration value is a signed single byte number. This value may represent a value with no units or may represent a value such as time. 0 to 127 (decimal) represents 0 to 127 seconds of time. -128 to -1 (negative decimal numbers) represents 128 to 255 seconds as calculated by this formula.  Config value = desired time in seconds (or desired value) -256 For an example of 172 seconds: config value = 172 - 256 = -84 (decimal) or 0xAC (hex) \n\t\t  ",
          },
          {
            genre: "config",
            index: "3",
            label: "Panic OFF time",
            max: "255",
            min: "1",
            type: "byte",
            units: "seconds",
            value: "0",
            Help:
              "\n\t\t  The amount of time in seconds the switch will turn off for when panic mode is triggered.  The configuration value is a signed single byte number. This value may represent a value with no units or may represent a value such as time. 0 to 127 (decimal) represents 0 to 127 seconds of time. -128 to -1 (negative decimal numbers) represents 128 to 255 seconds as calculated by this formula.  Config value = desired time in seconds (or desired value) -256 For an example of 172 seconds: config value = 172 - 256 = -84 (decimal) or 0xAC (hex) \n\t\t  ",
          },
          {
            genre: "config",
            index: "4",
            label: "Basic set value",
            max: "255",
            min: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t  Setting this to anything other than 0 will cause the value to be transmitted to devices in the association group when the switch is triggered. A setting other than 0 will likely result in undesired operation\n\t\t  ",
          },
          {
            genre: "config",
            index: "5",
            label: "Power Up State",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "3",
            Help: "\n\t\t    Power up state of the device\n\t\t  ",
            Item: [
              { label: "OFF", value: "1" },
              { label: "ON", value: "2" },
              { label: "Last state", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Panic mode enable",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n\t\t    Enables this switch to participate in panic mode\n\t\t  ",
            Item: [
              { label: "OFF", value: "1" },
              { label: "ON", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Dimmer Ramp Time",
            max: "255",
            min: "0",
            type: "byte",
            units: "seconds",
            value: "0",
            Help:
              "\n\t\t  The amount of time in seconds the switch will take to reach the desired dim level.  The configuration value is a signed single byte number. This value may represent a value with no units or may represent a value such as time. 0 to 127 (decimal) represents 0 to 127 seconds of time. -128 to -1 (negative decimal numbers) represents 128 to 255 seconds as calculated by this formula.  Config value = desired time in seconds (or desired value) -256 For an example of 172 seconds: config value = 172 - 256 = -84 (decimal) or 0xAC (hex) \n\t\t  ",
          },
          {
            genre: "config",
            index: "8",
            label: "Kickstart / Rapid Start",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n\t\t  \tEnsures that LED / CFL bulbs turn on when the preset dim level is low.  Enabling this feature may cause the lights brightness to momentarily be bright when the switch is turned on before reducing in brightness to desired level\n\t\t  ",
            Item: [
              { label: "disable", value: "0" },
              { label: "enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "Minimum Dimmer Level",
            max: "99",
            min: "4",
            type: "byte",
            units: "",
            value: "4",
            Help:
              "\n\t\t  The minimum dim level the switch will allow.  The minimum level must always be at least 13 below the maximum level.\n\t\t  ",
          },
          {
            genre: "config",
            index: "12",
            label: "Maximum Dimmer Level",
            max: "99",
            min: "4",
            type: "byte",
            units: "",
            value: "99",
            Help:
              "\n\t\t  The maximum dim level the switch will allow.  The maximum level must always be at least 13 above the minimum level.\n\t\t  ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Group #1", max_associations: "5" },
              { index: "255", label: "Group #255", max_associations: "1" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
