import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "https://www.widom.it/it/smart-plug/",
            id: "0700",
            name: "ProductPage",
            type: "1214",
          },
          { text: "images/widom/WSP.png", name: "ProductPic" },
          {
            text:
              "https://www.widom.it/wp-content/uploads/2019/08/Widom-Smart-Plug_EN_20190404_0.pdf",
            name: "ProductManual",
          },
          { text: "WSP", id: "0700", name: "Identifier", type: "1214" },
          { text: "WiDOM Smart Dry Contact", name: "Name" },
          {
            text:
              "WiDom Smart Plug is able to detect overvoltage and/or overcurrent events and indicate them through a \r\n        multicolor LED. Furthermore, it protects appliances from eventual overload. A very innovative design, which \r\n        integrates a complex system that allows a precise energy consumption monitoring. The integration of these \r\n        features in its very small size product, make it unique on the market.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0700",
            name: "FrequencyName",
            type: "1214",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial Metadata",
                author: "Giuseppe Tiddia - giuseppe.tiddia@widom.it",
                date: "15 Nov 2019",
                revision: 1,
              },
              {
                text: "Initial Metadata",
                author: "Giuseppe Tiddia - giuseppe.tiddia@widom.it",
                date: "15 Nov 2019",
                revision: 2,
              },
              {
                text: "Added product image",
                author: "Giuseppe Tiddia - giuseppe.tiddia@widom.it",
                date: "17 Feb 2020",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Local load control",
            size: "1",
            value: "3",
            Help: "Defines which sequences of click control the local load",
            Item: [
              { label: "ONE_CLICK", value: "1" },
              { label: "TWO_CLICKS", value: "2" },
              { label: "ONE_CLICK or TWO_CLICKS", value: "3" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Level used to control the devices associated to group 4",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "\r\n        Defines how to control the devices associated to 1 click event\r\n        1-99 : The associated devices (dimmer, roller shutters) are set to the indicated level\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) If the relay is ON/OFF, the associated devices are ON/OFF\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Level used to control the devices associated to group 5",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "\r\n        Defines how to control the devices associated to 2 clicks event \r\n        1-99 : The associated devices (dimmer, roller shutters) are set to the indicated level\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) If the relay is ON/OFF, the associated devices are ON/OFF \r\n      ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Overvoltage level",
            max: "260",
            min: "110",
            size: "2",
            value: "253",
            Help:
              "\r\n        Defines the voltage level (in Volts) beyond which an overvoltage event is identified and the overvoltage timer is activated.\r\n        The timer is reset when the event ceases, i.e. when the voltage returns below the overvoltage level.\r\n        As soon as an overvoltage event occurs, the LED starts a BLUE blinking.\r\n        If the overvoltage event ceases before the overvoltage timer expires, the blue blinking is stopped,\r\n        otherwise the alarm is generated and the blinking reset is established by parameter 6.\r\n        (Default value: 253)\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Overvoltage Timer",
            max: "36000",
            min: "1",
            units: "seconds",
            size: "2",
            value: "5",
            Help:
              "\r\n        Define the time (seconds) in which the voltage must persist above the overvoltage level so that an alarm is generated.\r\n        1 - 36000: Overvoltage time interval (in seconds) after witch an alarm is generated\r\n        (Default Value: 5)\r\n      ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Overvoltage Alarm Reset",
            size: "1",
            value: "0",
            Help:
              "Define how to reset the overvoltage alarm and breaks off the blue blinking.",
            Item: [
              { label: "MANUAL", value: "0" },
              { label: "OVER_VOLTAGE_END", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Level used to control the devices associated to group 3",
            max: "99",
            min: "-1",
            size: "1",
            value: "0",
            Help:
              "\r\n        Define how to control the devices associated to the overvoltage alarm \r\n        1-99 : The associated devices (dimmer, roller shutters) are set to the indicated level\r\n        0 : OFF  (Default Value)\r\n        -1 : ON\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "8",
            label: "Overcurrent level",
            max: "12",
            min: "1",
            units: "Amps",
            size: "1",
            value: "12",
            Help:
              "\r\n         Defines the current level (in Amps) beyond which an overcurrent event is identified and the overcurrent timer is activated.\r\n         The timer is reset when the event ceases, i.e. when the current returns below the overcurrent level.\r\n         As soon as an overcurrent event occurs, the LED starts a GREEN blinking.\r\n         If the overcurrent event ceases before the overcurrent timer expires, the GREEN\r\n         1 - 12 : Defines the overcurrent level (in Amps)\r\n        (Default Value: 12 )\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "9",
            label: "Overcurrent Timer",
            max: "36000",
            min: "1",
            units: "seconds",
            size: "2",
            value: "10",
            Help:
              "\r\n        Define the time (seconds) in which the current must persist above the overcurrent level so that an alarm is generated and the relay is opened.\r\n        1 - 36000: Overcurrent time interval (in seconds) after witch an alarm is generated\r\n        (Default Value: 10)\r\n      ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "10",
            label: " Overcurrent Alarm Reset",
            size: "1",
            value: "1",
            Help:
              "Define how to reset the over-current alarm and breaks off the red blinking.",
            Item: [
              { label: "MANUAL", value: "0" },
              { label: "OVER_CURRENT_END", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "11",
            label: "Level used to control the devices associated to group 2",
            max: "99",
            min: "-1",
            size: "1",
            value: "0",
            Help:
              "\r\n        Define how to control the devices associated to the overcurrent alarm \r\n        1-99 : The associated devices (dimmer, roller shutters) are set to the indicated level\r\n        0 : OFF  (Default Value)\r\n        -1 : ON\r\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "8" },
              { index: "2", label: "Over Current", max_associations: "8" },
              { index: "3", label: "Overvoltage", max_associations: "8" },
              { index: "4", label: "OnOFF 1 Click", max_associations: "8" },
              { index: "5", label: "OnOFF 2 Clicks", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
