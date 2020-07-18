import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "https://www.widom.it/it/smart-dimmer/",
            id: "0A00",
            name: "ProductPage",
          },
          { text: "images/widom/WTED.png", name: "ProductPic" },
          {
            text:
              "https://www.widom.it/wp-content/uploads/2019/01/Widom_Smart_Dimmer_EN_1.pdf",
            name: "ProductManual",
          },
          { text: "WTED", id: "0A00", name: "Identifier", type: "1214" },
          { text: "WiDOM Smart TE Drimmer", name: "Name" },
          {
            text:
              'WiDom Smart TE Dimmer is an "in-wall device" that controls the luminosity level and/or fan speed.\r\n        A universal device that controls the light intensity of all types of dimmable lights, including LED lamps and energy-saving lamps.\r\n        The Smart TE Dimmer includes the ON / OFF control option of non-dimmable loads',
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0A00",
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
                revision: 1,
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
            label: "Start-up Status",
            max: "99",
            min: "-1",
            size: "1",
            value: "-1",
            Help:
              "\r\n        Defines the status of the device, in term of light level, following a restart.\r\n        0-99: 0-99% dimming level after device restart  \r\n        -1: (Defaukt Value) At device’s restart it restores the same dimming level at the moment of power failure.\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Fade On Time",
            max: "127",
            min: "-126",
            size: "1",
            value: "1",
            Help:
              "\r\n        Defines the time spent to switch the load from complete OFF to complete ON.\r\n        1 to 127 : Expresses in seconds the time spent to switch the load from complete OFF to complete ON\r\n        -1 to -126: Expresses in minutes the time spent to switch the load from complete OFF to complete ON\r\n        (Default Value: 1)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Fade Off Time",
            max: "127",
            min: "-126",
            size: "1",
            value: "1",
            Help:
              "\r\n        Defines the time spent to switch the load from complete ON to complete OFF.\r\n        1 to 127 : Expresses in seconds the time spent to switch the load from complete ON to complete OFF.\r\n        -1 to -126: Expresses in minutes the time spent to switch the load from complete ON to complete OFF.\r\n        (Default Value: 1)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Local Dimming Time",
            max: "60",
            min: "0",
            size: "1",
            value: "5",
            Help:
              "\r\n        Defines the time spent to switch the controlled load when the external switch is hold down.\r\n        0: Applies the timing spent to switch the controlled load to Fade On and Fade Off as defined in parameters 2 and 3.\r\n        1-60: Expresses in seconds the time spent to switch the load.\r\n        (Default value: 5)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Minimum Light Level",
            max: "98",
            min: "1",
            units: "%",
            size: "1",
            value: "1",
            Help:
              "\r\n        Defines the light level that will correspond to the 1% of dimming.\r\n        1 to 98: Defines which light level will correspond to 1% in the range between 1 and 98%\r\n        (Default Value: 1)\r\n      ",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "11",
            label: " Maximum Light Level",
            max: "99",
            min: "2",
            units: "%",
            size: "1",
            value: "99",
            Help:
              "\r\n        Defines the light level that will correspond to the 99% of dimming.\r\n        2 to 99: Defines which light level will correspond to 99% in the range between 2 and 99%\r\n        (Default Value: 99)\r\n      ",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "20",
            label: "Dimmable Load",
            size: "1",
            value: "0",
            Help:
              "Define how to reset the overvoltage alarm and breaks off the blue blinking. (Defaukt Value: 1)",
            Item: [
              { label: "NON DIMMABLE LOAD\r\n", value: "0" },
              { label: "DIMMABLE LOAD", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "62",
            label: "Type of external switch",
            max: "2",
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
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "8" },
              { index: "2", label: "Dimming", max_associations: "8" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
