import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0001:3330:444D",
            name: "OzwInfoPage",
          },
          { text: "images/act/zdm230.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/478/",
            id: "3330",
            name: "ZWProductPage",
            type: "444D",
          },
          { text: "ZDM230 - Dual button Wall Dimmer", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "3330",
            name: "FrequencyName",
            type: "444D",
          },
          {
            text:
              'The ZDM230 is a dual switch design, where the first switch controls the connected load and also serve as a transmitter using multiple switch taps (one group of 5 Z-Wave modules), and the second switch used as a transmitter only (controls two groups of 5 Z-Wave modules).\n\nZDM230 replaces an existing wall switch, and can add 3-way capability.\n\nZDM230 can be programmed as a routing slave to establish firm signal routes and can be "associated" with other Z-wave devices in order to control them.\n\nZDM230 has automatic Static Update Controller (SUC) capability.  A Static Controller is one that is not moved after its addition to the network.  The Static Controller can act as a gateway in the system, since other nodes always know its position.  The “always listening” advantage of the Static Controller is that other nodes can transmit information frames to it whenever needed.\n\nZDM230 can be configured to Control Shades or Window Coverings via Z-Wave network',
            name: "Description",
          },
          { text: "ZDM230", id: "3330", name: "Identifier", type: "444D" },
          {
            text:
              "http://www.smarthome-products.com/p-638-homepro-zdm230-z-wave-500-watt-dimmer-3-way-3-wire-euro.aspx",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/478/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            index: "1",
            label: "Ignore Start-Level (Transmitting)",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Dimmers controlled by this switch will start dimming from their current level.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Suspend Group 4",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Disable transmitting commands to Z-Wave devices that are in Group 4 without disassociating those devices from the group.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Night Light",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "In night-light mode the LED on the switch will turn ON when the switch is turned OFF.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Invert Switch",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Change the top of the switch to OFF and the bottom of the switch to ON. Note: If you invert the switches and also install the product upside down, remember the load will now be controlled by the right, not the left switch.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Ignore Start-Level (Receiving)",
            size: "1",
            type: "list",
            value: "1",
            Help: "This dimmer will start dimming from its current level.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Don't Send Level After Dim",
            size: "1",
            type: "list",
            value: "1",
            Help:
              'When you press and hold the bottom of the ZDM230 switch once, the Z-Wave devices that are associated into Group 1 are sent the Dim command. If this parameter is set to "Yes" the devices in Group 1 will not go to the same level as the ZDM230.',
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "On/Off Command Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "8",
            label: "On/Off Command Dim Rate",
            max: "255",
            min: "1",
            type: "byte",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "9",
            label: "Local Control Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "10",
            label: "Local Control Dim Rate",
            max: "255",
            min: "1",
            type: "byte",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "11",
            label: "ALL ON/ALL OFF Dim Step",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            genre: "config",
            index: "12",
            label: "ALL ON/ALL OFF Dim Rate",
            max: "255",
            min: "1",
            type: "byte",
            units: "x 10 milliseconds",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            genre: "config",
            index: "13",
            label: "Disable Group 4 During Dim",
            size: "1",
            type: "list",
            Help:
              "Units in Group 4 only track when the dimmer is being turned ON and OFF and not while dimming.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Enable Shade Control Group 2",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "The ZDM230 can operate shade control devices via its group 2.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            label: "Enable Shade Control Group 3",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "The ZDM230 can operate shade control devices via its group 3.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "19",
            label: "LED Transmission Indication",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "The ZDM230 will flicker its LED when it is transmitting to any of its 4 groups. This flickering can be set to not flicker at all, to flicker the entire time it is transmitting, or to flicker for only 1 second when it begins transmitting.",
            Item: [
              { label: "None", value: "0" },
              { label: "While Transmitting", value: "1" },
              { label: "One Second Maximum", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "Poll Group 2 Interval",
            max: "255",
            min: "1",
            type: "byte",
            units: "minutes",
            value: "2",
            Help: "Poll Group 2 Interval",
          },
          {
            genre: "config",
            index: "22",
            label: "Enable Group 2 Polling",
            size: "1",
            type: "list",
            Help: "Poll Group 2",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
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
              { index: "1", label: "Left Switch", max_associations: "5" },
              { index: "2", label: "Right Switch", max_associations: "5" },
              {
                index: "3",
                label: "Right Switch (2 Taps)",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "4",
                label: "Update Controller",
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
