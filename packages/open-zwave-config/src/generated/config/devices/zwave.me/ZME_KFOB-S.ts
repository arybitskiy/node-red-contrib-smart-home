import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Button 1 and 3 pair mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "In separate mode button 1 works with group A, button 3 with groups C. \n\t\t\t\tClick is On, Hold is dimming Up, Double click is Off, Click-Hold is dimming Down. \n\t\t\t\tIn pair button 1/3 are Up/Down correspondingly. Click is On/Off, Hold is dimming Up/Down. Single clicks works with group A, double click with group C.",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In pair without double clicks (default)", value: "1" },
              { label: "In pair with double clicks", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Button 2 and 4 pair mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "In separate mode button 2 works with group B, button 4 with groups D. \n\t\t\t\tClick is On, Hold is dimming Up, Double click is Off, Click-Hold is dimming Down. \n\t\t\t\tIn pair button 2/4 are Up/Down correspondingly. Click is On/Off, Hold is dimming Up/Down. Single clicks works with group B, double click with group D.",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In pair without double clicks (default)", value: "1" },
              { label: "In pair with double clicks", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "Command to Control Group A",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            units: "",
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
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control devices in proximity", value: "6" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Command to Control Group B",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            units: "",
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
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control devices in proximity", value: "6" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "13",
            label: "Command to Control Group C",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            units: "",
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
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control devices in proximity", value: "6" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Command to Control Group D",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            units: "",
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
              { label: "Send Scene", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
              { label: "Control devices in proximity", value: "6" },
              { label: "Control DoorLock", value: "7" },
              { label: "Central Scene to Gateway (Default)", value: "8" },
            ],
          },
          {
            genre: "config",
            index: "21",
            label: "Send the following Switch All commands",
            max: "255",
            min: "1",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "Send the following Switch All ON/OFF commands",
            Item: [
              { label: "Switch Off only (default)", value: "1" },
              { label: "Switch On only", value: "2" },
              { label: "Switch On and Off", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "22",
            label: "Invert buttons",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "Invert meaning of On/Dim up and Off/Dim down in pairs of buttons. This applies only to pairs in grouped mode. Buttons 1 and 2 will become Off/Dim down, buttons 3 and 4 On/Dim up.",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "25",
            label: "Blocks wake up even when wake up interval is set",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "If the KFOB wakes up and there is no controller nearby, several unsuccessful communication attempts will drain battery",
            Item: [
              { label: "Wakeup is blocked (default)", value: "0" },
              {
                label: "Wakeup is possible if configured accordingly",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "Send unsolicited Battery Report on Wake Up",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "",
            Item: [
              { label: "No", value: "0" },
              {
                label: "To same node as wake up notification (Default)",
                value: "1",
              },
              { label: "Broadcast to neighbors", value: "2" },
            ],
          },
        ],
      },
      { action: "add", id: "43", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "10" },
              {
                index: "2",
                label:
                  "Control Group A, controlled by button 1 or single clicks of buttons 1 and 3",
                max_associations: "10",
              },
              {
                index: "3",
                label:
                  "Control Group B, controlled by button 2 or single clicks of buttons 2 and 4",
                max_associations: "10",
              },
              {
                index: "4",
                label:
                  "Control Group C, controlled by button 3 or single clicks of buttons 1 and 3",
                max_associations: "10",
              },
              {
                index: "5",
                label:
                  "Control Group D, controlled by button 4 or single clicks of buttons 2 and 4",
                max_associations: "10",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
