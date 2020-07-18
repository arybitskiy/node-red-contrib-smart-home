import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:001D:0002",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/dsb29.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/772/",
            id: "001D",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / Australia / New Zealand",
            id: "001D",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text: "http://aeotec.com/z-wave-door-window-sensor",
            name: "ProductPage",
          },
          { text: "Door Window Sensor G2", name: "Name" },
          { text: "DSB29-ZWAU", id: "001D", name: "Identifier", type: "0002" },
          {
            text:
              "We always think of tools in our house as ‘doing things’. Switches turn lights on. Remotes turn TVs off. Things do the basic stuff we tell them to – nothing more, nothing less. \nThat’s a description of a house of the past. \n\nThe house of today has intelligence built in. Or at least it should. \n\nInspired by the humble thermostat, Aeotec’s Z-Wave Door & Window Sensor sits as a part of our Intelligence range. Like a thermostat, we’ve designed it to find things out, to understand things about your home, and to then use that information to make your home more comfortable, to make your life easier. \n\nThe Door & Window Sensor finds out something very simple – whether a door or a window, or in fact any object in your home, is open or closed. But there’s power in simplicity. Power that allows you to inform the rest of your Z-Wave network about your selected doors and windows. Like a thermostat lets your heating and cooling systems know what they should do next, Aeotec’s Z-Wave Door & Window Sensor does the same. Perhaps an open door means that your lights should turn on and welcome you home. Perhaps an open window means that an alarm should be trigged. Whatever it means to your home, with door and window sensors installed, your Z-Wave network will have both the power and the itelligence to do it.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/701/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/764/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/772/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
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
            instance: "1",
            label:
              "Toggle the sensor binary report value when the Magnet switch is opened/closed.",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default setting: Open: FF, Close: 00",
            Item: [
              { label: "Open: FF, Close: 00", value: "0" },
              { label: "Open: 00, Close: FF", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Enable wake up 10 minutes when the power is switched on.",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default setting: Disable",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label:
              "Toggle the basic set value when Magnet switch is opened/closed.",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default setting: Open: FF, Close: 00",
            Item: [
              { label: "Open: FF, Close: 00", value: "0" },
              { label: "Open: 00, Close: FF", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "121",
            instance: "1",
            label:
              "Determines which report will be sent when Magnet switch is opened/ closed.",
            max: "65535",
            min: "0",
            size: "4",
            type: "int",
            value: "255",
            Help:
              "Which reports need to send automatically in timing intervals for group 1. Bitsets: 0->Battery report, 4->Sensor Binary, 8->Basic Set, Default setting: 0x00000100 (Basic Set)\n\t\t\tIdeal Setting for OZW is 17 (Sensor Binary and Battery Report)",
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
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "6" }],
          },
        ],
      },
    ],
  },
};

export default config;
