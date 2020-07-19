import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001A:0000:5352",
            name: "OzwInfoPage",
          },
          { text: "images/cooper/RF9517.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/742/",
            id: "0000",
            name: "ZWProductPage",
            type: "5352",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0000",
            name: "FrequencyName",
            type: "5352",
          },
          { text: "RF9517", id: "0000", name: "Identifier", type: "5352" },
          { text: "ASPIRE RF Accessory Switch", name: "Name" },
          {
            text:
              "ASPIRE RF Accessory Switch (RF9517) replaces regular switches or dimmers to provide local and remote ON/OFF control. The device also provides 3-way, multi-location or virtual 3-way remote ON/OFF control of a selected RF switch without the need for traditional 3-way wiring. Each switch can be manually controlled and remotely controlled by commands sent from an ASPIRE RF controller or other Z-Wave compatible controllers or programs. ASPIRE RF switches utilize existing 120V/AC, 60Hz standard house wiring and fit in standard wallboxes. No new wiring is required.",
            name: "Description",
          },
          {
            text:
              "http://www.cooperindustries.com/content/public/en/wiring_devices/products/lighting_controls/aspire_rf_wireless/switches/aspire_rf_accessory_switch_rf9517.html",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/742/xml",
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
