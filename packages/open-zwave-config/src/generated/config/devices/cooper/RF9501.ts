import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001A:0000:534C",
            name: "OzwInfoPage",
          },
          { text: "images/cooper/RF9501.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/740/",
            id: "0000",
            name: "ZWProductPage",
            type: "534C",
          },
          { text: "RF9501", id: "0000", name: "Identifier", type: "534C" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0000",
            name: "FrequencyName",
            type: "534C",
          },
          { text: "ASPIRE RF 15A Wireless Switch", name: "Name" },
          {
            text:
              "The ASPIRE RF 15A switch (RF9501) replaces regular switches or dimmers (where a neutral is present) to provide local and remote ON/OFF control for Incandescent, Magnetic Low-Voltage, Electronic Low-Voltage and Fluorescent lighting loads. Each switch can be manually controlled and remotely controlled by commands sent from an ASPIRE RF controller or other Z-Wave compatible controllers or programs. An ASPIRE RF switch utilizes existing 120V/AC, 60Hz standard house wiring and fits in a standard wallbox. No new wiring is needed.",
            name: "Description",
          },
          {
            text:
              "http://www.cooperindustries.com/content/public/en/wiring_devices/products/lighting_controls/aspire_rf_wireless/switches/aspire_rf_15a_wireless_switch_rf9501.html",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/740/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
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
