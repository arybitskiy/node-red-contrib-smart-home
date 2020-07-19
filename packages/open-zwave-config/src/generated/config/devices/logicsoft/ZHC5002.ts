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
            index: "1",
            genre: "config",
            label: "Upper paddle buttons mode",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Configuration of Pair Mode for the upper two buttons (Button #1 and #2)",
            Item: [
              { label: "Separately (Default)", value: "0" },
              {
                label:
                  "In pair mode, left side sends on/up commands, right side sends off/down commands",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "2",
            genre: "config",
            label: "Middle paddle buttons mode",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Configuration of Pair Mode for the middle two buttons (Button #3 and #4)",
            Item: [
              { label: "Separately (Default)", value: "0" },
              {
                label:
                  "In pair mode, left side sends on/up commands, right side sends off/down commands",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "3",
            genre: "config",
            label: "Lower paddle buttons mode",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Configuration of Pair Mode for the lower two buttons (Button #5 and #6)",
            Item: [
              { label: "Separately (Default)", value: "0" },
              {
                label:
                  "In pair mode, left side sends on/up commands, right side sends off/down commands",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "4",
            genre: "config",
            label: "LED #1 mode",
            min: "0",
            max: "7",
            value: "1",
            size: "1",
            Help: "Configuration of the internal operation of LED #1",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can ce controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label:
                  "LED indicates the status of the corresponding button (Default)",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
            ],
          },
          {
            type: "list",
            index: "5",
            genre: "config",
            label: "LED #2 mode",
            min: "0",
            max: "7",
            value: "1",
            size: "1",
            Help: "Configuration of the internal operation of LED #2",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can ce controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label:
                  "LED indicates the status of the corresponding button (Default)",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
            ],
          },
          {
            type: "list",
            index: "6",
            genre: "config",
            label: "LED #3 mode",
            min: "0",
            max: "7",
            value: "1",
            size: "1",
            Help: "Configuration of the internal operation of LED #3",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can ce controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label:
                  "LED indicates the status of the corresponding button (Default)",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
            ],
          },
          {
            type: "list",
            index: "7",
            genre: "config",
            label: "LED #4 mode",
            min: "0",
            max: "7",
            value: "1",
            size: "1",
            Help: "Configuration of the internal operation of LED #4",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can ce controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label:
                  "LED indicates the status of the corresponding button (Default)",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
            ],
          },
          {
            type: "list",
            index: "8",
            genre: "config",
            label: "LED #5 mode",
            min: "0",
            max: "7",
            value: "1",
            size: "1",
            Help: "Configuration of the internal operation of LED #5",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can ce controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label:
                  "LED indicates the status of the corresponding button (Default)",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
            ],
          },
          {
            type: "list",
            index: "9",
            genre: "config",
            label: "LED #6 mode",
            min: "0",
            max: "7",
            value: "1",
            size: "1",
            Help: "Configuration of the internal operation of LED #6",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can ce controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label:
                  "LED indicates the status of the corresponding button (Default)",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
            ],
          },
          {
            type: "list",
            index: "10",
            genre: "config",
            label: "Relay mode",
            min: "0",
            max: "7",
            value: "1",
            size: "1",
            Help:
              "This parameter configures which of the buttons that shall control the built-in relay, or if the relay only will be activated for one second, each time button #1 is used",
            Item: [
              { label: "Relay is disabled", value: "0" },
              {
                label:
                  "Relay is controlled by button #1 or by upper paddle when pair mode is active (Default)",
                value: "1",
              },
              {
                label:
                  "Relay is controlled by button #2 or by upper paddle when pair mode is active",
                value: "2",
              },
              {
                label:
                  "Relay is controlled by button #3 or by middle paddle when pair mode is active",
                value: "3",
              },
              {
                label:
                  "Relay is controlled by button #4 or by middle paddle when pair mode is active",
                value: "4",
              },
              {
                label:
                  "Relay is controlled by button #5 or by lower paddle when pair mode is active",
                value: "5",
              },
              {
                label:
                  "Relay is controlled by button #6 or by lower paddle when pair mode is active",
                value: "6",
              },
              {
                label:
                  "Relay is activated for one second and is controlled by button #1 or by upper paddle when pair mode is active",
                value: "7",
              },
            ],
          },
          {
            type: "list",
            index: "11",
            genre: "config",
            label: "Disable Central Scene notification",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Disables or enables the sending of Central Scene notifications",
            Item: [
              {
                label: "Central Scene notifications are enabled (Default)",
                value: "0",
              },
              { label: "Central Scene notifications are disabled", value: "1" },
            ],
          },
          {
            type: "list",
            index: "12",
            genre: "config",
            label: "Disable House Cleaning Mode",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Disables or enables that a double-press on a button wil send a command to activate 100% light",
            Item: [
              { label: "House Cleaning Mode is enabled (Default)", value: "0" },
              {
                label:
                  "House Cleaning Mode is disabled; double-press button scene notifications will be disabled too",
                value: "1",
              },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "13",
            label: "Multilevel Switch on single press for device 1 (button #1)",
            value: "33488896",
            size: "4",
            Help:
              "\n\t\t\tByte 1: Enable / Disable 0 = Disabled - When single pressing the button, nodes associated to group 6 wont be switched. 1 = Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default) \n\t\t\tByte 2: Upper switch value: 0 - 99, 255; When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255) \n\t\t\tByte 3: Lower switch value: 0 - 99; When single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0) \n\t\t\tByte 4: Not used - must be set to 0.\n\t\t\t",
          },
          {
            type: "int",
            genre: "config",
            index: "14",
            label: "Multilevel Switch on single press for device 2 (button #2)",
            value: "33488896",
            size: "4",
            Help:
              "\n\t\t\tByte 1: Enable / Disable 0 = Disabled - When single pressing the button, nodes associated to group 6 wont be switched. 1 = Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default) \n\t\t\tByte 2: Upper switch value: 0 - 99, 255; When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255) \n\t\t\tByte 3: Lower switch value: 0 - 99; When single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0) \n\t\t\tByte 4: Not used - must be set to 0.\n\t\t\t",
          },
          {
            type: "int",
            genre: "config",
            index: "15",
            label: "Multilevel Switch on single press for device 3 (button #3)",
            value: "33488896",
            size: "4",
            Help:
              "\n\t\t\tByte 1: Enable / Disable 0 = Disabled - When single pressing the button, nodes associated to group 6 wont be switched. 1 = Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default) \n\t\t\tByte 2: Upper switch value: 0 - 99, 255; When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255) \n\t\t\tByte 3: Lower switch value: 0 - 99; When single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0) \n\t\t\tByte 4: Not used - must be set to 0.\n\t\t\t",
          },
          {
            type: "int",
            genre: "config",
            index: "16",
            label: "Multilevel Switch on single press for device 4 (button #4)",
            value: "33488896",
            size: "4",
            Help:
              "\n\t\t\tByte 1: Enable / Disable 0 = Disabled - When single pressing the button, nodes associated to group 6 wont be switched. 1 = Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default) \n\t\t\tByte 2: Upper switch value: 0 - 99, 255; When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255) \n\t\t\tByte 3: Lower switch value: 0 - 99; When single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0) \n\t\t\tByte 4: Not used - must be set to 0.\n\t\t\t",
          },
          {
            type: "int",
            genre: "config",
            index: "17",
            label: "Multilevel Switch on single press for device 5 (button #5)",
            value: "33488896",
            size: "4",
            Help:
              "\n\t\t\tByte 1: Enable / Disable 0 = Disabled - When single pressing the button, nodes associated to group 6 wont be switched. 1 = Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default) \n\t\t\tByte 2: Upper switch value: 0 - 99, 255; When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255) \n\t\t\tByte 3: Lower switch value: 0 - 99; When single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0) \n\t\t\tByte 4: Not used - must be set to 0.\n\t\t\t",
          },
          {
            type: "int",
            genre: "config",
            index: "18",
            label: "Multilevel Switch on single press for device 6 (button #6)",
            value: "33488896",
            size: "4",
            Help:
              "\n\t\t\tByte 1: Enable / Disable 0 = Disabled - When single pressing the button, nodes associated to group 6 wont be switched. 1 = Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default) \n\t\t\tByte 2: Upper switch value: 0 - 99, 255; When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255) \n\t\t\tByte 3: Lower switch value: 0 - 99; When single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0) \n\t\t\tByte 4: Not used - must be set to 0.\n\t\t\t",
          },
          {
            type: "list",
            index: "19",
            genre: "config",
            label: "Controll of assosiation groups for device 1 (button#1)",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the assosiation groups",
            Item: [
              {
                label:
                  "When commands are received by device 1, nodes in the association groups will not be switched, button activation will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by device 1, nodes in the association groups will be switched. (Default)",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "20",
            genre: "config",
            label: "Controll of assosiation groups for device 2 (button#2)",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the assosiation groups",
            Item: [
              {
                label:
                  "When commands are received by device 2, nodes in the association groups will not be switched, button activation will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by device 2, nodes in the association groups will be switched. (Default)",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "21",
            genre: "config",
            label: "Controll of assosiation groups for device 3 (button#3)",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the assosiation groups",
            Item: [
              {
                label:
                  "When commands are received by device 3, nodes in the association groups will not be switched, button activation will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by device 3, nodes in the association groups will be switched. (Default)",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "22",
            genre: "config",
            label: "Controll of assosiation groups for device 4 (button#4)",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the assosiation groups",
            Item: [
              {
                label:
                  "When commands are received by device 4, nodes in the association groups will not be switched, button activation will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by device 4, nodes in the association groups will be switched. (Default)",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "23",
            genre: "config",
            label: "Controll of assosiation groups for device 5 (button#5)",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the assosiation groups",
            Item: [
              {
                label:
                  "When commands are received by device 5, nodes in the association groups will not be switched, button activation will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by device 5, nodes in the association groups will be switched. (Default)",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "24",
            genre: "config",
            label: "Controll of assosiation groups for device 6 (button#6)",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the assosiation groups",
            Item: [
              {
                label:
                  "When commands are received by device 6, nodes in the association groups will not be switched, button activation will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by device 6, nodes in the association groups will be switched. (Default)",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "25",
            genre: "config",
            label: "Backlight control",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help: "Configuration of backlight control",
            Item: [
              {
                label:
                  "Backlight is only controlled by Indicator Command Class - commands send to endpoint 0",
                value: "0",
              },
              {
                label:
                  "Backlight is turned on for 5 seconds when a button is pressed. (Default)",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            index: "26",
            genre: "config",
            label: "Basic Set for endpoint 0",
            min: "0",
            max: "1",
            value: "0",
            size: "1",
            Help:
              "Enable or disable that Basic Set commands to the root device will be able to control the backlight",
            Item: [
              {
                label:
                  "Basic Set commands to endpoint 0 is forwarded to endpoint 1 (Default)",
                value: "0",
              },
              {
                label:
                  "Basic Set commands to endpoint 0 controls backlight (on/off)",
                value: "1",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "31",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline." },
              {
                index: "2",
                max_associations: "5",
                label: "Basic Report (On/Off), button #1",
                auto: "true",
              },
              {
                index: "3",
                max_associations: "5",
                label: "Basic Set (On/Off), button #1",
                auto: "true",
              },
              {
                index: "4",
                max_associations: "5",
                label: "Binary Switch Set (On/Off), button #1",
                auto: "true",
              },
              {
                index: "5",
                max_associations: "5",
                label: "Binary Toggle Switch, button #1",
                auto: "true",
              },
              {
                index: "6",
                max_associations: "5",
                label: "Multilevel Switch, button #1",
                auto: "true",
              },
              {
                index: "7",
                max_associations: "5",
                label: "Basic Report (On/Off), button #2",
                auto: "true",
              },
              {
                index: "8",
                max_associations: "5",
                label: "Basic Set (On/Off), button #2",
                auto: "true",
              },
              {
                index: "9",
                max_associations: "5",
                label: "Binary Switch Set (On/Off),button #2",
                auto: "true",
              },
              {
                index: "10",
                max_associations: "5",
                label: "Binary Toggle Switch, button #2",
                auto: "true",
              },
              {
                index: "11",
                max_associations: "5",
                label: "Multilevel Switch, button #2",
                auto: "true",
              },
              {
                index: "12",
                max_associations: "5",
                label: "Basic Report (On/Off), button #3",
                auto: "true",
              },
              {
                index: "13",
                max_associations: "5",
                label: "Basic Set (On/Off), button #3",
                auto: "true",
              },
              {
                index: "14",
                max_associations: "5",
                label: "Binary Switch Set (On/Off), button #3",
                auto: "true",
              },
              {
                index: "15",
                max_associations: "5",
                label: "Toggle Switch, button #3",
                auto: "true",
              },
              {
                index: "16",
                max_associations: "5",
                label: "Multilevel Switch, button #3",
                auto: "true",
              },
              {
                index: "17",
                max_associations: "5",
                label: "Basic Report (On/Off), button #4",
                auto: "true",
              },
              {
                index: "18",
                max_associations: "5",
                label: "Basic Set (On/Off), button #4",
                auto: "true",
              },
              {
                index: "19",
                max_associations: "5",
                label: "Binary Switch Set (On/Off), button #4",
                auto: "true",
              },
              {
                index: "20",
                max_associations: "5",
                label: "Binary Toggle Switch, button #4",
                auto: "true",
              },
              {
                index: "21",
                max_associations: "5",
                label: "Multilevel Switch, button #4",
                auto: "true",
              },
              {
                index: "22",
                max_associations: "5",
                label: "Basic Report (On/Off), button #5",
                auto: "true",
              },
              {
                index: "23",
                max_associations: "5",
                label: "Basic Set (On/Off), button #5",
                auto: "true",
              },
              {
                index: "24",
                max_associations: "5",
                label: "Binary Switch Set (On/Off), button #5",
                auto: "true",
              },
              {
                index: "25",
                max_associations: "5",
                label: "Binary Toggle Switch, button #5",
                auto: "true",
              },
              {
                index: "26",
                max_associations: "5",
                label: "Multilevel Switch, button #5",
                auto: "true",
              },
              {
                index: "27",
                max_associations: "5",
                label: "Basic Report (On/Off), button #6",
                auto: "true",
              },
              {
                index: "28",
                max_associations: "5",
                label: "Basic Set (On/Off), button #6",
                auto: "true",
              },
              {
                index: "29",
                max_associations: "5",
                label: "Binary Switch Set (On/Off), button #6",
                auto: "true",
              },
              {
                index: "30",
                max_associations: "5",
                label: "Binary Toggle Switch, button #6",
                auto: "true",
              },
              {
                index: "31",
                max_associations: "5",
                label: "Multilevel Switch, button #6",
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
