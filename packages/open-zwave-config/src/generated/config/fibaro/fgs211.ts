import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Enable/Disable ALL ON/OFF",
            value: "255",
            size: "1",
            Help: "Enable/Disable ALL ON/OFF",
            Item: [
              { label: "ALL ON disabled/ ALL OFF disabled", value: "0" },
              { label: "ALL ON disabled/ ALL OFF active", value: "1" },
              { label: "ALL ON active / ALL OFF disabled", value: "2" },
              { label: "ALL ON active / ALL OFF active", value: "255" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Auto off relay after specified time",
            value: "0",
            size: "1",
            Help:
              "Auto off relay after specified time, with the possibility of manual override - immediate Off after button push.\n      Default value: 0 Manual override disabled",
            Item: [
              { label: "Manual override disabled", value: "0" },
              { label: "Manual override enabled", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "4",
            label: "Relay: OFF-delay time",
            value: "0",
            Help:
              "Automatic turning off relay 1 after set time, (0-255) in 10ms increments for FW1.0 to FW2.0, (0-65535) in 100 ms increment for FW2.1+",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "6",
            label: "Separation of association sending (key 1)",
            value: "0",
            size: "1",
            Help:
              "Activate/Deactivate association sending for group 1 - Also see param #15",
            Item: [
              {
                label: "Map status to all devices in group 1 (default)",
                value: "0",
              },
              {
                label:
                  "Map OFF status to all devices in group 1, Double click on key 1 will send ON to all devices in group 1, all dimmers set to prev.value",
                value: "1",
              },
              {
                label:
                  "Map OFF status to all devices in group 1, Double click on key 1 will send ON to all devices in group 1, all dimmers set to 100%",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "13",
            label: "Inputs behaviour",
            value: "0",
            size: "1",
            Help:
              "In case of bi-stable switches, define their behaviour (toggle or follow)",
            Item: [
              { label: "Toggle", value: "0" },
              {
                label: "Follow switch contact (closed=ON, open=OFF)",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "14",
            label: "Inputs Button/Switch configuration",
            value: "1",
            size: "1",
            Help: "Binary inputs type configuration",
            Item: [
              { label: "Mono-stable input (button)", value: "0" },
              { label: "Bi-stable input (switch)", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "15",
            label: "Dimmer/Roller shutter control",
            value: "0",
            size: "1",
            Help:
              "Enable/Disable operation of dimmer or roller shutter devices associated to group 1.\n        Available only when using mono-stable inputs (buttons) - Hold button 1 or double-tap for operation",
            Item: [
              { label: "Disable Dimmer/Roller shutter control", value: "0" },
              { label: "Enable Dimmer/Roller shutter control", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "16",
            label: "Saving state before power failure",
            value: "1",
            size: "1",
            Help: "Saving state before power failure",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "30",
            label: "Relay: Response to General Alarm",
            value: "3",
            size: "1",
            Help: "",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "31",
            label: "Relay: Response to Water Flood Alarm",
            value: "2",
            size: "1",
            Help: "",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "32",
            label: "Relay: Response to Smoke, CO, CO2 Alarm",
            value: "3",
            size: "1",
            Help: "",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "33",
            label: "Relay: Response to Temperature Alarm",
            value: "1",
            size: "1",
            Help: "",
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
            type: "short",
            genre: "config",
            instance: "1",
            index: "39",
            label: "Active flashing alarm time",
            value: "600",
            min: "1",
            max: "20000",
            size: "2",
            Help:
              "Amount of time (ms) the device keeps on flashing after receipt of Alarm Frame",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                index: "1",
                max_associations: "5",
                label: "Key no 1",
                auto: "false",
              },
              { index: "2", max_associations: "5", label: "Key no 2" },
              {
                index: "3",
                max_associations: "1",
                label: "Lifeline",
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
