import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0086:0059:0102",
            name: "OzwInfoPage",
          },
          { text: "images/aeotec/zw089.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1179/",
            id: "0059",
            name: "ZWProductPage",
            type: "0102",
          },
          { text: "Recessed Door Sensor Gen5", name: "Name" },
          {
            text:
              "Press and hold the Z-Wave button for 5 seconds will trigger sending the Wake up notification command and then keep waking up for 10 seconds after release the Z-Wave button.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1184/Recessed Door Sensor Gen5 - Manual MCert.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Turn the primary controller of Z-Wave network into inclusion mode, short press the product’s Z-Wave button that you can find in the back of the product.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0059",
            name: "FrequencyName",
            type: "0102",
          },
          { text: "ZW089-A", id: "0059", name: "Identifier", type: "0102" },
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
              "The Aeotec by Aeon Labs Recessed Door Sensor Gen5 is a door sensor that can detect the state of the door's open/close. It will report the door state to your controller/ gateway/associated nodes in real time when the state of your door has a change. \nIt’s a security Z-Wave device that supports security encryption. Also it supports the “Over the Air Firmware Updating” that allows you wirelessly update its firmware if needs. \nIt can be included and operated in any Z-Wave network with other Z-Wave certified devices from manufacturers and/or other applications.",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/1183/",
            id: "0059",
            name: "ZWProductPage",
            type: "0202",
          },
          {
            text: "Australia / New Zealand",
            id: "0059",
            name: "FrequencyName",
            type: "0202",
          },
          { text: "ZW089-B", id: "0059", name: "Identifier", type: "0202" },
          {
            text: "https://products.z-wavealliance.org/products/1184/",
            id: "0059",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text: "CEPT (Europe)",
            id: "0059",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "ZW089-C", id: "0059", name: "Identifier", type: "0002" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1179/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1183/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1184/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 6,
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
            label: "Sensor Binary Report Toggle",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Which value of the Sensor Binary Report will be sent when \n            the magnet switch to open/close.",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverse", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Basic Set Toggle",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Which value of the Basic Set will be sent when the magnet \n            switch to open/close.\n            ",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Inverse", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "101",
            instance: "1",
            label: "Low Battery Check Enable",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/disable the function of low battery checking, when \n            the current voltage is less than the warning voltage, it will \n            send the Battery Low Warning Report. \n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "111",
            instance: "1",
            label: "Low Battery Check Interval",
            max: "4294967295",
            min: "0",
            type: "int",
            value: "86640",
            Help:
              "This parameter is available when the low battery checking\n                  function is activated or the device was waked up by other\n                  actions (i.e. the z-wave button trigger, magnet switch\n                  trigger and the Wake Up Interval Set timeout trigger).\n                  The Recessed Door Sensor will check the battery power\n                  when it was wake up as other ways. For example: the\n                  z-wave button trigger, magnet switch trigger and the\n                  Wake Up Interval Set timeout trigger.\n              Default setting: 86640\n            ",
          },
          {
            genre: "config",
            index: "121",
            instance: "1",
            label: "Report Type",
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
            index: "254",
            label: "Device Tag",
            max: "65535",
            min: "0",
            type: "short",
            units: "",
            value: "0",
            Help: "Device Tag",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
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
            num_groups: "2",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              {
                auto: "true",
                index: "2",
                label: "Battery",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
