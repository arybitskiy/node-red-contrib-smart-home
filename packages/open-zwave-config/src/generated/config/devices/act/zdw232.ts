import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "1",
            genre: "config",
            label: "Set Ignore Start Level Bit When Transmitting Dim Commands",
            size: "1",
            value: "1",
            Help:
              "\nThe ZDW232 can send Dim commands to Z-Wave enabled dimmers. The Dim command has a start level embedded\nin it. A dimmer receiving this command will start dimming from that start level. However, the command also has a\nbit that indicates whether the dimmer should ignore the start level. If the bit is set to 1, the dimmer will ignore the\nstart level and instead start dimming from its current level. If this bit is set to 0, the dimmer will not ignore the start\nlevel.\n\t\t\t",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "2",
            genre: "config",
            label: "Suspend Group 4",
            size: "1",
            value: "0",
            Help:
              'You may wish to disable transmitting commands to Z-Wave devices that are in Group 4 without "un-associating"\nthose devices from the group. Setting parameter 2 to the value of 1 will stop the ZDW232 from transmitting to devices\nthat are "associated" into Group 4.\nIt is possible that you may only want the units in Group 4 to track when the dimmer is being turned ON and OFF\nand not when dimming.',
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "3",
            genre: "config",
            label: "Night Light",
            size: "1",
            value: "0",
            Help:
              "In night-light mode the LED on the switch will turn ON when the switch is turned OFF.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "4",
            genre: "config",
            label: "Invert Switch",
            size: "1",
            value: "0",
            Help:
              "To change the top of the switch to OFF and the bottom of the switch to ON, set parameter 4 to 1.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "5",
            genre: "config",
            label: "Ignore Start Level When Receiving Dim Commands",
            size: "1",
            value: "1",
            Help:
              "The ZDW232 can be set to ignore the start level that is part of the dim command, regardless of whether the command\nis telling the dimmer to ignore the start level or not ignore the start level embedded in the command (see Parameter\n1). Setting parameter 5 to a value of 1 (factory default) will cause the ZDW232 to ignore the start level and to dim\nor brighten from its current level. Setting the value to 0 will cause the ZDW232 to dim or brighten from the level in\nthe command.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "6",
            genre: "config",
            label: "Don't Send Level Command After Transmitting Dim Commands",
            size: "1",
            value: "1",
            Help:
              "When you press and hold the bottom of the ZDW232 switch once, the Z-Wave devices that are associated into Group\n1 are sent the Dim command. If parameter 6 is set to 0, after you release the switch, the ZDW232 will command\ndevices in that group to go to the same level of the ZDW232. If parameter 6 is set to a value of 1 (factory default)\nthe devices in Group 1 will not go to the same level of the ZDW232.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "byte",
            index: "7",
            genre: "config",
            label: "On/Off Command Dim Step",
            units: "",
            min: "1",
            max: "99",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            type: "byte",
            index: "8",
            genre: "config",
            label: "On/Off Command Dim Rate",
            units: "x 10 milliseconds",
            min: "1",
            max: "255",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            type: "byte",
            index: "9",
            genre: "config",
            label: "Local Control Dim Step",
            units: "",
            min: "1",
            max: "99",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            type: "byte",
            index: "10",
            genre: "config",
            label: "Local Control Dim Rate",
            units: "x 10 milliseconds",
            min: "1",
            max: "255",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            type: "byte",
            index: "11",
            genre: "config",
            label: "ALL ON/ALL OFF Dim Step",
            units: "",
            min: "1",
            max: "99",
            value: "1",
            Help:
              "Indicates how many levels the dimmer will change for each dimming step.",
          },
          {
            type: "byte",
            index: "12",
            genre: "config",
            label: "ALL ON/ALL OFF Dim Rate",
            units: "x 10 milliseconds",
            min: "1",
            max: "255",
            value: "3",
            Help:
              "This value indicates in 10 millisecond resolution, how often the dim level will change. For example, if you set this parameter to 1, then every 10ms the dim level will change. If you set it to 255, then every 2.55 seconds the dim level will change.",
          },
          {
            type: "list",
            index: "13",
            genre: "config",
            label: "Disable Group 4 During Dim",
            size: "1",
            Help:
              "After the ZDW232 is commanded to stop dimming, it will then command the Z-Wave devices in Group 4 to the\nZDW232's new level. To prevent the ZDW232 from commanding the Z-Wave devices in Group 4 during this particular\noccurrence, set Parameter 13 to the value of 1.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "14",
            genre: "config",
            label: "Enable Shade Control Group 2",
            size: "1",
            value: "0",
            Help:
              "The ZDW232 can operate shade control devices via its group 2 if this configuration parameter is set to 1.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "15",
            genre: "config",
            label: "Enable Shade Control Group 3",
            size: "1",
            value: "0",
            Help:
              "The ZDW232 can operate shade control devices via its group 3 if this configuration parameter is set to 1.",
            Item: [
              { label: "No", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "19",
            genre: "config",
            label: "LED Transmission Indication",
            size: "1",
            value: "2",
            Help:
              "The ZDW232 will flicker its LED when it is transmitting to any of its 4 groups. This flickering can be set to not flicker at all, to flicker the entire time it is transmitting, or to flicker for only 1 second when it begins transmitting.",
            Item: [
              { label: "None", value: "0" },
              { label: "While Transmitting", value: "1" },
              { label: "One Second Maximum", value: "2" },
            ],
          },
          {
            type: "byte",
            index: "20",
            genre: "config",
            label: "Poll Group 2 Interval",
            units: "minutes",
            min: "1",
            max: "255",
            value: "2",
            Help: "Poll Group 2 Interval",
          },
          {
            type: "list",
            index: "22",
            genre: "config",
            label: "Enable Group 2 Polling",
            size: "1",
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
              {
                index: "1",
                max_associations: "5",
                label: "One tap / Local load control",
              },
              {
                index: "2",
                max_associations: "5",
                label: "Two taps (Dimmers: One tap, then hold to dim)",
              },
              {
                index: "3",
                max_associations: "5",
                label: "Three taps (Dimmers: Two taps, then hold to dim)",
              },
              {
                index: "4",
                max_associations: "5",
                label: "Update Controller",
                auto: "true",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
