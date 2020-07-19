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
            genre: "config",
            instance: "1",
            index: "1",
            label: "Activate / deactivate functions ALL ON / ALL OFF",
            value: "0",
            size: "1",
            Help: " ",
            Item: [
              {
                label: "ALL ON disabled/ ALL OFF disable - Default",
                value: "0",
              },
              { label: "ALL ON disabled/ ALL OFF active", value: "1" },
              { label: "ALL ON active / ALL OFF disabled", value: "2" },
              { label: "ALL ON active / ALL OFF active", value: "255" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Turning off the shutter positioning function",
            value: "0",
            size: "1",
            Help: " ",
            Item: [
              {
                label: "Turning on the shutter positioning function - Default",
                value: "0",
              },
              {
                label: "Turning off the shutter positioning function",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "14",
            label: "14. Inputs Button/Switch configuration",
            value: "0",
            size: "1",
            Help: "Binary inputs type configuration",
            Item: [
              { label: "Mono-stable switch (button) - Default", value: "0" },
              { label: "Bi-stable switch (switch)", value: "1" },
              { label: "Single Mono-stable switch", value: "2" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "20",
            label: "Saving the position Favourites",
            value: "16",
            size: "1",
            Help: "Options for changing parameter 1-99, default 16",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "30",
            label: "General Alarm, set for shutter no. 1",
            value: "2",
            size: "1",
            Help: " ",
            Item: [
              {
                label:
                  "DEACTIVATION - the device does not respond to alarm data frames",
                value: "0",
              },
              {
                label:
                  "OPEN SHUTTER ALARM - the device closes the roller shutter after detecting an alarm",
                value: "1",
              },
              {
                label:
                  "CLOSED SHUTTER ALARM - the device opens the roller shutter after detecting an alarm - Default",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "31",
            label: "Alarm of flooding with water, set for relay the shutter.",
            value: "0",
            size: "1",
            Help: " ",
            Item: [
              {
                label:
                  "DEACTIVATION - the device does not respond to alarm data frames - Default",
                value: "0",
              },
              {
                label:
                  "OPEN SHUTTER ALARM - the device closes the roller shutter after detecting an alarm",
                value: "1",
              },
              {
                label:
                  "CLOSED SHUTTER ALARM - the device opens the roller shutter after detecting an alarm",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "32",
            label: "Smoke, CO, CO2 Alarm. Set for the roller shutter.",
            value: "1",
            size: "1",
            Help: " ",
            Item: [
              {
                label:
                  "DEACTIVATION - the device does not respond to alarm data frames",
                value: "0",
              },
              {
                label:
                  "OPEN SHUTTER ALARM - the device closes the roller shutter after detecting an alarm - Default",
                value: "1",
              },
              {
                label:
                  "CLOSED SHUTTER ALARM - the device opens the roller shutter after detecting an alarm",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "33",
            label: "Temperature Alarm, set for roller shutter",
            value: "1",
            size: "1",
            Help: " ",
            Item: [
              {
                label:
                  "DEACTIVATION - the device does not respond to alarm data frames",
                value: "0",
              },
              {
                label:
                  "OPEN SHUTTER ALARM - the device closes the roller shutter after detecting an alarm - Default",
                value: "1",
              },
              {
                label:
                  "CLOSED SHUTTER ALARM - the device opens the roller shutter after detecting an alarm",
                value: "2",
              },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "41",
            label: "Scene activation functionality",
            value: "0",
            size: "1",
            Help:
              " Only valid for the 1.9 version of FGR221. The device offers the possibility of sending commands compatible with Command class scene activation. Information is sent to devices assigned to association group no. 3. Controllers such as Home Center 2 are able to interpret such commands and based on these commands they activate scenes, to which specific scene IDs have been assigned. The user may expand the functionality of the button connected to inputs S1 and S2 by distinguishing the actions of keys connected to those inputs. For example: double click would activate the scene goodnight and triple click would activate the scene morning.\n      ",
            Item: [
              { label: "Deactivation of functionality - Default", value: "0" },
              { label: "Activation of functionality", value: "1" },
            ],
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
                max_associations: "16",
                label: "Switch click",
                auto: "false",
              },
              { index: "2", max_associations: "16", label: "Switch hold" },
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
