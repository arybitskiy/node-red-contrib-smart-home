import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          { text: "LUXY Smart Light", name: "Name" },
          {
            text:
              "The Qubino LUXY Smart Light is ideal for gentle illumination of any room and for visual and sound notifications.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0159:0051:0008",
            name: "OzwInfoPage",
          },
          { text: "https://qubino.com", name: "ProductPage" },
          {
            text: "https://support.qubino.com/support/home",
            name: "ProductSupport",
          },
          { text: "images/qubino/ZMNHQDx.png", name: "ProductPic" },
          {
            text:
              "Manual inclusion is triggered by the following procedure:\n            Full white needs to be active (c-button 2). The user can select it by quickly pressing the c-button2 once.\n            When full white is enabled, press c-button3 and hold it for 5 seconds (while white is glowing, hold c-button3 for 5 seconds).\n            After 5 seconds, the device starts flashing, with the following pattern: green 1 second on, 0.5 second off.\n            Once the device receives a nodeId or after 10 seconds, it stops flashing and turns green.",
            name: "InclusionDescription",
          },
          {
            text:
              "Exclusion is triggered by the following procedure:\n            Full white needs to be active (c-button 2).\n            When full white is enabled, press c-button3 and hold it for 5 seconds (while white is glowing hold c-button3 for 5 seconds).\n            After 5 seconds, the device starts flashing with the following pattern: red 1 second on, 0.5 second off.\n            Once the device loses its nodeId or after 10 seconds, it stops flashing and turns red.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Reset is triggered after the following procedure:\n            Full white needs to be active (c-button 2).\n            When full white is enabled, press c-button5 and hold it for 10 seconds.\n            After 10 seconds, the device starts flashing with the following pattern: blue 1 second on, 0.5 second off.\n            After 10 seconds the device stops flashing and turns blue.\n            The procedure is available always.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Import",
                author: "K.Petrovcic@goap.si",
                date: "18 October 2019",
                revision: 1,
              },
              {
                text: "Reformat and remove small typo",
                author: "Jean-Francois Auger - nechry@gmail.com",
                date: "29 December 2019",
                revision: 2,
              },
              {
                text: "Fix Empty ChangeLog Entry",
                author: "Justin Hammond",
                date: "23 March 2020",
                revision: 3,
              },
              {
                text: "Add Product Pic",
                author: "Justin Hammond",
                date: "24 June 2020",
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
            index: "1",
            instance: "1",
            label: "Digital input type",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Defines the type of input device, connected to digital input.",
            Item: [
              { label: "Push-button", value: "0" },
              { label: "OnOff toggle switch", value: "1" },
              { label: "Motion sensor", value: "2" },
              { label: "Motion sensor with memory", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Turning off alarming",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "With this parameter, you can determine, how to turn off the alarm.",
            Item: [
              { label: "Only by Z-Wave alarm", value: "0" },
              { label: "Capacitive input or Z-Wave command", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Motion sensor memory timer",
            units: "second",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "10",
            Help:
              "\n                Defines the time after which the output triggered by motion sensor is turned off.\n                Default value = 10.\n                0 to 32534 => 0-32534 seconds after which the LED will be turned off.\n                32535 => never turns off.\n            ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Auto on timer",
            units: "second",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Default value = 0\n                0 => Disabled\n                30 to 32767 => 30 - 32767 seconds after which the device turns on.\n            ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Auto off timer",
            units: "second",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Default value = 0\n                0 => Disabled\n                30 to 32767 => 30 - 32767 seconds after which the device turns off.\n            ",
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Restore state on power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "With this parameter, the user can select if the state of the device should be restored, after a power failure.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "50",
            instance: "1",
            label: "Beeper",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "With this parameter, the user can select the operating mode of the beeper.",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Basic OnOff", max_associations: "5" },
              {
                index: "3",
                label: "StartStop level change",
                max_associations: "5",
              },
              { index: "4", label: "Multilevel set", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
