import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "images/oomi/ft112.png", name: "ProductPic" },
          {
            text:
              "Turn the primary controller into exclusion mode, short press the product’s Action Button that you can find in back of the product.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press the Action Button once, which will trigger sending out the Wake up notification command, press and hold the Action Button for 3 seconds, which will toggle on/off the Sensor be waked up for 10 minutes.",
            name: "WakeupDescription",
          },
          {
            text:
              "Turn the primary controller into inclusion mode, short press the product’s Action Button that you can find in the back of the product.",
            name: "InclusionDescription",
          },
          {
            text:
              "Aeon Labs Door/ Window Sensor 6 is a smart Z-Wave sensor that can detect the status of door/window's open/close in real time. \nIt’s a security Z-Wave device that supports security encryption. Also it supports the “Over the Air Firmware Updating” that allows you wirelessly update its firmware if needs. \nIt can be included and operated in any Z-Wave network with other Z-Wave certified devices from manufacturers and/or other applications.",
            name: "Description",
          },
          { text: "Door/ Window Sensor 6", name: "Name" },
          {
            text:
              "Press the Action Button once that you can find in the back of the product for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0070",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "FT112-C", id: "0070", name: "Identifier", type: "0002" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial version - clone of aeotec/zw112",
                author: "Jeff Thompson",
                date: "27 April 2020",
                revision: 1,
              },
              {
                text: "Add Product Pic",
                author: "Justin Hammond",
                date: "24 June 2020",
                revision: 2,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { action: "remove", id: "113" },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Value when the Magnet is triggered",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Which value of the Sensor Binary Report or Basic Set will be sent when the door is Opened/Closed",
            Item: [
              { label: "Open: 0xFF, Close: 0x00", value: "0" },
              { label: "Open: 0x00, Close: 0xFF", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "39",
            instance: "1",
            label: "Set the low battery value",
            max: "50",
            min: "10",
            size: "1",
            type: "byte",
            value: "20",
            Help: "10% to 50%",
          },
          {
            genre: "config",
            index: "101",
            instance: "1",
            label: "Low Battery Check",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enable/disable the low battery checking",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "111",
            instance: "1",
            label: "Interval time of low battery checking",
            max: "2147483647",
            min: "0",
            size: "4",
            type: "int",
            value: "86640",
            Help: "\n\t\t\t\tThe minimum interval is 4 minutes\n\t\t\t",
          },
          {
            genre: "config",
            index: "121",
            instance: "1",
            label: "Report Type to Send",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n                Configure which sensor report will be sent when the door is Opened/Closed\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Basic Set", value: "1" },
              { label: "Sensor Binary Report", value: "2" },
              { label: "Basic Set and Sensor Binary Report", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "252",
            label: "Lock/Unlock Configuration",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Lock/ unlock all configuration parameters",
            Item: [
              { label: "Unlock", value: "0" },
              { label: "Lock", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Reset to factory default setting", value: "0" },
              { label: "Normal", value: "1" },
              {
                label:
                  "Reset to factory default setting and removed from the z-wave network",
                value: "1431655765",
              },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
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
