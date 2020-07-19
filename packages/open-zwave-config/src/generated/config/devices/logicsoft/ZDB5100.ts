import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "Matrix", name: "Name" },
          {
            text:
              "MATRIX ZDB5100 is a dimmer wall switch module with four backlit pushbuttons. MATRIX is designed to fit into 1-module FUGA® wall boxes (Danish standard).",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0234:0121:0003",
            name: "OzwInfoPage",
          },
          {
            text: "https://logic-group.com/products/matrix-switches/",
            name: "ProductPage",
          },
          { text: "https://logic-group.com/contact/", name: "ProductSupport" },
          { text: "images/logicsoft/ZDB5100.png", name: "ProductPic" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=Manuals/3399/MATRIX_ZDB5100_User_Manual_1_01-EN.pdf",
            name: "ProductManual",
          },
          {
            text:
              "MATRIX’add/remove function is initiated by pressing a single time on the smallpushbutton(I) in the middle of the module (under the tangent cover), and the LED’s inpushbutton1 will start blinking.",
            name: "InclusionDescription",
          },
          {
            text:
              "MATRIX’add/remove function is initiated by pressing a single time on the smallpushbutton(I) in the middle of the module (under the tangent cover), and the LED’s inpushbutton1 will start blinking.",
            name: "ExclusionDescription",
          },
          {
            text:
              "MATRIX can be factory reset by holding the smallpushbutton(I) in the middle of the module under the tangent cover, for at least 10 seconds.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3399",
            id: "0121",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "0121",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "ZDB5100", id: "0121", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3399/xml",
                author: "Dennis Staal - staal.dennis@gmail.com",
                date: "10 August 2019",
                revision: 1,
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
            label: "Operating pushbutton(s) for dimmer",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter specifies which pushbutton(s) that shall be used to control the built-in dimmer.",
            Item: [
              { label: "No local operation of the dimmer", value: "0" },
              { label: "Pushbutton 1 controls the dimmer", value: "1" },
              { label: "Pushbutton 2 controls the dimmer", value: "2" },
              { label: "Pushbutton 3 controls the dimmer", value: "3" },
              { label: "Pushbutton 4 controls the dimmer", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Duration of dimming",
            max: "255",
            min: "0",
            type: "byte",
            value: "5",
            Help:
              "\n      This parameter specifies the duration ofa full regulation of the light from 0% to 100%.\n        0:        Immediately.\n        1-127:    Durationin seconds (Default is 5 seconds).\n        128-255:  Duration in minutes (minus 127) from 1 –128 minutes, where 128 is 1 minute.\n      ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Duration of on/off",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n      This parameter specifies the duration when turning the light on or off.\n        0:        Immediately. (Default).\n        1-127:    Time in seconds.\n        128-255:  Time in minutes (minus 127) from 1 –128 minutes, where 128 is 1 minute.\n      ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Dimmer mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "The dimmer can work in three different modes: on/off, leading edge or trailing edge.",
            Item: [
              { label: "No dimming, only on/off (0%/100%)", value: "0" },
              { label: "Trailing edge dimming", value: "1" },
              { label: "Leading edge dimming", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Dimmer minimum level",
            max: "99",
            min: "0",
            type: "byte",
            units: "%",
            value: "0",
            Help:
              "This parameter specifies the actual level of the dimmer output when set to 0%.",
          },
          {
            genre: "config",
            index: "6",
            label: "Dimmer maximum level",
            max: "99",
            min: "1",
            type: "byte",
            units: "%",
            value: "99",
            Help:
              "This parameter specifies the actual level of the dimmer output when set to 99%.",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Central Scene notifications",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter can be used for disabling Central Scene notifications.",
            Item: [
              { label: "Notifications are disabled", value: "0" },
              { label: "Notifications are enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Double-activation functionality",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter specifies the reaction when double-activating the pushbuttons.",
            Item: [
              { label: "Double-activation disabled", value: "0" },
              { label: "Double-activation sets light to 100%", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Enhanced LED control",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter can be used for enabling the enhanced LED control. See document about MATRIX enhanced LED control.",
            Item: [
              { label: "Enhanced LED control is disabled", value: "0" },
              { label: "Enhanced LED control is enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Pushbutton debounce timer",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "\n\t\t\tPushbutton input debounce time in 0.01 seconds resolution.\n\t\t\t  1-255:  1–2.55 seconds. Default is 5, which equals to a debounce-filter on 50 milliseconds (0.05 seconds).\n\t\t\t",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Pushbutton press threshold time",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            value: "20",
            Help:
              "\n\t\t\tSpecifies the time that apushbuttonmust be activated before it is detected as pressed. Resolution is in 0.01 seconds.\n\t\t\t  1-255:  1–2.55 seconds. Default is 20, which equals to 200 milliseconds (0.2 seconds).\n\t\t\t",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Pushbutton held threshold time",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            value: "50",
            Help:
              "\n\t\t\tSpecifies the time that a pushbutton must have been activated before it is accepted as “held-down”. Resolution is 0.01 seconds.\n\t\t\t  1-255:  1–2.55 seconds. Default is 50, which equals to 500 milliseconds (0,5 seconds).\n\t\t\t",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Global brightness control",
            size: "4",
            type: "int",
            value: "4294967040",
            Help:
              "        \n        Byte 1: Red brightness\n            0-255 Brightness level for the red colour in the 4 indicator groups (Default is 255).\n        Byte 2: Green brightness\n            0–255 Brightness level for the green colour in the 4 indicator groups (Default is 255).\n        Byte 3: Blue brightness\n            0-255 Brightness level for the blue colour in the 4 indicator groups (Default is 255).\n        Byte 4: Not used–must be set to 0.\n        Default: 4294967040\n\t\t\t",
          },
          {
            genre: "config",
            index: "15",
            label: "Associations groups, transmission when included secure",
            size: "2",
            type: "bitset",
            bitmask: "8191",
            value: "8191",
            Help:
              "This parameter specifies if commands are transmitted as a secure message for each of the association groups.\n        Bitmask:\n        0: All messages in all groups are sent as insecure.\n        1: Messages in association group 2 aresent as secure.\n        2: Messages in association group 3 aresent as secure.\n        4: Messages in association group 4 aresent as secure.\n        8: Messages in association group 5 aresent as secure.\n        16: Messages in association group 6 aresent as secure.\n        32: Messages in association group 7 aresent as secure.\n        64: Messages in association group 8 aresent as secure.\n        128: Messages in association group 9 aresent as secure.\n        256: Messages in association group 10 aresent as secure.\n        512: Messages in association group 11 aresent as secure.\n        1024: Messages in association group 12 aresent as secure.\n        2048: Messages in association group 13 aresent as secure.\n        4096: Messages in association group 14 aresent as secure.\n        8191: Messages in allassociation groups are sent as secure. (Default)\n      ",
            BitSet: [
              {
                id: "1",
                Label: "Bit#0. All commands are sent unencrypted",
                Help: "All messages in all groups are sent as insecure.",
              },
              {
                id: "2",
                Label:
                  "Bit#1. Send Basic Report to association group 2 encrypted.",
                Help: "Messages in association group 2 are sent as secure.",
              },
              {
                id: "3",
                Label:
                  "Bit#2. Send Binary Switch Set to association group 3 encrypted.",
                Help: "Messages in association group 3 are sent as secure.",
              },
              {
                id: "4",
                Label:
                  "Bit#4. Send Multi-LevelSwitch to association group 4 encrypted.",
                Help: "Messages in association group 4 are sent as secure.",
              },
              {
                id: "5",
                Label:
                  "Bit#8. Send Basic Report to association group 5 encrypted.",
                Help: "Messages in association group 5 are sent as secure.",
              },
              {
                id: "6",
                Label:
                  "Bit#16. Send Binary Switch Set to association group 6 encrypted.",
                Help: "Messages in association group 6 are sent as secure.",
              },
              {
                id: "7",
                Label:
                  "Bit#32. Send Multi-LevelSwitch to association group 7 encrypted.",
                Help: "Messages in association group 7 are sent as secure.",
              },
              {
                id: "8",
                Label:
                  "Bit#64. Send Basic Report to association group 8 encrypted.",
                Help: "Messages in association group 8 are sent as secure.",
              },
              {
                id: "9",
                Label:
                  "Bit#128. Send Binary Switch Set to association group 9 encrypted.",
                Help: "Messages in association group 9 are sent as secure.",
              },
              {
                id: "10",
                Label:
                  "Bit#256. Send Multi-LevelSwitch to association group 10 encrypted.",
                Help: "Messages in association group 10 are sent as secure.",
              },
              {
                id: "11",
                Label:
                  "Bit#512. Send Basic Report to association group 11 encrypted.",
                Help: "Messages in association group 11 are sent as secure.",
              },
              {
                id: "12",
                Label:
                  "Bit#1024. Send Binary Switch Set to association group 12 encrypted.",
                Help: "Messages in association group 12 are sent as secure.",
              },
              {
                id: "13",
                Label:
                  "Bit#2048. Send Multi-LevelSwitch to association group 10 encrypted.",
                Help: "Messages in association group 13 are sent as secure.",
              },
              {
                id: "14",
                Label:
                  "Bit#4096. Send Basic Report to association group 14 encrypted.",
                Help: "Messages in association group 14 are sent as secure.",
              },
              {
                id: "15",
                Label: "Bit#8191. All commands are sent encrypted (default).",
                Help: "Messages in all association groups are sent as secure.",
              },
            ],
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Pushbutton 1 functionality",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "This parameter specifies the functionality of pushbutton 1.",
            Item: [
              {
                label:
                  "Standard toggle-function, the state is switched between on and off, dimming up and down",
                value: "0",
              },
              {
                label:
                  "Automatic turn off after the time has expired (staircase lighting function), the time is specified in the next configuration parameter",
                value: "1",
              },
              {
                label:
                  "Automatic turn on after the time has expired, the time is specified in the next configuration parameter",
                value: "2",
              },
              {
                label:
                  "Always turn offor dim down. Using this parameter, the pushbutton can only send ‘off’ or ‘dim down’ commands. Use this in pair with another pushbutton with value 4",
                value: "3",
              },
              {
                label:
                  "Always turn on or dim up. Using this parameter, the pushbutton can only send ‘on’ or ‘dim up’ commands. Use this in pair with another pushbutton with value 3",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label: "Timer value for pushbutton 1",
            max: "43200",
            min: "0",
            size: "2",
            type: "short",
            value: "300",
            Help:
              "0–43200: Specifies the time in seconds. Default is 300 = 5 minutes.",
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Multi-Level Switch Set values for pushbutton 1",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "        \n        Byte 1: Enable/ Disable\n            0 Disabled – A single activation of the pushbutton will not send commands to devices in association group 4.\n            1 Enabled – A single activation will send commands to devices in association group 4. Devices will receive commands with the values set in Byte 2 and 3 (Default).\n        Byte 2: Upper switch value\n            0–99, 255 When single pressing the pushbutton for ON, a Multilevel Switch Set with this value will be send to devices in association group 4 (Default = 255).\n        Byte 3: Lower switch value\n            0-99 When single pressing the pushbutton for OFF, a Multilevel Switch Set with this value will be send to devices in association group 4 (Default = 0).\n        Byte 4: Not used–must be set to 0.\n        Default: 33488896\n\t\t\t",
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "Binary Switch Setsupport for pushbutton 1",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter specifies how received Binary Switch Setcommands are handled.",
            Item: [
              {
                label:
                  "Binary Switch Set - only controls the pushbutton indicator LEDs, ON/OFF",
                value: "0",
              },
              {
                label:
                  "Binary Switch Set - controls the internal switch status and the pushbutton indicator LEDs",
                value: "1",
              },
              {
                label:
                  "Binary Switch Set - is handled as if the user had activated the pushbutton, including transmission of commands via the association groups",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Pushbutton 1 LED indication",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "7",
            Help:
              "This parameter specifies how the LED indication is controlled..",
            Item: [
              {
                label:
                  "Internal LED control is disabled, only external commands control the indication",
                value: "0",
              },
              {
                label: "The LED indication follows the switch status",
                value: "1",
              },
              {
                label:
                  "The LED indication follows the switch status – with inverted functionality",
                value: "2",
              },
              { label: "Same as 1", value: "3" },
              { label: "Same as 2", value: "4" },
              {
                label:
                  "The LED indication follows the status of the internal dimmer, ON or OFF",
                value: "5",
              },
              {
                label:
                  "The LED indication follows the status of the internal dimmer with inverted functionality, ON or OFF",
                value: "6",
              },
              {
                label:
                  "The LED indicator is ON for 5 seconds when the pushbutton is activated",
                value: "7",
              },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Colour commands for pushbutton 1 LED indication",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter specifies how received Binary Switch Set commands are handled.",
            Item: [
              {
                label:
                  "Direct control - the LED indication shows the received colour immediately, until the pushbutton is activated",
                value: "0",
              },
              {
                label: "Colour command sets the colour for OFF indication",
                value: "1",
              },
              {
                label: "Colour command sets the colour for ON indication",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "ON indication RGB-saturation for pushbutton 1",
            size: "4",
            type: "int",
            value: "32512",
            Help:
              "        \n        Byte 1: Colour saturation, red\n            0-255 Specifies the saturation for the red LEDs (Default is 0).\n        Byte 2: Colour saturation, green\n            0–255 Specifies the saturation for the green LEDs (Default is 0).\n        Byte 3: Colour saturation, blue\n            0-255 Specifies the saturation for the blue LEDs (Default is 127).\n        Byte 4: LED control\n            0-255 LED indicator control - see the application note about this parameter (Default is 0).\n        Default: 32512\n\t\t\t",
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label: "OFF indication RGB-saturation for pushbutton 1",
            size: "4",
            type: "int",
            value: "50065152",
            Help:
              "        \n        Byte 1: Colour saturation, red\n            0-255 Specifies the saturation for the red LEDs (Default is 47).\n        Byte 2: Colour saturation, green\n            0–255 Specifies the saturation for the green LEDs (Default is 47).\n        Byte 3: Colour saturation, blue\n            0-255 Specifies the saturation for the blue LEDs (Default is 47).\n        Byte 4: LED control\n            0-255 LED indicator control - see the application note about this parameter (Default is 0).\n        Default: 50065152\n\t\t\t",
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Pushbutton 2 functionality",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "This parameter specifies the functionality of pushbutton 2.",
            Item: [
              {
                label:
                  "Standard toggle-function, the state is switched between on and off, dimming up and down",
                value: "0",
              },
              {
                label:
                  "Automatic turn off after the time has expired (staircase lighting function), the time is specified in the next configuration parameter",
                value: "1",
              },
              {
                label:
                  "Automatic turn on after the time has expired, the time is specified in the next configuration parameter",
                value: "2",
              },
              {
                label:
                  "Always turn off or dim down. Using this parameter, the pushbutton can only send ‘off’ or ‘dim down’ commands",
                value: "3",
              },
              {
                label:
                  "Always turn on or dim up. Using this parameter, the pushbutton can only send ‘on’ or ‘dim up’ commands",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label: "Timer value for pushbutton 2",
            max: "43200",
            min: "0",
            size: "2",
            type: "short",
            value: "300",
            Help:
              "0–43200: Specifies the time in seconds. Default is 300 = 5 minutes.",
          },
          {
            genre: "config",
            index: "26",
            instance: "1",
            label: "Multi-Level Switch Set values for pushbutton 2",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "        \n        Byte 1: Enable/ Disable\n            0 Disabled – A single activation of the pushbutton will not send commands to devices in association group 4.\n            1 Enabled – A single activation will send commands to devices in association group 4. Devices will receive commands with the values set in Byte 2 and 3 (Default).\n        Byte 2: Upper switch value\n            0–99, 255 When single pressing the pushbutton for ON, a Multilevel Switch Set with this value will be send to devices in association group 4 (Default = 255).\n        Byte 3: Lower switch value\n            0-99 When single pressing the pushbutton for OFF, a Multilevel Switch Set with this value will be send to devices in association group 4 (Default = 0).\n        Byte 4: Not used–must be set to 0.\n        Default: 33488896\n\t\t\t",
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "Binary Switch Setsupport for pushbutton 2",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter specifies how received Binary Switch Set commands are handled.",
            Item: [
              {
                label:
                  "Binary Switch Set - only controls the pushbutton indicator LEDs, ON/OFF",
                value: "0",
              },
              {
                label:
                  "Binary Switch Set - controls the internal switch status and the pushbutton indicator LEDs",
                value: "1",
              },
              {
                label:
                  "Binary Switch Set - is handled as if the user had activated the pushbutton, including transmission of commands via the association groups",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "28",
            instance: "1",
            label: "Pushbutton 2 LED indication",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "7",
            Help:
              "This parameter specifies how the LED indication is controlled..",
            Item: [
              {
                label:
                  "Internal LED control is disabled, only external commands control the indication",
                value: "0",
              },
              {
                label: "The LED indication follows the switch status",
                value: "1",
              },
              {
                label:
                  "The LED indication follows the switch status – with inverted functionality",
                value: "2",
              },
              { label: "Same as 1", value: "3" },
              { label: "Same as 2", value: "4" },
              {
                label:
                  "The LED indication follows the status of the internal dimmer, ON or OFF",
                value: "5",
              },
              {
                label:
                  "The LED indication follows the status of the internal dimmer with inverted functionality, ON or OFF",
                value: "6",
              },
              {
                label:
                  "The LED indicator is ON for 5 seconds when the pushbutton is activated",
                value: "7",
              },
            ],
          },
          {
            genre: "config",
            index: "29",
            instance: "1",
            label: "Colour commands for pushbutton 2 LED indication",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter specifies how received Binary Switch Setcommands are handled.",
            Item: [
              {
                label:
                  "Direct control - the LED indication shows the received colour immediately, until the pushbutton is activated",
                value: "0",
              },
              {
                label: "Colour command sets the colour for OFF indication",
                value: "1",
              },
              {
                label: "Colour command sets the colour for ON indication",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "ON indication RGB-saturation for pushbutton 2",
            size: "4",
            type: "int",
            value: "32512",
            Help:
              "        \n        Byte 1: Colour saturation, red\n            0-255 Specifies the saturation for the red LEDs (Default is 0).\n        Byte 2: Colour saturation, green\n            0–255 Specifies the saturation for the green LEDs (Default is 0).\n        Byte 3: Colour saturation, blue\n            0-255 Specifies the saturation for the blue LEDs (Default is 127).\n        Byte 4: LED control\n            0-255 LED indicator control - see the application note about this parameter (Default is 0).\n        Default: 32512\n\t\t\t",
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "OFF indication RGB-saturation for pushbutton 2",
            size: "4",
            type: "int",
            value: "50065152",
            Help:
              "        \n        Byte 1: Colour saturation, red\n            0-255 Specifies the saturation for the red LEDs (Default is 47).\n        Byte 2: Colour saturation, green\n            0–255 Specifies the saturation for the green LEDs (Default is 47).\n        Byte 3: Colour saturation, blue\n            0-255 Specifies the saturation for the blue LEDs (Default is 47).\n        Byte 4: LED control\n            0-255 LED indicator control - see the application note about this parameter (Default is 0).\n        Default: 50065152\n\t\t\t",
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Pushbutton 3 functionality",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "This parameter specifies the functionality of pushbutton 3.",
            Item: [
              {
                label:
                  "Standard toggle-function, the state is switched between on and off, dimming up and down",
                value: "0",
              },
              {
                label:
                  "Automatic turn off after the time has expired (staircase lighting function), the time is specified in the next configuration parameter",
                value: "1",
              },
              {
                label:
                  "Automatic turn on after the time has expired, the time is specified in the next configuration parameter",
                value: "2",
              },
              {
                label:
                  "Always turn off or dim down. Using this parameter, the pushbutton can only send ‘off’ or ‘dim down’ commands",
                value: "3",
              },
              {
                label:
                  "Always turn on or dim up. Using this parameter, the pushbutton can only send ‘on’ or ‘dim up’ commands",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "33",
            instance: "1",
            label: "Timer value for pushbutton 3",
            max: "43200",
            min: "0",
            size: "2",
            type: "short",
            value: "300",
            Help:
              "0–43200: Specifies the time in seconds. Default is 300 = 5 minutes.",
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "Multi-Level Switch Set values for pushbutton 3",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "        \n        Byte 1: Enable/ Disable\n            0 Disabled – A single activation of the pushbutton will not send commands to devices in association group 4.\n            1 Enabled – A single activation will send commands to devices in association group 4. Devices will receive commands with the values set in Byte 2 and 3 (Default).\n        Byte 2: Upper switch value\n            0–99, 255 When single pressing the pushbutton for ON, a Multilevel Switch Set with this value will be send to devices in association group 4 (Default = 255).\n        Byte 3: Lower switch value\n            0-99 When single pressing the pushbutton for OFF, a Multilevel Switch Set with this value will be send to devices in association group 4 (Default = 0).\n        Byte 4: Not used–must be set to 0.\n        Default: 33488896\n\t\t\t",
          },
          {
            genre: "config",
            index: "35",
            instance: "1",
            label: "Binary Switch Setsupport for pushbutton 3",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter specifies how received Binary Switch Set commands are handled.",
            Item: [
              {
                label:
                  "Binary Switch Set - only controls the pushbutton indicator LEDs, ON/OFF",
                value: "0",
              },
              {
                label:
                  "Binary Switch Set - controls the internal switch status and the pushbutton indicator LEDs",
                value: "1",
              },
              {
                label:
                  "Binary Switch Set - is handled as if the user had activated the pushbutton, including transmission of commands via the association groups",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "36",
            instance: "1",
            label: "Pushbutton 3 LED indication",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "7",
            Help:
              "This parameter specifies how the LED indication is controlled..",
            Item: [
              {
                label:
                  "Internal LED control is disabled, only external commands control the indication",
                value: "0",
              },
              {
                label: "The LED indication follows the switch status",
                value: "1",
              },
              {
                label:
                  "The LED indication follows the switch status – with inverted functionality",
                value: "2",
              },
              { label: "Same as 1", value: "3" },
              { label: "Same as 2", value: "4" },
              {
                label:
                  "The LED indication follows the status of the internal dimmer, ON or OFF",
                value: "5",
              },
              {
                label:
                  "The LED indication follows the status of the internal dimmer with inverted functionality, ON or OFF",
                value: "6",
              },
              {
                label:
                  "The LED indicator is ON for 5 seconds when the pushbutton is activated",
                value: "7",
              },
            ],
          },
          {
            genre: "config",
            index: "37",
            instance: "1",
            label: "Colour commands for pushbutton 3 LED indication",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter specifies how received Binary Switch Setcommands are handled.",
            Item: [
              {
                label:
                  "Direct control - the LED indication shows the received colour immediately, until the pushbutton is activated",
                value: "0",
              },
              {
                label: "Colour command sets the colour for OFF indication",
                value: "1",
              },
              {
                label: "Colour command sets the colour for ON indication",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "38",
            instance: "1",
            label: "ON indication RGB-saturation for pushbutton 3",
            size: "4",
            type: "int",
            value: "32512",
            Help:
              "        \n        Byte 1: Colour saturation, red\n            0-255 Specifies the saturation for the red LEDs (Default is 0).\n        Byte 2: Colour saturation, green\n            0–255 Specifies the saturation for the green LEDs (Default is 0).\n        Byte 3: Colour saturation, blue\n            0-255 Specifies the saturation for the blue LEDs (Default is 127).\n        Byte 4: LED control\n            0-255 LED indicator control - see the application note about this parameter (Default is 0).\n        Default: 32512\n\t\t\t",
          },
          {
            genre: "config",
            index: "39",
            instance: "1",
            label: "OFF indication RGB-saturation for pushbutton 3",
            size: "4",
            type: "int",
            value: "50065152",
            Help:
              "        \n        Byte 1: Colour saturation, red\n            0-255 Specifies the saturation for the red LEDs (Default is 47).\n        Byte 2: Colour saturation, green\n            0–255 Specifies the saturation for the green LEDs (Default is 47).\n        Byte 3: Colour saturation, blue\n            0-255 Specifies the saturation for the blue LEDs (Default is 47).\n        Byte 4: LED control\n            0-255 LED indicator control - see the application note about this parameter (Default is 0).\n        Default: 50065152\n\t\t\t",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Pushbutton 4 functionality",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "This parameter specifies the functionality of pushbutton 4.",
            Item: [
              {
                label:
                  "Standard toggle-function, the state is switched between on and off, dimming up and down",
                value: "0",
              },
              {
                label:
                  "Automatic turn off after the time has expired (staircase lighting function), the time is specified in the next configuration parameter",
                value: "1",
              },
              {
                label:
                  "Automatic turn on after the time has expired, the time is specified in the next configuration parameter",
                value: "2",
              },
              {
                label:
                  "Always turn off or dim down. Using this parameter, the pushbutton can only send ‘off’ or ‘dim down’ commands",
                value: "3",
              },
              {
                label:
                  "Always turn on or dim up. Using this parameter, the pushbutton can only send ‘on’ or ‘dim up’ commands",
                value: "4",
              },
            ],
          },
          {
            genre: "config",
            index: "41",
            instance: "1",
            label: "Timer value for pushbutton 4",
            max: "43200",
            min: "0",
            size: "2",
            type: "short",
            value: "300",
            Help:
              "0–43200: Specifies the time in seconds. Default is 300 = 5 minutes.",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Multi-Level Switch Set values for pushbutton 4",
            size: "4",
            type: "int",
            value: "33488896",
            Help:
              "        \n        Byte 1: Enable/ Disable\n            0 Disabled – A single activation of the pushbutton will not send commands to devices in association group 4.\n            1 Enabled – A single activation will send commands to devices in association group 4. Devices will receive commands with the values set in Byte 2 and 3 (Default).\n        Byte 2: Upper switch value\n            0–99, 255 When single pressing the pushbutton for ON, a Multilevel Switch Set with this value will be send to devices in association group 4 (Default = 255).\n        Byte 3: Lower switch value\n            0-99 When single pressing the pushbutton for OFF, a Multilevel Switch Set with this value will be send to devices in association group 4 (Default = 0).\n        Byte 4: Not used–must be set to 0.\n        Default: 33488896\n\t\t\t",
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Binary Switch Setsupport for pushbutton 4",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter specifies how received Binary Switch Set commands are handled.",
            Item: [
              {
                label:
                  "Binary Switch Set - only controls the pushbutton indicator LEDs, ON/OFF",
                value: "0",
              },
              {
                label:
                  "Binary Switch Set - controls the internal switch status and the pushbutton indicator LEDs",
                value: "1",
              },
              {
                label:
                  "Binary Switch Set - is handled as if the user had activated the pushbutton, including transmission of commands via the association groups",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "44",
            instance: "1",
            label: "Pushbutton 4 LED indication",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "7",
            Help:
              "This parameter specifies how the LED indication is controlled..",
            Item: [
              {
                label:
                  "Internal LED control is disabled, only external commands control the indication",
                value: "0",
              },
              {
                label: "The LED indication follows the switch status",
                value: "1",
              },
              {
                label:
                  "The LED indication follows the switch status – with inverted functionality",
                value: "2",
              },
              { label: "Same as 1", value: "3" },
              { label: "Same as 2", value: "4" },
              {
                label:
                  "The LED indication follows the status of the internal dimmer, ON or OFF",
                value: "5",
              },
              {
                label:
                  "The LED indication follows the status of the internal dimmer with inverted functionality, ON or OFF",
                value: "6",
              },
              {
                label:
                  "The LED indicator is ON for 5 seconds when the pushbutton is activated",
                value: "7",
              },
            ],
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "Colour commands for pushbutton 4 LED indication",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter specifies how received Binary Switch Setcommands are handled.",
            Item: [
              {
                label:
                  "Direct control - the LED indication shows the received colour immediately, until the pushbutton is activated",
                value: "0",
              },
              {
                label: "Colour command sets the colour for OFF indication",
                value: "1",
              },
              {
                label: "Colour command sets the colour for ON indication",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "46",
            instance: "1",
            label: "ON indication RGB-saturation for pushbutton 4",
            size: "4",
            type: "int",
            value: "32512",
            Help:
              "        \n        Byte 1: Colour saturation, red\n            0-255 Specifies the saturation for the red LEDs (Default is 0).\n        Byte 2: Colour saturation, green\n            0–255 Specifies the saturation for the green LEDs (Default is 0).\n        Byte 3: Colour saturation, blue\n            0-255 Specifies the saturation for the blue LEDs (Default is 127).\n        Byte 4: LED control\n            0-255 LED indicator control - see the application note about this parameter (Default is 0).\n        Default: 32512\n\t\t\t",
          },
          {
            genre: "config",
            index: "47",
            instance: "1",
            label: "OFF indication RGB-saturation for pushbutton 4",
            size: "4",
            type: "int",
            value: "50065152",
            Help:
              "        \n        Byte 1: Colour saturation, red\n            0-255 Specifies the saturation for the red LEDs (Default is 47).\n        Byte 2: Colour saturation, green\n            0–255 Specifies the saturation for the green LEDs (Default is 47).\n        Byte 3: Colour saturation, blue\n            0-255 Specifies the saturation for the blue LEDs (Default is 47).\n        Byte 4: LED control\n            0-255 LED indicator control - see the application note about this parameter (Default is 0).\n        Default: 50065152\n\t\t\t",
          },
        ],
      },
      { id: "39", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "14",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Send Basic Report (On/Off) when button #1 is used",
                max_associations: "5",
              },
              {
                index: "3",
                label:
                  "Sends Binary Switch Set (On/Off) when button #1 is used",
                max_associations: "5",
              },
              {
                index: "4",
                label:
                  "Sends Multilevel Switch Set / Multilevel Switch Start Level Change / Multilevel Switch Stop Level Change when button #1 is used",
                max_associations: "5",
              },
              {
                index: "5",
                label: "Send Basic Report (On/Off) when button #2 is used",
                max_associations: "5",
              },
              {
                index: "6",
                label:
                  "Sends Binary Switch Set (On/Off) when button #2 is used",
                max_associations: "5",
              },
              {
                index: "7",
                label:
                  "Sends Multilevel Switch Set / Multilevel Switch Start Level Change / Multilevel Switch Stop Level Change when button #2 is used",
                max_associations: "5",
              },
              {
                index: "8",
                label: "Send Basic Report (On/Off) when button #3 is used",
                max_associations: "5",
              },
              {
                index: "9",
                label:
                  "Sends Binary Switch Set (On/Off) when button #3 is used",
                max_associations: "5",
              },
              {
                index: "10",
                label:
                  "Sends Multilevel Switch Set / Multilevel Switch Start Level Change / Multilevel Switch Stop Level Change when button #3 is used",
                max_associations: "5",
              },
              {
                index: "11",
                label: "Send Basic Report (On/Off) when button #4 is used",
                max_associations: "5",
              },
              {
                index: "12",
                label:
                  "Sends Binary Switch Set (On/Off) when button #4 is used",
                max_associations: "5",
              },
              {
                index: "13",
                label:
                  "Sends Multilevel Switch Set / Multilevel Switch Start Level Change / Multilevel Switch Stop Level Change when button #4 is used",
                max_associations: "5",
              },
              {
                index: "14",
                label:
                  "Send Basic Report with information about the actual level for the dimmer",
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
