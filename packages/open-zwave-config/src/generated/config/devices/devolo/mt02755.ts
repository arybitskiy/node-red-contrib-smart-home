import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0175:0020:0002",
            name: "OzwInfoPage",
          },
          { text: "images/devolo/mt02755.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2226/",
            id: "0020",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "1. Have Z-Wave™  Controller entered inclusion mode.\n2. Pressing the tamper key three times within 1.5 \nseconds to enter the inclusion mode.\n3. After add successful, the device will wake to \nreceive the setting command from Z-Wave™ \nController about 20 seconds.",
            name: "InclusionDescription",
          },
          { text: "MT02755", id: "0020", name: "Identifier", type: "0002" },
          {
            text:
              "Notice: Use this procedure only in the event \nthat the primary controller is lost or \notherwise inoperable.\n1. Pressing tamper key four times within 1.5 seconds \nand do not release the tamper key in the 4 th  \npressed, and the LED will light ON.\n2. After 3 seconds the LED will turn OFF, after that \nwithin 2 seconds, release the tamper key. If \nsuccessful, the LED will light ON one second. \nOtherwise, the LED will flash once.\n3. IDs are excluded and all settings will reset to \nfactory default.",
            name: "ResetDescription",
          },
          {
            text:
              "MT02755 has temperature and humidity,based on Z-Wave™ technology.\nIt is the  Z-Wave™   plus product, it support the security, OTA... Those newest features of the  Z-Wave™   technology.  Z-Wave™ is a wireless communication protocol designed for home automation, specifically to remotely   control   applications   in   residential   and   light   commercial environments. The technology uses a low-power RF radio embedded or retrofitted into home electronics devices and systems, such as lighting, home access control, entertainment systems and household appliances.\nThis product can be included and operated in any Z-Wave™   network with other Z-Wave™  certified devices from other manufacturers and/or other applications.  All non-battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the\nnetwork.",
            name: "Description",
          },
          {
            text:
              "When the device power on, the device will wake about 20 seconds. In\nthis duration, the controller can communicate with the device. Normally\nthe device is always sleeping to save the battery energy.",
            name: "WakeupDescription",
          },
          {
            text:
              "1. Have Z-Wave™  Controller entered exclusion mode.\n2. Pressing tamper key three times within 1.5 seconds\nto enter the exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0020",
            name: "FrequencyName",
            type: "0002",
          },
          { text: "Humidity Sensor", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2226/MT02756_MT02755_Manual.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2226/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "5",
            instance: "1",
            label: "Operation Mode",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Fahrenheit", value: "0" },
              { label: "Celsius", value: "41" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Costumer Function",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n                16 Notification Type, 0:Using Notification Report. 16:Using Sensor Binary Report.\n                32 Disable Multi CC in auto report.\n            ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Auto Report Battery Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "12",
            Help:
              "\n                The interval time for auto report the battery level.\n                0 means turn off auto report.\n                The default value is 12.\n                The tick time can be set by the configuration No.20.\n            ",
          },
          {
            genre: "config",
            index: "13",
            label: "Auto Report Temperature time",
            max: "127",
            min: "0",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n                The interval time for auto report the temperature. 0 means turn off auto report temperature. The default value is 12. The tick time can setting by the configuration No.20.\n            ",
          },
          {
            genre: "config",
            index: "14",
            label: "Auto Report Humidity time",
            max: "127",
            min: "0",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n                The interval time for auto report the humidity. 0 means turn off auto report humidity. The default value is 12. The tick time can setting by the configuration No.20.\n            ",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Auto Report Tick Interval",
            max: "255",
            min: "0",
            type: "byte",
            units: "minute",
            value: "30",
            Help:
              "\n                The interval time for auto report each tick.\n                Setting this configuration will effect configuration No.10, No.13, No.14.\n                Units of one minute.\n                Caution1: Setting to 0 means turn off all auto report function.\n                Caution2: The value is unsigned byte\n            ",
          },
          {
            genre: "config",
            index: "21",
            label: "Temperature Differential Report",
            max: "127",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              '\n                The temperature differential to report. 0 means turn off this function. The unit is Fahrenheit. Enable this function the device will detect every minutes. And when the temperature is over 140 degree Fahrenheit, it will continue report. Enable this functionality will cause some issue please see the detail in the "Temperature Report" section.\n            ',
          },
          {
            genre: "config",
            index: "23",
            label: "Humidity Differential Report",
            max: "60",
            min: "0",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "\n                The humidity differential to report. 0 means turn off this function. The unit is %.\n            ",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "8" }],
          },
        ],
      },
    ],
  },
};

export default config;
