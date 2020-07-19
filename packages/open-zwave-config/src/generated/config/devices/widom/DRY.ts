import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "https://www.widom.it/it/smart-dry-contact-switch/",
            id: "0900",
            name: "ZWProductPage",
            type: "1214",
          },
          { text: "images/widom/DRY.png", name: "ProductPic" },
          {
            text:
              "https://www.widom.it/wp-content/uploads/2019/03/Widom_Dry_Contact_EN.pdf",
            name: "ProductManual",
          },
          { text: "DRY", id: "0900", name: "Identifier", type: "1214" },
          { text: "WiDOM Smart Dry Contact", name: "Name" },
          {
            text:
              "WiDOM Smart Dry Contact is an ON\\\\OFF device based on latching relay and can be used as both a local and remote switch.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0900",
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
                date: "12 Oct 2019",
                revision: 1,
              },
              {
                text: "Added product image",
                author: "Giuseppe Tiddia - giuseppe.tiddia@widom.it",
                date: "17 Feb 2020",
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
            type: "byte",
            genre: "config",
            index: "1",
            label: "Numbers of clicks to control the load",
            max: "7",
            min: "0",
            size: "1",
            value: "7",
            Help:
              "Defines which sequences of clicks on the external switch control the load\r\n        0 - Local Control disabled\r\n        1 - 1 click controls the local load\r\n        2 - 2 clicks control the local load\r\n        4 - 3 clicks control the local load\r\n        7 - The load connected to the Channel 1 can be controlled using 1 click, 2 clicks or 3 clicks\r\n        Default value: 7\r\n        Other options:\r\n        To control the load with 1 click and 2 clicks -> Parameter value must be 1 + 2 =3\r\n        To control the load with 1 click and 3 clicks -> Parameter value must be 1 + 4 =5\r\n        To control the load with 2 clicks and 3 clicks -> Parameter value must be 2 + 4 =6\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            index: "4",
            label: "Value used for devices belonging to Group 2",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "Value used for devices belonging to Group 2 when the external switch receives 1 Click\r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) The same value of dry contact status\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            index: "5",
            label: "Value used for devices belonging to Group 3",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "Value used for devices belonging to Group 3 when the external switch receives 2 \r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) The same value of dry contact status\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            index: "6",
            label: " Value used for devices belonging to Group 4",
            max: "100",
            min: "-1",
            size: "1",
            value: "100",
            Help:
              "Value used for devices belonging to Group 4 when external switch receives 3 Clicks \r\n        1-99 : Dimming purpose\r\n        0 : OFF\r\n        -1 : ON\r\n        100 : (Default Value) The same value of dry contact status\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            index: "10",
            label: "Timer to switch OFF the Relay",
            max: "32000",
            min: "0",
            size: "2",
            value: "0",
            Help:
              "Defines the time after which the relay is switched OFF\r\n      1 - 32000 : Number of time units (see parameter No.15) after which the dry contact is switched OFF\r\n      0 : (Default Value)  Timer disabled\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            index: "11",
            label: "Timer to switch ON the Relay",
            max: "32000",
            min: "0",
            size: "2",
            value: "0",
            Help:
              "Defines the time after which the relay is switched ON\r\n      1 - 32000 : Number of time units (see parameter No.15) after which the dry contact is switched ON\r\n      0 : (Default Value)  Timer disabled\r\n      ",
          },
          {
            type: "list",
            genre: "config",
            index: "15",
            label: "Timer scale",
            max: "2",
            min: "1",
            size: "2",
            value: "1",
            Help:
              "Defines the time unit used for parameters No.10 and No.11. (Default Value: 1 )\r\n",
            Item: [
              { label: "Tenth of seconds", value: "1" },
              { label: "Seconds", value: "2" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "20",
            label: "One Click Scene Activation Set",
            max: "255",
            min: "0",
            size: "2",
            value: "0",
            Help:
              "Defines the Scene Activation Set value sent to the Lifeline group with 1 Click on the external switch (Default Value: 0 )\r\n      1 - 255 : Value sent to the Lifeline group\r\n      0 : (Default Value)  No value is sent\r\n\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            index: "21",
            label: "Two Clicks Scene Activation Set",
            max: "255",
            min: "0",
            size: "2",
            value: "0",
            Help:
              "Defines the Scene Activation Set value sent to the Lifeline group with 2 Clicks on the external switch (Default Value: 0 )\r\n      1 - 255 : Value sent to the Lifeline group\r\n      0 : (Default Value)  No value is sent\r\n\r\n      ",
          },
          {
            type: "short",
            genre: "config",
            index: "22",
            label: "Three Clicks Scene Activation Set",
            max: "255",
            min: "0",
            size: "2",
            value: "0",
            Help:
              "Defines the Scene Activation Set value sent to the Lifeline group with 3 Clicks on the external switch (Default Value: 0 )\r\n      1 - 255 : Value sent to the Lifeline group\r\n      0 : (Default Value)  No value is sent\r\n\r\n      ",
          },
          {
            type: "list",
            genre: "config",
            index: "60",
            label: "Startup Status",
            max: "3",
            min: "1",
            size: "1",
            value: "3",
            Help:
              "Defines the status of the device following a restart (Default Value: 3 )",
            Item: [
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
              { label: "Previous status", value: "3" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "62",
            label: "Type of external switch",
            max: "4",
            min: "0",
            size: "1",
            value: "1",
            Help:
              "Defines the type of external switch connected to the device (Default Value: 1 )",
            Item: [
              { label: "Ignore", value: "0" },
              { label: "Button", value: "1" },
              { label: "Bistable switch", value: "2" },
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
              { index: "1", label: "Lifeline", max_associations: "8" },
              {
                index: "2",
                label:
                  "devices controlled by a single click on the external switch",
                max_associations: "8",
              },
              {
                index: "3",
                label:
                  "devices controlled by a double click on the external switch",
                max_associations: "8",
              },
              {
                index: "4",
                label:
                  "devices controlled by a triple click on the external switch",
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
