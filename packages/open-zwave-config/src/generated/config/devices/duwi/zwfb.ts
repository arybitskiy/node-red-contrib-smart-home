import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "10",
            genre: "config",
            label: "Command to Control Group No1 (association group 2)",
            units: "",
            min: "0",
            max: "5",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control group No1 when the related button is pressed (association group 2)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "11",
            genre: "config",
            label: "Command to Control Group No2 (association group 3)",
            units: "",
            min: "0",
            max: "5",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control group No2 when the related button is pressed (association group 3)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "12",
            genre: "config",
            label: "Command to Control Group No3 (association group 4)",
            units: "",
            min: "0",
            max: "5",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control group No3 when the related button is pressed (association group 4)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "13",
            genre: "config",
            label: "Command to Control Group No4 (association group 5)",
            units: "",
            min: "0",
            max: "5",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control group No4 when the related button is pressed (association group 5)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "14",
            genre: "config",
            label: "Command to Control Group No5 (association group 6)",
            units: "",
            min: "0",
            max: "5",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control group No5 when the related button is pressed (association group 6)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "15",
            genre: "config",
            label: "Command to Control Group No6 (association group 7)",
            units: "",
            min: "0",
            max: "5",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control group No6 when the related button is pressed (association group 7)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "16",
            genre: "config",
            label: "Command to Control Group No7 (association group 8)",
            units: "",
            min: "0",
            max: "5",
            value: "1",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control group No7 when the related button is pressed (association group 8)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel) (default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "17",
            genre: "config",
            label: "Command to Control Scene No1 (association group 9)",
            units: "",
            min: "0",
            max: "6",
            value: "4",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control scene group No1 when the related button is pressed (association group 9)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene (default)", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "18",
            genre: "config",
            label: "Command to Control Scene No2 (association group 10)",
            units: "",
            min: "0",
            max: "6",
            value: "4",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control scene group No2 when the related button is pressed (association group 10)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene (default)", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "19",
            genre: "config",
            label: "Command to Control Scene No3 (association group 11)",
            units: "",
            min: "0",
            max: "6",
            value: "4",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control scene group No3 when the related button is pressed (association group 11)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scene (default)", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "20",
            genre: "config",
            label: "Command to Control group All On/Off (association group 12)",
            units: "",
            min: "0",
            max: "6",
            value: "3",
            size: "1",
            Help:
              "This parameter defines the command to be sent to devices of control group All On/Off when the related button is pressed (association group 12)",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All (default)", value: "3" },
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            type: "list",
            index: "21",
            genre: "config",
            label: "Send the following Switch All commands",
            units: "",
            min: "1",
            max: "255",
            value: "1",
            size: "1",
            Help: "Send the following Switch All ON/OFF commands",
            Item: [
              { label: "Switch Off only (default)", value: "1" },
              { label: "Switch On only", value: "2" },
              { label: "Switch On and Off", value: "255" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "12",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              {
                index: "2",
                max_associations: "5",
                label: "The buttons of group No1",
              },
              {
                index: "3",
                max_associations: "5",
                label: "The buttons of group No2",
              },
              {
                index: "4",
                max_associations: "5",
                label: "The buttons of group No3",
              },
              {
                index: "5",
                max_associations: "5",
                label: "The buttons of group No4",
              },
              {
                index: "6",
                max_associations: "5",
                label: "The buttons of group No5",
              },
              {
                index: "7",
                max_associations: "5",
                label: "The buttons of group No6",
              },
              {
                index: "8",
                max_associations: "5",
                label: "The buttons of group No7",
              },
              {
                index: "9",
                max_associations: "5",
                label: "The buttons of scene No1",
              },
              {
                index: "10",
                max_associations: "5",
                label: "The buttons of scene No2",
              },
              {
                index: "11",
                max_associations: "5",
                label: "The buttons of scene No3",
              },
              {
                index: "12",
                max_associations: "5",
                label: "The buttons of All On/Off",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
