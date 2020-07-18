import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001A:0000:5244",
            name: "OzwInfoPage",
          },
          { text: "images/cooper/RF9505-T.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/741/",
            id: "0000",
            name: "ZWProductPage",
            type: "5244",
          },
          { text: "RFTR9505-T", id: "0000", name: "Identifier", type: "5244" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0000",
            name: "FrequencyName",
            type: "5244",
          },
          {
            text:
              "ASPIRE RF TR receptacle version complies with 2011 NEC section 406.12 specification that states all receptacles installed in dwelling units must be tamper resistant. The ASPIRE RF 15A Split Receptacle replaces regular receptacles and provides local and remote wireless ON/OFF control of a single outlet. Receptacle can be manually controlled and remotely controlled by commands sent from an ASPIRE RF controller (RFHDCSG, RFTDCSG) or other Z-Wave compatible controllers or programs. An ASPIRE RF receptacle utilizes existing 120V/AC, 60Hz standard house wiring and fits in a standard wallbox. No new wiring is required.",
            name: "Description",
          },
          { text: "ASPIRE RF Tamper Resistant Receptacle", name: "Name" },
          {
            text:
              "http://www.cooperindustries.com/content/public/en/wiring_devices/products/lighting_controls/aspire_rf_wireless/aspire_rf_15a_tamper_resistant_split_control_duplex_receptacle_rftr9505_t.html",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/741/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
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
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n\t\t    Enables this device to participate in panic mode\n\t\t  ",
            Item: [
              { label: "OFF", value: "0" },
              { label: "ON", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                auto: "true",
                index: "255",
                label: "Group #255",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
