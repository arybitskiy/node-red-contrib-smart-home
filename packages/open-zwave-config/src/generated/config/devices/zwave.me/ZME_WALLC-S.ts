import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            index: "1",
            genre: "config",
            label: "Button 1 and 3 pair mode",
            units: "",
            min: "0",
            max: "2",
            size: "1",
            value: "1",
            Help:
              "In separate mode button 1 works with group A, button 3 with groups C. Click is On, Hold is dimming Up, Double click is Off, Click-Hold is dimming Down. In pair button 1/3 are Up/Down correspondingly. Click is On/Off, Hold is dimming Up/Down. Single clicks works with group A, double click with group C.",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In pair without double clicks (Default)", value: "1" },
              { label: "In pair with double clicks", value: "2" },
            ],
          },
          {
            type: "list",
            index: "2",
            genre: "config",
            label: "Button 2 and 4 pair mode",
            units: "",
            min: "0",
            max: "2",
            size: "1",
            value: "1",
            Help:
              "In separate mode button 2 works with control group B, button 4 with control group D. Click is On, Hold is dimming Up, Double click is Off, Click-Hold is dimming Down. In pair button B/D are Up/Down correspondingly. Click is On/Off, Hold is dimming Up/Down. Single clicks works with group B, double click with group D.",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In pair without double clicks (Default)", value: "1" },
              { label: "In pair with double clicks", value: "2" },
            ],
          },
          {
            type: "list",
            index: "11",
            genre: "config",
            label: "Command to Control Group A",
            units: "",
            min: "0",
            max: "8",
            size: "1",
            value: "8",
            Help:
              "This parameter defines the command to be sent to devices of control group A when the related button is pressed",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            type: "list",
            index: "12",
            genre: "config",
            label: "Command to Control Group B",
            units: "",
            min: "0",
            max: "8",
            size: "1",
            value: "8",
            Help:
              "This parameter defines the command to be sent to devices of control group B when the related button is pressed",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            type: "list",
            index: "13",
            genre: "config",
            label: "Command to Control Group C",
            units: "",
            min: "0",
            max: "8",
            size: "1",
            value: "8",
            Help:
              "This parameter defines the command to be sent to devices of control group C when the related button is pressed",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            type: "list",
            index: "14",
            genre: "config",
            label: "Command to Control Group D",
            units: "",
            min: "0",
            max: "8",
            size: "1",
            value: "8",
            Help:
              "This parameter defines the command to be sent to devices of control group D when the related button is pressed",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dim (send Basic Set and Switch Multilevel)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
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
            size: "1",
            Item: [
              { label: "Switch off only (Default)", value: "1" },
              { label: "Switch on only", value: "2" },
              { label: "Switch all on and off", value: "255" },
            ],
          },
          {
            type: "list",
            index: "22",
            genre: "config",
            label: "Invert buttons",
            units: "",
            min: "0",
            max: "1",
            size: "1",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            type: "list",
            index: "25",
            genre: "config",
            label: "Blocks wakeup even when wakeup interval is set",
            units: "",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Help:
              "If the KFOB wakes up and there is no controller nearby, several unsuccessful communication attempts will drain battery",
            Item: [
              { label: "Wakeup is blocked", value: "0" },
              {
                label:
                  "Wakeup is possible if configured accordingly. (Default)",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "30",
            genre: "config",
            label: "Send unsolicited Battery Report on Wake Up",
            units: "",
            min: "0",
            max: "1",
            size: "1",
            value: "1",
            Item: [
              { label: "No", value: "0" },
              {
                label: "To same node as wake up notification (Default)",
                value: "1",
              },
              { label: "Broadcast to neighbours", value: "2" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", max_associations: "10", label: "Life line" },
              { index: "2", max_associations: "10", label: "Group A" },
              { index: "3", max_associations: "10", label: "Group B" },
              { index: "4", max_associations: "10", label: "Group C" },
              { index: "5", max_associations: "10", label: "Group D" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
