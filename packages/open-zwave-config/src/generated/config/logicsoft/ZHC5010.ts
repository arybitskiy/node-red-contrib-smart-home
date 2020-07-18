import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 6,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0234:010A:0003",
            name: "OzwInfoPage",
          },
          { text: "images/logicsoft/ZHC5010.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1779/",
            id: "010A",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Wall Switch", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "010A",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "ZHC5010 can be factory reset by pressing the small button in the middle of the module (normally covered by small plastic cover) for at least 10 seconds. Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1779/ZHC5010-Manual-EN-Rev11.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Pushing the upper left button 3 times, (triple click) will activate Inclusion Mode on the device. It is also possible to activate Inclusion Mode by triple clicking the switch in the middle of the module (normally covered by the middle plastic cover, this can be removed by means of a little screwdriver).",
            name: "InclusionDescription",
          },
          {
            text:
              "Pushing the upper left button 3 times, (triple click) will activate Exclusion Mode on the device. It is also possible to activate Exclusion Mode by triple clicking the switch in the middle of the module (normally covered by the middle plastic cover, this can be removed by means of a little screwdriver).",
            name: "ExclusionDescription",
          },
          { text: "ZHC5010", id: "010A", name: "Identifier", type: "0003" },
          {
            text:
              "ZHC5010 is a wall switch module with four buttons, four LEDs, a built-in relay switch and is designed to fit into standard Danish LK FUGA® wall boxes.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1779/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 6,
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
            instance: "1",
            label: "Upper paddle buttons mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Configuration of Pair Mode for the upper two buttons (button #1 and #2).",
            Item: [
              { label: "Toggle mode", value: "0" },
              { label: "In pair mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Lower paddle buttons mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Configuration of Pair Mode for the lower two buttons (button #3 and #4).",
            Item: [
              { label: "Toggle mode", value: "0" },
              { label: "In pair mode", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "LED #1 mode",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "LED #1 indicates the status mode.",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can be controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label: "LED indicates the status of the corresponding button",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built-in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built-in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
              {
                label:
                  "LED indication is disabled, it is only controlled by Command Class Basic Set commands",
                value: "8",
              },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "LED #2 mode",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "LED #2 indicates the status mode.",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can be controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label: "LED indicates the status of the corresponding button",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built-in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built-in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
              {
                label:
                  "LED indication is disabled, it is only controlled by Command Class Basic Set commands",
                value: "8",
              },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "LED #3 mode",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "LED #3 indicates the status mode.",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can be controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label: "LED indicates the status of the corresponding button",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built-in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built-in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
              {
                label:
                  "LED indication is disabled, it is only controlled by Command Class Basic Set commands",
                value: "8",
              },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "LED #4 mode",
            max: "8",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "LED #4 indicates the status mode.",
            Item: [
              {
                label:
                  "LED indication is disabled (LED can be controlled by Indicator Command Class Set commands)",
                value: "0",
              },
              {
                label: "LED indicates the status of the corresponding button",
                value: "1",
              },
              {
                label:
                  "LED indicates the status of the corresponding button, with inverted indication",
                value: "2",
              },
              {
                label:
                  "LED indicates the status of corresponding paddle (in pair mode)",
                value: "3",
              },
              {
                label:
                  "LED indicates the status of the corresponding paddle (in pair mode), with inverted indication",
                value: "4",
              },
              {
                label: "LED indicates the status of the built-in relay",
                value: "5",
              },
              {
                label:
                  "LED indicates the status of the built-in relay, with inverted indication",
                value: "6",
              },
              {
                label:
                  "LED show a 5 seconds indication when the corresponding button is pressed",
                value: "7",
              },
              {
                label:
                  "LED indication is disabled, it is only controlled by Command Class Basic Set commands",
                value: "8",
              },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "LED #1 brightness level",
            max: "100",
            min: "0",
            type: "byte",
            value: "50",
            Help:
              "0 - 100 Specifies the brightness level of the LED when it is on.",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "LED #2 brightness level",
            max: "100",
            min: "0",
            type: "byte",
            value: "50",
            Help:
              "0 - 100 Specifies the brightness level of the LED when it is on.",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "LED #3 brightness level",
            max: "100",
            min: "0",
            type: "byte",
            value: "50",
            Help:
              "0 - 100 Specifies the brightness level of the LED when it is on.",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "LED #4 brightness level",
            max: "100",
            min: "0",
            type: "byte",
            value: "50",
            Help:
              "0 - 100 Specifies the brightness level of the LED when it is on.",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "LED #1 off brightness level",
            max: "100",
            min: "0",
            type: "byte",
            value: "00",
            Help:
              "0 - 100 Specifies the brightness level of the LED when it is off.",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "LED #2 off brightness level",
            max: "100",
            min: "0",
            type: "byte",
            value: "00",
            Help:
              "0 - 100 Specifies the brightness level of the LED when it is off.",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "LED #3 off brightness level",
            max: "100",
            min: "0",
            type: "byte",
            value: "00",
            Help:
              "0 - 100 Specifies the brightness level of the LED when it is off.",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "LED #4 off brightness level",
            max: "100",
            min: "0",
            type: "byte",
            value: "00",
            Help:
              "0 - 100 Specifies the brightness level of the LED when it is off.",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Relay mode",
            max: "13",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter configures which of the buttons that shall control the built-in relay, or if the relay only will be activated for one second, each time button #1 is used.",
            Item: [
              { label: "Relay is disabled", value: "0" },
              {
                label:
                  "Relay is controlled by button #1 or by upper paddle when pair mode is active",
                value: "1",
              },
              {
                label:
                  "Relay is controlled by button #2 or by upper paddle when pair mode is active",
                value: "2",
              },
              {
                label:
                  "Relay is controlled by button #3 or by lower paddle when pair mode is active",
                value: "3",
              },
              {
                label:
                  "Relay is controlled by button #4 or by lower paddle when pair mode is active",
                value: "4",
              },
              {
                label:
                  "Relay is activated for half a second and is controlled by button #1 or by upper paddle when pair mode is active",
                value: "5",
              },
              {
                label:
                  "Relay is activated for half a second and is controlled by button #2 or by upper paddle when pair mode is active",
                value: "6",
              },
              {
                label:
                  "Relay is activated for half a second and is controlled by button #3 or by lower paddle when pair mode is active",
                value: "7",
              },
              {
                label:
                  "Relay is activated for half a second and is controlled by button #4 or by lower paddle when pair mode is active",
                value: "8",
              },
              {
                label:
                  "Relay follows the state of button #1; when button is down the relay is on and when button is released the relay is off",
                value: "9",
              },
              {
                label:
                  "Relay follows the state of button #2; when button is down the relay is on and when button is released the relay is off",
                value: "10",
              },
              {
                label:
                  "Relay follows the state of button #3; when button is down the relay is on and when button is released the relay is off",
                value: "11",
              },
              {
                label:
                  "Relay follows the state of button #4; when button is down the relay is on and when button is released the relay is off",
                value: "12",
              },
              {
                label:
                  "Relay is only controlled by commands sent to the root device (instance 0). Commands to the root device will not be forwarded to instance 1",
                value: "13",
              },
            ],
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Indicator mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "When ZHC5010 receives an Indicator Set message, then the received value can be used only to set the current light level for the actual LED or the level value can be stored and will then be used for subsequent internal activations.",
            Item: [
              { label: "Only used to control the LED", value: "0" },
              { label: "Also used by internal LED activations", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label: "Scene notification offset",
            max: "200",
            min: "0",
            type: "byte",
            value: "1",
            Help:
              "\n\t\t\t0     : Scene notifications are turned off.\n\t\t\t1-200 : Button #1 will send scene [value], button #2 will send scene [value] + 1, button #3 will send scene [value] + 2, button #4 will send scene [value] + 3\n\t\t\t",
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "House Cleaning Mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              'This parameter is able to enable or disable the so-called "House Cleaning Mode", where ZHC5010 is able send a dimming command in order to set the level of the lights to 100%.',
            Item: [
              { label: "Enabled", value: "0" },
              { label: "Disabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "Multilevel Switch on single press for button 1",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "\n\t\t\tByte 1: Enable / Disable\n\t\t\t\t0: Disabled - When single pressing the button, nodes associated to group 6 won't be switched\n\t\t\t\t1: Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default)\n\t\t\tByte 2: Upper Switch Value\n\t\t\t\t0 - 99, 255 When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255)\n\t\t\tByte 3: Lower Switch Value\n\t\t\t\tWhen single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0)\n\t\t\tByte 4: Not used - must be set to 0.\n\t\t\tDefault: 33488896\n\t\t\t",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Multilevel Switch on single press for button 2",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "\n\t\t\t\tByte 1: Enable / Disable\n\t\t\t\t\t\t0: Disabled - When single pressing the button, nodes associated to group 6 won't be switched\n\t\t\t\t\t\t1: Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default)\n\t\t\t\tByte 2: Upper Switch Value\n\t\t\t\t\t\t0 - 99, 255 When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255)\n\t\t\t\tByte 3: Lower Switch Value\n\t\t\t\t\t\tWhen single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0)\n\t\t\t\tByte 4: Not used - must be set to 0.\n\t\t\t\tDefault: 33488896\n\t\t\t",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Multilevel Switch on single press for button 3",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "\n\t\t\t\tByte 1: Enable / Disable\n\t\t\t\t\t\t0: Disabled - When single pressing the button, nodes associated to group 6 won't be switched\n\t\t\t\t\t\t1: Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default)\n\t\t\t\tByte 2: Upper Switch Value\n\t\t\t\t\t\t0 - 99, 255 When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255)\n\t\t\t\tByte 3: Lower Switch Value\n\t\t\t\t\t\tWhen single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0)\n\t\t\t\tByte 4: Not used - must be set to 0.\n\t\t\t\tDefault: 33488896\n\t\t\t",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Multilevel Switch on single press for button 4",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "\n\t\t\tByte 1: Enable / Disable\n\t\t\t\t\t0: Disabled - When single pressing the button, nodes associated to group 6 won't be switched\n\t\t\t\t\t1: Enabled - When single pressing the button, nodes associated to group 6 will be switched between the configured upper and lower switch values. (Default)\n\t\t\tByte 2: Upper Switch Value\n\t\t\t\t\t0 - 99, 255 When single pressing the button for ON, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 255)\n\t\t\tByte 3: Lower Switch Value\n\t\t\t\t\tWhen single pressing the button for OFF, a Multilevel Switch Set with this value will be send to devices in association group 6. (Default = 0)\n\t\t\tByte 4: Not used - must be set to 0.\n\t\t\t\tDefault: 33488896\n\t\t\t",
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label: "Control of association groups for button 1",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the association groups received by device 1.",
            Item: [
              {
                label:
                  "When commands are received by device 1, nodes in the association groups will not be switched, button activations will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by deivce 1, nodes in the association groups will be switched",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Control of association groups for button 2",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the association groups received by device 2.",
            Item: [
              {
                label:
                  "When commands are received by device 2, nodes in the association groups will not be switched, button activations will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by device 2, nodes in the association groups will be switched",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label: "Control of association groups for button 3",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the association groups received by device 3.",
            Item: [
              {
                label:
                  "When commands are received by device 3, nodes in the association groups will not be switched, button activations will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by device 3, nodes in the association groups will be switched",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "26",
            instance: "1",
            label: "Control of association groups for button 4",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable or disable if received commands are relayed to the nodes in the association groups received by device 4.",
            Item: [
              {
                label:
                  "When commands are received by device 4, nodes in the association groups will not be switched, button activations will still send switch values",
                value: "0",
              },
              {
                label:
                  "When commands are received by device 4, nodes in the association groups will be switched",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "28",
            instance: "1",
            label: "Threshold time for long-press",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "50",
            Help:
              "\n\t\t\tDecides the time for when a button is detected as long-pressed.\n\t\t\t0     : Detection disabled. This is not recommended.\n\t\t\t1-255 : Long-press detection time in 0.01 seconds, 50 equals 0.5 seconds.\n\t\t\t",
          },
          {
            genre: "config",
            index: "29",
            instance: "1",
            label: "Threshold time for keypress detection of button 1",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "30",
            Help:
              "\n\t\t\tSpecifies the detection time for single-press, double-press, etc. for button 1.\n\t\t\t0       : Detection disabled. This is not recommended.\n\t\t\t1 - 255 : Detection time in 0.01 seconds, 30 equals 0.3 seconds.\n\t\t\t\tDefault: 30\n\t\t\t",
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Threshold time for keypress detection of button 2",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "30",
            Help:
              "\n\t\t\tSpecifies the detection time for single-press, double-press, etc. for button 2.\n\t\t\t0       : Detection disabled. This is not recommended.\n\t\t\t1 - 255 : Detection time in 0.01 seconds, 30 equals 0.3 seconds.\n\t\t\t\tDefault: 30\n\t\t\t",
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Threshold time for keypress detection of button 3",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "30",
            Help:
              "\n\t\t\tSpecifies the detection time for single-press, double-press, etc. for button 3.\n\t\t\t0       : Detection disabled. This is not recommended.\n\t\t\t1 - 255 : Detection time in 0.01 seconds, 30 equals 0.3 seconds.\n\t\t\t\tDefault: 30\n\t\t\t",
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Threshold time for keypress detection of button 4",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "30",
            Help:
              "\n\t\t\tSpecifies the detection time for single-press, double-press, etc. for button 4.\n\t\t\t0       : Detection disabled. This is not recommended.\n\t\t\t1 - 255 : Detection time in 0.01 seconds, 30 equals 0.3 seconds.\n\t\t\t\tDefault: 30\n\t\t\t",
          },
          {
            genre: "config",
            index: "33",
            instance: "1",
            label: "Non-secure commands for AG in logical device 1",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\tIf ZHC5010 is included secure, this parameter allows sending messages on keypresses to non-secure devices (e.g. pre-gen5 relays).\n\t\t\tIf ZHC5010 is included non-secure, this parameter has no function.\n\t\t\t0         : No commands sent unencrypted (default)\n\t\t\t1  (0x01) : Bit#1. Not used.\n\t\t\t2  (0x02) : Bit#2. Send BASICREPORT to association group 2 unencrypted.\n\t\t\t4  (0x04) : Bit#3. Send BASICSET to association group 3 unencrypted.\n\t\t\t8  (0x08) : Bit#4. Send BINARYSWITCHSET to association group 4 unencrypted.\n\t\t\t16 (0x10) : Bit#5. Send BINARYTOGGLESWITCHSET to association group 5 unencrypted.\n\t\t\t32 (0x20) : Bit#6. Send MULTILEVELSWITCH to association group 6 unencrypted.\n\t\t\t",
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "Non-secure commands for AG in logical device 2",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\tIf ZHC5010 is included secure, this parameter allows sending messages on keypresses to non-secure devices (e.g. pre-gen5 relays).\n\t\t\tIf ZHC5010 is included non-secure, this parameter has no function.\n\t\t\t0         : No commands sent unencrypted (default)\n\t\t\t1  (0x01) : Bit#1. Not used.\n\t\t\t2  (0x02) : Bit#2. Send BASICREPORT to association group 2 unencrypted.\n\t\t\t4  (0x04) : Bit#3. Send BASICSET to association group 3 unencrypted.\n\t\t\t8  (0x08) : Bit#4. Send BINARYSWITCHSET to association group 4 unencrypted.\n\t\t\t16 (0x10) : Bit#5. Send BINARYTOGGLESWITCHSET to association group 5 unencrypted.\n\t\t\t32 (0x20) : Bit#6. Send MULTILEVELSWITCH to association group 6 unencrypted.\n\t\t\t",
          },
          {
            genre: "config",
            index: "35",
            instance: "1",
            label: "Non-secure commands for AG in logical device 3",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\tIf ZHC5010 is included secure, this parameter allows sending messages on keypresses to non-secure devices (e.g. pre-gen5 relays).\n\t\t\tIf ZHC5010 is included non-secure, this parameter has no function.\n\t\t\t0         : No commands sent unencrypted (default)\n\t\t\t1  (0x01) : Bit#1. Not used.\n\t\t\t2  (0x02) : Bit#2. Send BASICREPORT to association group 2 unencrypted.\n\t\t\t4  (0x04) : Bit#3. Send BASICSET to association group 3 unencrypted.\n\t\t\t8  (0x08) : Bit#4. Send BINARYSWITCHSET to association group 4 unencrypted.\n\t\t\t16 (0x10) : Bit#5. Send BINARYTOGGLESWITCHSET to association group 5 unencrypted.\n\t\t\t32 (0x20) : Bit#6. Send MULTILEVELSWITCH to association group 6 unencrypted.\n\t\t\t",
          },
          {
            genre: "config",
            index: "36",
            instance: "1",
            label: "Non-secure commands for AG in logical device 4",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n\t\t\tIf ZHC5010 is included secure, this parameter allows sending messages on keypresses to non-secure devices (e.g. pre-gen5 relays).\n\t\t\tIf ZHC5010 is included non-secure, this parameter has no function.\n\t\t\t0         : No commands sent unencrypted (default)\n\t\t\t1  (0x01) : Bit#1. Not used.\n\t\t\t2  (0x02) : Bit#2. Send BASICREPORT to association group 2 unencrypted.\n\t\t\t4  (0x04) : Bit#3. Send BASICSET to association group 3 unencrypted.\n\t\t\t8  (0x08) : Bit#4. Send BINARYSWITCHSET to association group 4 unencrypted.\n\t\t\t16 (0x10) : Bit#5. Send BINARYTOGGLESWITCHSET to association group 5 unencrypted.\n\t\t\t32 (0x20) : Bit#6. Send MULTILEVELSWITCH to association group 6 unencrypted.\n\t\t\t",
          },
        ],
      },
      { id: "39", Compatibility: [{ GetSupported: [false] }] },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "21",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                auto: "true",
                index: "2",
                label: "Send Basic Report (On/Off) when button #1 is used",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Sends Basic Set (On/Off) when button #1 is used",
                max_associations: "5",
              },
              {
                index: "4",
                label:
                  "Sends Binary Switch Set (On/Off) when button #1 is used",
                max_associations: "5",
              },
              {
                index: "5",
                label: "Send Binary Toggle Switch Set when button #1 is used",
                max_associations: "5",
              },
              {
                index: "6",
                label:
                  "Sends Multilevel Switch Set / Multilevel Switch Start Level Change / Multilevel Switch Stop Level Change when button #1 is used",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "7",
                label: "Send Basic Report (On/Off) when button #2 is used",
                max_associations: "5",
              },
              {
                index: "8",
                label: "Sends Basic Set (On/Off) when button #2 is used",
                max_associations: "5",
              },
              {
                index: "9",
                label:
                  "Sends Binary Switch Set (On/Off) when button #2 is used",
                max_associations: "5",
              },
              {
                index: "10",
                label: "Send Binary Toggle Switch Set when button #2 is used",
                max_associations: "5",
              },
              {
                index: "11",
                label:
                  "Sends Multilevel Switch Set / Multilevel Switch Start Level Change / Multilevel Switch Stop Level Change when button #2 is used",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "12",
                label: "Send Basic Report (On/Off) when button #3 is used",
                max_associations: "5",
              },
              {
                index: "13",
                label: "Sends Basic Set (On/Off) when button #3 is used",
                max_associations: "5",
              },
              {
                index: "14",
                label:
                  "Sends Binary Switch Set (On/Off) when button #3 is used",
                max_associations: "5",
              },
              {
                index: "15",
                label: "Send Binary Toggle Switch Set when button #3 is used",
                max_associations: "5",
              },
              {
                index: "16",
                label:
                  "Sends Multilevel Switch Set / Multilevel Switch Start Level Change / Multilevel Switch Stop Level Change when button #3 is used",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "17",
                label: "Send Basic Report (On/Off) when button #4 is used",
                max_associations: "5",
              },
              {
                index: "18",
                label: "Sends Basic Set (On/Off) when button #4 is used",
                max_associations: "5",
              },
              {
                index: "19",
                label:
                  "Sends Binary Switch Set (On/Off) when button #4 is used",
                max_associations: "5",
              },
              {
                index: "20",
                label: "Send Binary Toggle Switch Set when button #4 is used",
                max_associations: "5",
              },
              {
                index: "21",
                label:
                  "Sends Multilevel Switch Set / Multilevel Switch Start Level Change / Multilevel Switch Stop Level Change when button #4 is used",
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
