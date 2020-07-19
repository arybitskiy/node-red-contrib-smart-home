import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "LUXY Smart Switch", name: "Name" },
          {
            text:
              "The Qubino LUXY Smart Switch is ideal for gentle illumination of any room, for visual and sound notifications, and for controling various loads, using the built-in relay.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0159:0052:0008",
            name: "OzwInfoPage",
          },
          { text: "https://qubino.com", name: "ProductPage" },
          {
            text: "https://support.qubino.com/support/home",
            name: "ProductSupport",
          },
          { text: "images/qubino/ZMNKADx.png", name: "ProductPic" },
          {
            text:
              "Manual inclusion is triggered by the following procedure:\r\n            Full white needs to be active (c-button 2). The user can select it by quickly pressing the c-button2 once.\r\n            When full white is enabled, press c-button3 and hold it for 5 seconds (while white is glowing, hold c-button3 for 5 seconds).\r\n            After 5 seconds, the device starts flashing, with the following pattern: green 1 second on, 0.5 second off.\r\n            Once the device receives a nodeId or after 10 seconds, it stops flashing and turns green.",
            name: "InclusionDescription",
          },
          {
            text:
              "Exclusion is triggered by the following procedure:\r\n            Full white needs to be active (c-button 2).\r\n            When full white is enabled, press c-button3 and hold it for 5 seconds (while white is glowing hold c-button3 for 5 seconds).\r\n            After 5 seconds, the device starts flashing with the following pattern: red 1 second on, 0.5 second off.\r\n            Once the device loses its nodeId or after 10 seconds, it stops flashing and turns red.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Reset is triggered after the following procedure:\r\n            Full white needs to be active (c-button 2).\r\n            When full white is enabled, press c-button5 and hold it for 10 seconds.\r\n            After 10 seconds, the device starts flashing with the following pattern: blue 1 second on, 0.5 second off.\r\n            After 10 seconds the device stops flashing and turns blue.\r\n            The procedure is available always.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Import",
                author: "K.Petrovcic@goap.si",
                date: "22 January 2020",
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
      {
        id: "112",
        Value: [
          {
            genre: "config",
            instance: "1",
            index: "1",
            value: "0",
            label: "Relay contact type",
            units: "",
            size: "1",
            min: "0",
            max: "1",
            type: "list",
            Help: "\r\n\t\t\t\tRelay contact type.\r\n\t\t\t  ",
            Item: [
              { value: "0", label: "NO (normally open) output type" },
              { value: "1", label: "NC (normally close) output type" },
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
              "\r\n\t\t\t\tWith this parameter, you can determine, how to turn off the alarm.\r\n\t\t\t\t\r\n\t\t\t\t0 => only by z-wave command (basic set, switch multilevel set, switch multilevel start/stop level change, sound switch play tone, sound switch\r\n\t\t\t\tconfiguration, switch color set, switch color start/stop level change, notification report idle)\r\n\t\t\t\t\r\n\t\t\t\t1 => capacitive input (up, down, left, right) or z-wave command (basic set, switch multilevel set, switch multilevel start/stop level change, sound\r\n\t\t\t\tswitch play tone, sound switch configuration, switch color set, switch color start/stop level change, notification report idle)\r\n\t\t\t",
            Item: [
              { label: "With a Z-Wave command", value: "0" },
              {
                label: "With the capacitive input or a Z-Wave command",
                value: "1",
              },
            ],
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
              "\r\n                Default value = 0\r\n                0 => Disabled\r\n                30 to 32535 => 30 - 32535 seconds after which the device turns on.\r\n            ",
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
              "\r\n                Default value = 0\r\n                0 => Disabled\r\n                30 to 32535 => 30 - 32535 seconds after which the device turns off.\r\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Auto on timer relay",
            units: "second",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\r\n                Default value = 0\r\n                0 => Disabled\r\n                30 to 32535 => 30 - 32535 seconds after which the device turns on.\r\n            ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Auto off timer relay",
            units: "second",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\r\n                Default value = 0\r\n                0 => Disabled\r\n                30 to 32535 => 30 - 32535 seconds after which the device turns off.\r\n            ",
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
              "\r\n\t\t\t\tWith this parameter, the user can select if the state of the device (color, brightness) should be restored, after a power failure.\r\n\t\t\t\t\r\n\t\t\t\tDefault value = 1\r\n\t\t\t\t1 – Enabled (the device will restore state on power failure)\r\n\t\t\t\t0 – Disabled (the device will not restore state on power failure and will remain off)\r\n\t\t\t",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Restore relay state on power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\r\n\t\t\t\tWith this parameter, the user can select if the state of the built-in relay should be restored, after a power failure.\r\n\t\t\t\t\t\r\n\t\t\t\tDefault value = 1\r\n\t\t\t\t1 – Enabled (the device will restore state on power failure)\r\n\t\t\t\t0 – Disabled (the device will not restore state on power failure and will remain off)\r\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Watt Power Consumption Reporting Threshold for Load",
            units: "",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "\r\n                Choose by how much the power consumption needs to increase or decrease to be reported. \r\n\t\t\t\tValues correspond to percentages, so if 10 is set (by default), the device will report any power consumption changes of 10% or more compared to the last reading.\r\n\r\n\t\t\t\tDefault value = 10\r\n\t\t\t\t0 => Power consumption reporting disabled\r\n\t\t\t\t1 to 100 => 1% - 100% Power consumption reporting enabled. \r\n\t\t\t\t\r\n\t\t\t\tNew value is reported only when Wattage in real time changes by more than the percentage value set in this parameter compared to the previous Wattage reading, starting at 1% (the lowest value possible).\r\n\t\t\t\tNOTE: Power consumption needs to increase or decrease by at least 1 Watt to be reported, REGARDLESS of percentage set in this parameter.\r\n            ",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Watt Power Consumption Reporting Time Threshold for Load",
            units: "second",
            max: "32535",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\r\n                Set value refers to the time interval for power consumption reporting (Watts). \r\n\t\t\t\t\r\n\t\t\t\tDefault value = 0\r\n\t\t\t\t0 => Power consumption reporting disabled\r\n\t\t\t\t30 to 32535 => 30 - 32535 seconds. Power consumption reporting enabled. Report is sent according to time interval (value) set here.\r\n            ",
          },
          {
            genre: "config",
            index: "70",
            instance: "1",
            label: "Overload safety switch",
            units: "",
            max: "2300",
            min: "0",
            size: "2",
            type: "short",
            value: "2300",
            Help:
              "\r\n                The function allows turning off the controlled device in case of exceeding the defined power for more than 5s. \r\n\t\t\t\tThe controlled device can be turned back on by input I1 or by sending an actuation command.\r\n\r\n\t\t\t\tDefault value = 2300\r\n\t\t\t\t0 => function not active\r\n\t\t\t\t1 to 2300 => 1 W – 2300W\r\n\r\n\t\t\t\tNOTE: This functionality is not an overload safety protection, please check the technical specifications chapter for more details in the official manual.\r\n\r\n\t\t\t\tIn case of an overload event, the device will send the following message to the gateway/controller:\r\n\t\t\t\tNOTIFICATION_REPORT_V8(type=0x08=POWER_MANAGEMENT, event=0x08=Overload detected)\r\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "LEDs on/off", max_associations: "5" },
              {
                index: "3",
                label: "Change of brightness",
                max_associations: "5",
              },
              { index: "4", label: "Change of color", max_associations: "5" },
              { index: "5", label: "Relay on/off", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
