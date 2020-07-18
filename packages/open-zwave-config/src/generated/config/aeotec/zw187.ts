import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0371:00bb:0002",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw187.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3694/",
            id: "00bb",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "CEPT (Europe)",
            id: "00bb",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "ZW089-C", id: "00bb", name: "Identifier", type: "0002" },
          {
            text: "https://products.z-wavealliance.org/products/3694/",
            id: "00bb",
            name: "ZWProductPage",
            type: "0102",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "00bb",
            name: "FrequencyName",
            type: "0102",
          },
          { text: "ZW089-A", id: "00bb", name: "Identifier", type: "0102" },
          {
            text: "https://products.z-wavealliance.org/products/3694/",
            id: "00bb",
            name: "ZWProductPage",
            type: "0202",
          },
          {
            text: "Australia / New Zealand",
            id: "00bb",
            name: "FrequencyName",
            type: "0202",
          },
          { text: "ZW089-B", id: "00bb", name: "Identifier", type: "0202" },
          { text: "Recessed Door Sensor 7", name: "Name" },
          {
            text:
              "Press and hold the Z-Wave button for 5 seconds will trigger sending the Wake up notification command and then keep waking up for 10 seconds after release the Z-Wave button.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3694/Recessed%20Door%20Sensor%207%20-%20Product%20Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Z-Wave button that you can find in the back of the product.",
            name: "InclusionDescription",
          },
          {
            text:
              "Press and hold the Z-Wave button that you can find in back of the product for 20 seconds and then release. This procedure should only be used when the primary controller is inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into exclusion mode, short press the product’s Z-Wave button that you can find in back of the product.",
            name: "ExclusionDescription",
          },
          {
            text:
              "The Aeotec Recessed Door Sensor 7 is a door sensor that can detect the state of the door's open/close. It will report the door state to your controller/ gateway/associated nodes in real time when the state of your door has a change.\nIt’s a security Z-Wave device that supports security encryption. Also it supports the “Over the Air Firmware Updating” that allows you wirelessly update its firmware if needs. \nIt can be included and operated in any Z-Wave network with other Z-Wave certified devices from manufacturers and/or other applications.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial version",
                author: "Jean-Francois Auger - nechry@gmail.com",
                date: "05 nov 2019",
                revision: 1,
              },
              {
                text: "Notification Class is supported by device",
                author: "Justin Hammond",
                date: "08 Jun 2020",
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
            instance: "1",
            label: "Sensor Binary Report",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/Disable Binary Sensor Report. Allow for backward compatibility to report Binary if Notification Report cannot be used for status changes.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Reverse Sensor Reports",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Reverse Sensor Reports (both Sensor Binary Report and Notification Report.)",
            Item: [
              {
                label:
                  "Open Status when Magnet is away, Close Status when magnet is near",
                value: "0",
              },
              {
                label:
                  "Close Status when Magnet is away, Open Status when magnet is near",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Association Group 2 Settings",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Configure the Basic Set value. Determine the Basic Set value to control other Z-Wave devices directly when Magnet is away or near.",
            Item: [
              { label: "Disable completely", value: "0" },
              {
                label:
                  "Send Basic SET 0xFF when Magnet is away, and send Basic SET 0x00 when Magnet is near",
                value: "1",
              },
              {
                label:
                  "Send Basic SET 0x00 when Magnet is away, and send Basic Set 0xFF when Magnet is near",
                value: "2",
              },
              {
                label: "Only send Basic SET 0xFF when Magnet is away",
                value: "3",
              },
              {
                label: "Only send Basic SET 0x00 when Magnet is near",
                value: "4",
              },
              {
                label: "Only send Basic SET 0x00 when Magnet is away",
                value: "5",
              },
              {
                label: "Only send Basic SET 0xFF when Magnet is near",
                value: "6",
              },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Application Layer Retry",
            max: "1535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n          Configure retry number and wait time.\n          The device supports an application retry mechanism when the application of the device has detected a transmission error when Basic Set, Sensor Binary Report or Notification Report (Access Control) message is sent out but fails to result in an ACK or a Supervision Report.\n          The Byte 1 is used to configure the number of retries. The valid value is 0-5. 0 means disable retry.\n          The Byte 2 is used to configure the wait time between retries. The valid value is 0-255. Unit is 100ms.\n      ",
          },
          {
            genre: "config",
            index: "5",
            label: "Supervision Report Wait Time",
            max: "50",
            min: "1",
            size: "1",
            type: "byte",
            units: "0.1s",
            value: "15",
            Help:
              "\n          Configure Supervision Report Wait Time.\n          Unit is 100ms.\n          Note: Issuing Basic Set, Sensor Binary Report or Notification Report(Access Control) via association groups uses Supervision encapsulation only if sending commands with S2(or higher security) encapsulation.\n          In other word, this parameter can be configured in any network, but works only in S2 (or higher security) network.\n      ",
          },
          {
            genre: "config",
            index: "81",
            label: "Led Indicator",
            min: "0",
            max: "3",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n          Control LED Indicator. Determine whether the LED flash or not when sending Basic Set, Sensor Binary Report, Notification Report (Access Control) or Wake Up Notification.\n      ",
            Item: [
              { label: "Completely disable LED", value: "0" },
              {
                label:
                  "LED quickly flashes only when sending Basic Set, Sensor Binary Report or Notification Report",
                value: "1",
              },
              {
                label: "LED activates only when sending Wake Up Notification",
                value: "2",
              },
              {
                label:
                  "LED quickly flashes when sending Basic Set, Sensor Binary Report or Notification Report (Access Control), and activates when sending Wake Up Notification.",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "90",
            label: "Low battery threshold",
            max: "50",
            min: "10",
            type: "byte",
            units: "%",
            value: "30",
            Help:
              "Configure the low battery threshold. Induce battery report when battery level is less than or equal to threshold. Forward low battery report.",
          },
          {
            genre: "config",
            index: "101",
            instance: "1",
            label: "Timed battery report",
            max: "14400",
            min: "1",
            size: "2",
            type: "short",
            units: "minutes",
            value: "70",
            Help: "Set how often battery is reported in minutes.",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              { index: "2", label: "Basic Set", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
