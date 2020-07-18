import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0061:0102",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw097.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1495/",
            id: "0061",
            name: "ZWProductPage",
            type: "0102",
          },
          { text: "Dry Contact Sensor Gen5", name: "Name" },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Action Button that you can find in the back of the product.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0061",
            name: "FrequencyName",
            type: "0102",
          },
          { text: "ZW097-A", id: "0061", name: "Identifier", type: "0102" },
          {
            text:
              "Press the Action Button once that you can find in back of the product for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1495/Dry Contact Sensor Gen5 manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Aeon Labs Dry Contact Sensor Gen5 is a dry conatct sensor that can detect a variety of dry contact signals, you just need to connect the matched external sensor on it, such as the water level sensor, dry contact switch, dry contact relay and so on. In other words, it can be used if the external sensor is a dry contact. \nIt’s a security Z-Wave device that supports security encryption. Also it supports the “Over the Air Firmware Updating” that allows you wirelessly update its firmware if needs. \nIt can be included and operated in any Z-Wave network with other Z-Wave certified devices from manufacturers and/or other applications.",
            name: "Description",
          },
          {
            text:
              "Press the Action Button once, which will trigger sending out the Wake up notification command, press and hold the Action Button for 3 seconds, which will toggle on/off the Sensor be waked up for 10 minutes.",
            name: "WakeupDescription",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Action Button that you can find in back of the product.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1495/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
            instance: "1",
            label: "Sensor Binary Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Which value of the Sensor Binary Report will be sent when the door is Opened/Closed",
            Item: [
              { label: "Open: 0xFF, Close: 0x00", value: "0" },
              { label: "Open: 0x00, Close: 0xFF", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Wakeup at Poweron",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable/disable wake up 10 minutes when re-power on the Sensor.\n        Default setting: Enable",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Basic Set Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Which value of the Basic Set will be sent when the door is Opened/Closed",
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
            value: "10",
            Help: "10% to 50%",
          },
          {
            genre: "config",
            index: "111",
            instance: "1",
            label: "Interval time of battery report",
            max: "2147483647",
            min: "0",
            size: "4",
            type: "int",
            value: "0",
            Help:
              "\n        Set the interval time of battery report.\n        Value=0, disable the battery report for a interval time.\n        Value=1 to 0x7FFFFFFF, the interval time of battery report is set.\n        Note:\n        1, if the value is less than 10, the time unit is second.\n        If the value is more than 10, the time unit is 4 minutes, which means if the value is more than 10 and less than 240, the interval time is 4 minutes.\n        If the value is more than 240 and less than 480, the interval is 8 minutes.\n        2, if the current battery report falls below the low battery value (configurable parameter 39), it will send battery report=0xFF.\n      ",
          },
          {
            genre: "config",
            index: "121",
            instance: "1",
            label: "Report Type",
            max: "65535",
            min: "0",
            size: "4",
            type: "list",
            value: "256",
            Help:
              "Configure which sensor report will be sent when the sensor is Opened/Closed",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Basic Set", value: "256" },
              { label: "Sensor Binary Report", value: "16" },
              { label: "Basic Set and Sensor Binary Report", value: "272" },
            ],
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            write_only: "true",
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
