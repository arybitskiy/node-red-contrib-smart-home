import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0258:0085:0003",
            name: "OzwInfoPage",
          },
          { text: "images/shenzen_neo/nas-ws02z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1788/",
            id: "0085",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1788/Water Leakage Detector User Manual V2.doc",
            name: "ProductManual",
          },
          { text: "NAS-WS01Z", id: "0085", name: "Identifier", type: "0003" },
          {
            text:
              "Add the Sensor to Z-Wave Network\n\n1.Remove the sensor cover. \n\n2.Make sure the sensor is powered. \n\n3.Set Z-Wave controller or Z-Wave gateway into inclusion mode (Refer to the controller or gateway operating manual) \n\n4.Press the button three times within 1.5 second, the device will enter inclusion mode. And the LED will flash on and off alternately five times.",
            name: "InclusionDescription",
          },
          {
            text:
              "In the front casing, there is button that is used to carry out include, exclude or reset factory default settings on PCB Board.\n\nWhen power is first supplied, the LED will flash on and off alternately at one second intervals within 5 seconds if the detector has been added a Z-Wave network. Please get familiar with the terms below before starting the operations.\n\nThis product can be included and operated in any Z-Wave network with other Z-Wave certified devices from other manufacturers and/or other applications. All non-battery operated nodes within the network will act as repeaters regardless of vendor to increase reliability of the network.",
            name: "Description",
          },
          { text: "Water Sensor", name: "Name" },
          {
            text:
              "Delete the Sensor from Z-Wave Network\n\n1.Remove the device cover. \n\n2.Make sure the sensor is powered. \n\n3.Set Z-Wave controller or Z-Wave gateway into exclusion mode (Refer to the controller or gateway operating manual) \n\n4.Press the button three times within 1.5 second, the device will enter exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Restore the Sensor to Factory Default Settings\n\nNote: to use the reset procedure only when the primary controller is missing or inoperable\n\nReset procedure will delete all information on the Z-Wave network and Z-Wave controller or Z-Wave Gateway, and restore the sensor to factory default settings.\n\n1.Remove the device cover. \n\n2.Make sure the sensor is powered. \n\n3.Press and hold the button for 10 seconds, led will blink once. \n\n4.Release the button.",
            name: "ResetDescription",
          },
          {
            text:
              "Wakeup the Sensor Manual\n\nUser can press button once to wake-up this sensor to send wakeup notification to controller, the Led will be blink one time.",
            name: "WakeupDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0085",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1788/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            label: "Alarm Duration Time",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "minute",
            value: "120",
            Help:
              "If this parameter is set to 0, the beep and LED will be turn on always until water leakage is not detected.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Alarm Interval",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "minute",
            value: "1",
            Help:
              "This Parameter defines beep on/off interval time when water leakage is detected.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "First Alarm On Time Duration",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "second",
            value: "60",
            Help:
              "This parameter defines beep on duration first time when water leakage is detected.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Alarm on Time Duration",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "second",
            value: "5",
            Help:
              "This parameter defines beep on duration after fist beep on when water leakage is detected.",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Alarm sound",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines beep on is enabled or disabled when water leakage is detected.\n                0 indicate beep on is disable, but LED will be turned on when water leakage detected.\n                1 indicate beep on is enabled, the BEEP and LED will be turned on when water leakage detected.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Water Leakage Detected Report",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines the function than water leakage detect is enabled or disabled.\n                0 indicate disable water leakage detect,\n                1 indicate enable water leakage detect.\n            ",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Basic Set Level",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "Basic Set Command will be sent where contains a value when the leakage is detected, the receiver will take it for consideration;\n                for instance, if a lamp module is received the Basic Set Command of which value is decisive as to how bright of dim level of lamp module shall be.\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "4" },
              { index: "2", label: "Control Commands", max_associations: "4" },
              {
                index: "3",
                label: "Send Notification Report",
                max_associations: "4",
              },
              {
                index: "4",
                label: "Send Binary Sensor Report",
                max_associations: "4",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
