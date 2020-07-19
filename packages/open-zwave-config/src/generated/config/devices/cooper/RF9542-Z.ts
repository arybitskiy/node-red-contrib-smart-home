import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001A:0000:4441",
            name: "OzwInfoPage",
          },
          { text: "images/cooper/RF9542-Z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/971/",
            id: "0000",
            name: "ZWProductPage",
            type: "4441",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0000",
            name: "FrequencyName",
            type: "4441",
          },
          { text: "RF9542-Z", id: "0000", name: "Identifier", type: "4441" },
          {
            text:
              "Aspire RF™ Accessory Dimmers replace regular switches or dimmers to provide local and remote ON/OFF/DIM/BRIGHT control. The device also provides multi-location control or virtual 3-way remote ON/OFF/DIM/BRIGHT control without the need for traditional 3-way wiring or a dedicated traveler wire. Aspire RF Accessory Dimmers provide other programmable functions (scenes, events, association, child lockout, etc.) when used with Aspire RF or other Z-Wave® compliant controller*. Each dimmer can be manually controlled and remotely controlled by commands sent from an Aspire RF controller (RFHDCSG, RFTDCSG, RFBER) or other Z-Wave compatible controllers or programs. Aspire RF Dimmers utilize existing 120V/AC 60Hz standard house wiring and fit in standard wallboxes. No new wiring is needed.",
            name: "Description",
          },
          { text: "Dimmer Accessory Switch", name: "Name" },
          {
            text:
              "http://www.cooperindustries.com/content/public/en/wiring_devices/products/lighting_controls/aspire_rf_wireless/dimmers/aspire_rf_accessory_w_leds_rf9542_z_.html",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/745/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/971/xml",
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
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Group #1", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
