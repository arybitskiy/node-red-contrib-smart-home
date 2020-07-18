import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Enable/Disable ALL ON/OFF",
            size: "1",
            type: "list",
            value: "255",
            Help: "Enable/Disable ALL ON/OFF",
            Item: [
              { label: "ALL ON disabled/ ALL OFF disabled", value: "0" },
              { label: "ALL ON disabled/ ALL OFF active", value: "1" },
              { label: "ALL ON active / ALL OFF disabled", value: "2" },
              { label: "ALL ON active / ALL OFF active", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Auto off relay after specified time",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Auto off relay after specified time, with the possibility of manual override - immediate Off after button push.\n      Default value: 0 Manual override disabled",
            Item: [
              { label: "Manual override disabled", value: "0" },
              { label: "Manual override enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Relay 1: OFF-delay time",
            type: "short",
            value: "0",
            Help:
              "Automatic turning off relay 1 after set time, (0-255) in 10ms increments for FW1.0 to FW2.0, (0-65535) in 100 ms increment for FW2.1+",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Relay 2: OFF-delay time",
            type: "short",
            value: "0",
            Help:
              "Automatic turning off relay 2 after set time, (0-255) in 10ms increments for FW1.0 to FW2.0, (0-65535) in 100 ms increment for FW2.1+",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label:
              "Managing the transmission of control commands to the devices from first group of associations (key 1).",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Correct working parameter No. 6 requires settings parameter No. 15 to 1. This activates functionality double-click - Control Dimmer/Roller Shutter. Default setting: 0",
            Item: [
              {
                label:
                  "The control commands are sent when the device is turned on and off (default)",
                value: "0",
              },
              {
                label:
                  "The control commands are sent when the device is turned off. Enabling the device does not send commands controls. Double click on key 1 will send ON to all devices in group 1, all dimmers set to prev.value (ex. 50%)",
                value: "1",
              },
              {
                label:
                  "The control commands are sent when the device is turned off. Enabling the device does not send commands controls. Double click on key 1 will send ON to all devices in group 1, all dimmers set to 100%",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label:
              "Managing the transmission of control commands to the devices from second group of associations (key 2).",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Correct working parameter No. 6 requires settings parameter No. 15 to 1. This activates functionality double-click - Control Dimmer/Roller Shutter. Default setting: 0",
            Item: [
              {
                label:
                  "The control commands are sent when the device is turned on and off (default)",
                value: "0",
              },
              {
                label:
                  "The control commands are sent when the device is turned off. Enabling the device does not send commands controls. Double click on key 2 will send ON to all devices in group 2, all dimmers set to prev.value (ex. 50%)",
                value: "1",
              },
              {
                label:
                  "The control commands are sent when the device is turned off. Enabling the device does not send commands controls. Double click on key 2 will send ON to all devices in group 2, all dimmers set to 100%",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Inputs behaviour",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "In case of bi-stable switches, define their behaviour (toggle or follow). Default setting: 0",
            Item: [
              { label: "Toggle", value: "0" },
              {
                label: "Follow switch contact (closed=ON, open=OFF)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Inputs Button/Switch configuration",
            size: "1",
            type: "list",
            value: "1",
            Help: "Binary inputs type configuration. Default setting: 1",
            Item: [
              { label: "Mono-stable input (button)", value: "0" },
              { label: "Bi-stable input (switch)", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Dimmer/Roller shutter control",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Enable/Disable operation of dimmer or roller shutter devices associated to group 1.\n        Available only when using mono-stable inputs (buttons) - Hold button 1 or double-tap for operation (only mono-stable input (button)). Default setting: 0",
            Item: [
              { label: "Disable Dimmer/Roller shutter control", value: "0" },
              { label: "Enable Dimmer/Roller shutter control", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Saving state before power failure",
            size: "1",
            type: "list",
            value: "1",
            Help: "Saving state before power failure. Default setting: 1",
            Item: [
              {
                label:
                  "State NOT saved at power failure, all outputs are set to OFF upon power restore",
                value: "0",
              },
              {
                label:
                  "State saved at power failure, all outputs are set to previous state upon power restore",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Relay 1: Response to General Alarm",
            size: "1",
            type: "list",
            value: "3",
            Help: "Default setting: 3",
            Item: [
              {
                label: "DEACTIVATION - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM RELAY ON - relay will turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM RELAY OFF - relay will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - relay will turn ON and OFF periodically (see param.39)",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Relay 1: Response to Water Flood Alarm",
            size: "1",
            type: "list",
            value: "2",
            Help: "Default setting: 2",
            Item: [
              {
                label: "DEACTIVATION - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM RELAY ON - relay will turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM RELAY OFF - relay will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - relay will turn ON and OFF periodically (see param.39)",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Relay 1: Response to Smoke, CO, CO2 Alarm",
            size: "1",
            type: "list",
            value: "3",
            Help: "Default setting: 3",
            Item: [
              {
                label: "DEACTIVATION - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM RELAY ON - relay will turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM RELAY OFF - relay will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - relay will turn ON and OFF periodically (see param.39)",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "33",
            instance: "1",
            label: "Relay 1: Response to Temperature Alarm",
            size: "1",
            type: "list",
            value: "1",
            Help: "Default setting: 1",
            Item: [
              {
                label: "DEACTIVATION - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM RELAY ON - relay will turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM RELAY OFF - relay will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - relay will turn ON and OFF periodically (see param.39)",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "39",
            instance: "1",
            label: "ALARM FLASHING alarm time",
            size: "2",
            type: "short",
            value: "600",
            Help:
              "Amount of time (ms) the device keeps on flashing after receipt of Alarm Frame. Default setting: 600",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Relay 2: Response to General Alarm",
            size: "1",
            type: "list",
            value: "3",
            Help: "Default setting: 3",
            Item: [
              {
                label: "DEACTIVATION - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM RELAY ON - relay will turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM RELAY OFF - relay will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - relay will turn ON and OFF periodically (see param.39)",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "41",
            instance: "1",
            label: "Relay 2: Response to Water Flood Alarm",
            size: "1",
            type: "list",
            value: "2",
            Help: "Default setting: 2",
            Item: [
              {
                label: "DEACTIVATION - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM RELAY ON - relay will turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM RELAY OFF - relay will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - relay will turn ON and OFF periodically (see param.39)",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Relay 2: Response to Smoke, CO, CO2 Alarm",
            size: "1",
            type: "list",
            value: "3",
            Help: "Default setting: 3",
            Item: [
              {
                label: "DEACTIVATION - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM RELAY ON - relay will turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM RELAY OFF - relay will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - relay will turn ON and OFF periodically (see param.39)",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Relay 2: Response to Temperature Alarm",
            size: "1",
            type: "list",
            value: "1",
            Help: "Default setting: 1",
            Item: [
              {
                label: "DEACTIVATION - no response to alarm frames",
                value: "0",
              },
              {
                label:
                  "ALARM RELAY ON - relay will turn ON upon receipt of alarm frame",
                value: "1",
              },
              {
                label:
                  "ALARM RELAY OFF - relay will turn OFF upon receipt of alarm frame",
                value: "2",
              },
              {
                label:
                  "ALARM FLASHING - relay will turn ON and OFF periodically (see param.39)",
                value: "3",
              },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                auto: "false",
                index: "1",
                label: "Key no 1",
                max_associations: "5",
              },
              { index: "2", label: "Key no 2", max_associations: "5" },
              {
                auto: "true",
                index: "3",
                label: "Lifeline",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
