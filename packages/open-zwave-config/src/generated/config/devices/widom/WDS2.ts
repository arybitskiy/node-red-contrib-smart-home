import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "https://www.widom.it/it/smart-double-switch/",
            id: "0B00",
            name: "ProductPage",
            type: "1214",
          },
          { text: "images/widom/WDS2.png", name: "ProductPic" },
          { text: "WDS2", id: "0B00", name: "Identifier", type: "1214" },
          {
            text:
              "Widom Smart Double Switch is the new ON/OFF smallest control device in the world designed to independently control two separate loads",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0B00",
            name: "FrequencyName",
            type: "1214",
          },
          {
            text:
              "https://www.widom.it/wp-content/uploads/2019/03/Widom_Smart_Double_Switch_EN.pdf",
            name: "ProductManual",
          },
          { text: "WiDom Smart Double switch", name: "Name" },
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
                text: "Some fixes comparing with openHab exported file",
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
            type: "byte",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Numbers of clicks to control the loads",
            max: "7",
            min: "0",
            size: "1",
            value: "7",
            Help:
              "\r\n        Define which sequences of clicks control the load connected to both Channel 1 and Channel 2, if parameter No. 2 is set to its default value.\r\n        Otherwise parameter No.1 sets the clicks sequence only for Channel 1 and parameter No. 2 sets the clicks sequence for Channel 2.\r\n        0 - Local Control disabled\r\n        1 - 1 click controls the local load\r\n        2 - 2 clicks control the local load\r\n        4 - 3 clicks control the local load\r\n        7 - The load connected to the Channel 1 can be controlled using 1 click, 2 clicks or 3 clicks\r\n        Default value: 7\r\n        Other options:\r\n        To control the load with 1 click and 2 clicks -> Parameter value must be 1 + 2 =3\r\n        To control the load with 1 click and 3 clicks -> Parameter value must be 1 + 4 =5\r\n        To control the load with 2 clicks and 3 clicks -> Parameter value must be 2 + 4 =6\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "2",
            label: " Numbers of clicks to control Channel 2 load",
            max: "8",
            min: "0",
            size: "1",
            value: "8",
            Help:
              "\r\n        Defines which sequences of click control the load connected to Channel 2\r\n        0 - Local Control disabled\r\n        1 - 1 click controls the local load\r\n        2 - 2 clicks control the local load\r\n        4 - 3 clicks control the local load\r\n        8 - The load connected to the Channel 2 will be controlled with the same number of clicks configured for Channel 1 load.\r\n        Default value: 8\r\n        Other options:\r\n        To control the load with 1 click and 2 clicks -> Parameter value must be 1 + 2 =3\r\n        To control the load with 1 click and 3 clicks -> Parameter value must be 1 + 4 =5\r\n        To control the load with 2 clicks and 3 clicks -> Parameter value must be 2 + 4 =6\r\n        To control the load with 1 click, 2 clicks and 3 clicks -> Parameter value must be 1 + 2 + 4 =7\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Value used for devices belonging to Group 2",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "\r\n        Value used for devices belonging to Group 2 when external switch I1 receives 1 Click\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) The same value of Channel 1 load status\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "5",
            label: "Value used for devices belonging to Group 5",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "\r\n        Value used for devices belonging to Group 5 when external switch I2 receives 1 Click\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) The same value of Channel 2 load status\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Value used for devices belonging to Group 3",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "\r\n        Value used for devices belonging to Group 3 when external switch I1 receives 2 Clicks\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) The same value of Channel 1 load status\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Value used for devices belonging to Group 6",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "Value used for devices belonging to Group 6 when external switch I2 receives 2 Clicks\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) The same value of Channel 2 load status\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "8",
            label: "Value used for devices belonging to Group 4",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "\r\n        Value used for devices belonging to Group 4 when external switch I1 receives 3 Clicks\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) The same value of Channel 1 load status\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "9",
            label: "Value used for devices belonging to Group 7",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "\r\n        Value used for devices belonging to Group 7 when external switch I2 receives 3 Clicks\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) The same value of Channel 2 load status\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "10",
            label: " Timer to switch OFF the Channel 1",
            max: "32000",
            min: "0",
            size: "2",
            units: "seconds",
            value: "0",
            Help:
              "\r\n        Defines the time after which the Channel 1 load is switched OFF.\r\n        0 (Default Value) Timer disabled.\r\n        From 1 to 32000 (seconds) After this time the relay of the Channel 1 is OFF.\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "11",
            label: "Timer to switch OFF the Channel 2",
            max: "32000",
            min: "0",
            size: "2",
            units: "seconds",
            value: "0",
            Help:
              "\r\n        Defines the time after which the Channel 2 load is switched OFF.\r\n        0 (Default Value) Timer disabled.\r\n        From 1 to 32000 (seconds) After this time the relay of the Channel 2 is OFF.\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "12",
            label: "Timer to switch ON the Channel 1",
            max: "32000",
            min: "0",
            size: "2",
            units: "seconds",
            value: "0",
            Help:
              "\r\n        Defines the time after which the Channel 1 load is switched ON.\r\n        0 (Default Value) Timer disabled.\r\n        From 1 to 32000 (seconds) After this time the relay of the Channel 1 is ON.\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "13",
            label: "Timer to switch ON the Channel 2",
            max: "32000",
            min: "0",
            size: "2",
            units: "seconds",
            value: "0",
            Help:
              "\r\n        Defines the time after which the Channel 2 load is switched ON.\r\n        0 (Default Value) Timer disabled.\r\n        From 1 to 32000 (seconds) After this time the relay of the Channel 2 is ON.\r\n      ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "40",
            label: "Local Scenario",
            size: "1",
            value: "1",
            Help:
              "\r\n        Defines the behavior of the device Channels when the I1/I2 external switches receive a valid number of clicks (see Parameters No. 1 and No. 2).\r\n        Note: When to the parameter 40 is given a value different from zero, the associated devices will not be controlled. \r\n      ",
            Item: [
              { label: "INDIPENDENT_CHANNELS\r\n", value: "1" },
              { label: "NEVER_BOTH_ON", value: "2" },
              { label: "SEQUENCING_RELAY", value: "3" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "60",
            label: "Start-up status",
            size: "1",
            value: "4",
            Help:
              "Defines the status of the device following a restart (Default Value: 4).",
            Item: [
              { label: "OFF_OFF", value: "0" },
              { label: "OFF_ON", value: "1" },
              { label: "ON_OFF", value: "2" },
              { label: "ON_ON\r\n", value: "3" },
              { label: "PREVIOUS STATUS\r\n", value: "4" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "62",
            label: "Type of external switch",
            size: "1",
            value: "1",
            Help:
              "\r\n        Defines the type of external switch connected both to input 1 and input 2, if parameter No. 63 is set in its default value.\r\n        Otherwise parameter No. 62 defines only the external switch connected to the input 1 and parameter No. 63 the switch connected to the input 2.\r\n        (Default Value: 1)\r\n      ",
            Item: [
              { label: "IGNORE", value: "0" },
              { label: "BUTTON\r\n", value: "1" },
              { label: "SWITCH", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "63",
            label: "Type of external switch",
            size: "1",
            value: "3",
            Help:
              "\r\n        Defines the type of external switch connected both to input 1 and input 2, if parameter No. 63 is set in its default value.\r\n        Otherwise parameter No. 62 defines only the external switch connected to the input 1 and parameter No. 63 the switch connected to the input 2.\r\n        (Default Value: 1)\r\n      ",
            Item: [
              { label: "IGNORE", value: "0" },
              { label: "BUTTON\r\n", value: "1" },
              { label: "SWITCH", value: "2" },
              { label: "EQUAL TO SWITCH 1\r\n", value: "3" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "7",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "8" },
              { index: "2", label: "1 Click button S1", max_associations: "8" },
              {
                index: "3",
                label: "2 Clicks button S1",
                max_associations: "8",
              },
              {
                index: "4",
                label: "3 Clicks button S1",
                max_associations: "8",
              },
              { index: "5", label: "1 Click button S2", max_associations: "8" },
              {
                index: "6",
                label: "2 Clicks button S2",
                max_associations: "8",
              },
              {
                index: "7",
                label: "3 Clicks button S2",
                max_associations: "8",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
