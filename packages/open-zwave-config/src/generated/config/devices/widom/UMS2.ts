import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "https://www.widom.it/en/smart-roller-shutter/",
            id: "0800",
            name: "ProductPage",
          },
          { text: "images/widom/UMS2.png", name: "ProductPic" },
          {
            text:
              "https://www.widom.it/wp-content/uploads/2019/03/Widom_Smart_Roller_Shutter_EN_0.pdf",
            name: "ProductManual",
          },
          { text: "UMS2", id: "0800", name: "Identifier", type: "1214" },
          { text: "WiDOM Smart Roller Shutter", name: "Name" },
          {
            text:
              'WiDom Smart Roller Shutter is an "in wall device", for the multilevel control of roller shutter motors.\r\n        It can accurately control the opening and closing of blinds, curtains, shutters, venetian blinds as requested by the user through local commands or remotely\r\n        using computers, smartphones, tablets.',
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0800",
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
                date: "18 Nov 2019",
                revision: 2,
              },
              {
                text: "Some fixes comparing with openHab exported file",
                author: "Giuseppe Tiddia - giuseppe.tiddia@widom.it",
                date: "18 Nov 2019",
                revision: 3,
              },
              {
                text: "Added product image",
                author: "Giuseppe Tiddia - giuseppe.tiddia@widom.it",
                date: "17 Feb 2020",
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
            type: "byte",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Numbers of clicks to control the loads",
            size: "1",
            value: "3",
            Help:
              "Define which sequences of click control the local load. (Default Value: 3)",
            Item: [
              { label: "DISABLED", value: "0" },
              { label: "ONE_CLICK", value: "1" },
              { label: "TWO_CLICKS", value: "2" },
              { label: "ONE_CLICK and TWO_CLICKS", value: "3" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Favorite level for ON position",
            max: "100",
            min: "50",
            units: "%",
            size: "1",
            value: "100",
            Help:
              "\r\n        50 to 100: 50-100% opening level (100% correspond to completely open)\r\n        (Default Value: 100)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Favorite level for OFF position",
            max: "50",
            min: "0",
            units: "%",
            size: "1",
            value: "0",
            Help:
              "\r\n        0 to 49: 0-49% opening level (0 correspond to completely closed)\r\n        (Default Value: 0)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "4",
            label:
              "Value used for devices belonging to Group 2 using UP button",
            max: "100",
            min: "-1",
            size: "1",
            value: "-1",
            Help:
              "\r\n        Value used for devices belonging to Group 2 when UP button receive 1 Click\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON (Default Value)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "5",
            label:
              "Value used for devices belonging to Group 2 using DOWN button",
            max: "100",
            min: "-1",
            size: "1",
            value: "0",
            Help:
              "\r\n        Value used for devices belonging to Group 2 when DOWN button receive 1 Click\r\n        1-99 : Dimming purpose\r\n        0 : OFF (Default Value)\r\n        -1 : ON \r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "6",
            label:
              "Value used for devices belonging to Group 3 using UP button",
            max: "100",
            min: "-1",
            size: "1",
            value: "-1",
            Help:
              "\r\n        Value used for devices belonging to Group 3 when UP button receive 2 Clicks\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON (Default Value)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "7",
            label:
              "Value used for devices belonging to Group 3 using DOWN button",
            max: "100",
            min: "-1",
            size: "1",
            value: "0",
            Help:
              "\r\n        Value used for devices belonging to Group 3 when DOWN button receive 2 Clicks\r\n        1-99 : Dimming purpose\r\n        0 : OFF (Default Value)\r\n        -1 : ON\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "8",
            label:
              "Value used for devices belonging to Group 4 using UP button",
            max: "100",
            min: "-1",
            size: "1",
            value: "-1",
            Help:
              "\r\n        Value used for devices belonging to Group 4 when UP button receive 3 Clicks\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON (Default Value)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "9",
            label:
              "Value used for devices belonging to Group 4 using DOWN button",
            max: "100",
            min: "-1",
            size: "1",
            value: "0",
            Help:
              "\r\n        Value used for devices belonging to Group 4 when DOWN button receive 3 Clicks\r\n        1-99 : Dimming purpose\r\n        0 : OFF (Default Value)\r\n        -1 : ON\r\n      ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "20",
            label: "Calibration",
            size: "1",
            value: "1",
            Help:
              "\r\n        Defines the status of the calibration procedure. By default, as soon as the device has been included, the \r\n        calibration starts in automatic mode. At the end of the calibration, this parameter is set to 1. \r\n        Afterwards the calibration can be done again by setting this parameter to 0 (AUTO) or 2 (MANUAL) and clicking \r\n        on any external button. If the calibration is set in AUTO mode, it will be completed automatically.\r\n        If the calibration is set in MANUAL mode, a click on any external button is necessary to carry on the next step. \r\n        During the calibration, the LED indicator blinks repeatedly in BLUE.\r\n        (Default Value: 0)\r\n      ",
            Item: [
              { label: "TO_BE_DONE_AUTO", value: "0" },
              { label: "DONE", value: "1" },
              { label: "TO_BE_DONE_MANUAL", value: "2" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "21",
            label: "Motor idle state definition",
            max: "3000",
            min: "0",
            size: "2",
            value: "1000",
            Help:
              "\r\n        Defines the level of power consumption under which the motor is considered steady (stationary)\r\n        0 to 3000 : Expressed in hundredths of Watt (ex. 3000=30 Watt)\r\n        (Default Value: 1000)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "22",
            label: "Limit switch recognition",
            max: "127",
            min: "0",
            size: "1",
            value: "30",
            Help:
              "\r\n        The motor has reached the limit switch when its power consumption is lower than PLIMIT (the power defined in parameter No. 21) for an amount of time defined by this parameter. \r\n        1 to 127 : Expressed in hundredths of Watt (ex. 3000=30 Watt)\r\n        0 : Limit Switch ignored\r\n        (Default Value: 30)\r\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "8" },
              { index: "2", label: "1 Click", max_associations: "8" },
              { index: "3", label: "2 Clicks", max_associations: "8" },
              { index: "4", label: "2 Clicks", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
