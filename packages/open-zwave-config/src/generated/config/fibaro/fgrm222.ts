import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Local Protection",
            value: "0",
            size: "1",
            Help:
              "Once the Local Protection is activated, the module stops responding to S1 and S2 push buttons. SCENE ID and association commands will not be sent as well. The only exception is the B-button. Menu and Z-Wave network inclusion, after the B-button or S1 push button triple click, are still active.",
            Item: [
              {
                label: "No protection. Roller Shutter responds to push buttons",
                value: "0",
              },
              { label: "Not supported", value: "1" },
              {
                label:
                  "Local protection active. Roller Shutter does not respond to push buttons",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "RF Protection (radio protection)",
            value: "0",
            size: "1",
            Help:
              "Once the RF Protection is activated, the module stops responding to command frames setting the blind position. It's still possible however to configure the device (advanced configuration parameters, protection modes) and checking it's current state through polling (position, power, energy).",
            Item: [
              {
                label:
                  "No protection. Roller Shutter responds to command frames",
                value: "0",
              },
              {
                label:
                  "RF Protection active. Roller Shutter does not respond to the Z-Wave control frames",
                value: "1",
              },
              { label: "Not supported", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Reports type",
            value: "0",
            size: "1",
            Help:
              "Parameters value shoud be set to 1 if the module operates in Venetian Blind mode.\n\t       Default setting: 0",
            Item: [
              {
                label:
                  "Blind position reports sent to the main controller using Z-Wave Command Class",
                value: "0",
              },
              {
                label:
                  "Blind position reports sent to the main controller using Fibaro Command Class",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Roller Shutter operating modes",
            value: "0",
            size: "1",
            Help: "Default setting: 1",
            Item: [
              {
                label: "0 - Roller Blind Mode, without positioning",
                value: "0",
              },
              { label: "1 - Roller Blind Mode, with positioning", value: "1" },
              {
                label: "2 - Venetian Blind Mode, with positioning",
                value: "2",
              },
              { label: "3 - Gate Mode, without positioning", value: "3" },
              { label: "4 - Gate Mode, with positioning", value: "4" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "12",
            label:
              "In Venetian Blind mode the parameter determines time of full turn of the lamellas",
            value: "150",
            min: "0",
            max: "65535",
            Help:
              "In Venetian Blind mode (parameter 10 set to 2) the parameter determines time of full turn of the lamellas.\n\t      In Gate Mode (parameter 10 set to 3 or 4) the parameter defines the COUNTDOWN time, i.e. the time period after which an open gate starts closing. \n\t      In any other operating mode the parameter value is irrelevant. Value of 0 means the gate will not close automatically\n\t      Available settings: 0-65535 (0 - 655,35s)\n\t      Default setting: 150 (1,5 s)",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "13",
            label: "Set lamellas back to previous position",
            value: "1",
            size: "1",
            Help:
              "In Venetian Blind Mode (parameter 10 set to 2) the parameter influences lamellas positioning in various situations. In any other operating mode the parameter value is irrelevant.\n\t      Default setting: 1",
            Item: [
              {
                label:
                  "0 - Lamellas return to previously set position only in case of the main controller operation",
                value: "0",
              },
              {
                label:
                  "1 - Lamellas return to previously set position in case of the main controller operation, momentary switch operation, or when the limit switch is reached",
                value: "1",
              },
              {
                label:
                  "2 - Lamellas return to previously set position in case of the main controller operation, momentary switch operation, when the limit switch is reached or after receiving a STOP control frame (Switch Multilevel Stop).",
                value: "2",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "14",
            label: "Switch type",
            value: "0",
            size: "1",
            Help:
              "The parameter settings are relevant for Roller Blind Mode and Venetian Blind Mode (parameter 10 set to 0, 1, 2).",
            Item: [
              { label: "Momentary switches", value: "0" },
              { label: "Toggle switches", value: "1" },
              { label: "Single, momentary switch.", value: "2" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "17",
            label:
              "In Roller Blind Mode or Venetian Blind mode the parameter determines when the Roller Shutter relays are turned off after reaching a limit switch",
            value: "10",
            min: "0",
            max: "255",
            Help:
              "In Roller Blind Mode or Venetian Blind mode (parameter 10 set to 0, 1, 2) the parameter determines when the Roller Shutter relays are turned off after reaching a limit switch.\n\t      In Gate Mode (parameter 10 set to 3 or 4) the parameter determines a time period after which a gate will start closing after a S2 contact has been disconnected. In this mode, time to turn off the Roller Shutter relays after reaching a limit switch is set to 3 seconds and cannot be modified.\n\t      Value of 0 means the gate will note close automatically.\n\t      Available settings: 0 - 255 (0,1-25,5s).\n\t      Default setting: 10 (1s).",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "18",
            label: "Motor operation detection",
            value: "10",
            min: "0",
            max: "255",
            Help:
              "Power threshold to be interpreted as reaching a limit switch.\n\t      Available settings: 0 - 255 (1-255 W)\n\t      The value of 0 means reaching a limit switch will not be detected\n\t      Default setting: 10 (10W).",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "22",
            label: "Motor operation time",
            value: "240",
            min: "0",
            max: "65535",
            Help:
              "Time period for the motor to continue operation.\n\t      Available settings: 0 - 65535 (0 - 65535s)\n\t      The value of 0 means the function is disabled.\n\t      Default setting: 240 (240s. - 4 minutes)",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "29",
            label: "Forced Roller Shutter calibration",
            value: "0",
            size: "1",
            write_only: "true",
            Help:
              "By modifying the parameters setting from 0 to 1 a Roller Shutter enters the calibration mode. The parameter relevant only if a Roller Shutter is set to work in positioning mode (parameter 10 set to 1, 2 or 4).",
            Item: [
              { label: "Default", value: "0" },
              { label: "Start calibration process", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "30",
            label: "Response to general alarm",
            value: "2",
            size: "1",
            Help: "Default setting: 2-Close blind",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Open blind", value: "1" },
              { label: "Close blind", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "31",
            label: "Response to flooding alarm",
            value: "0",
            size: "1",
            Help: "Default setting: 0-No reaction",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Open blind", value: "1" },
              { label: "Close blind", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "32",
            label: "Response to smoke, CO or CO2 alarm",
            value: "1",
            size: "1",
            Help: "Default setting: 1-Open blind",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Open blind", value: "1" },
              { label: "Close blind", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "33",
            label: "Response to temperature alarm",
            value: "1",
            size: "1",
            Help: "Default setting: 1-Open blind",
            Item: [
              { label: "No reaction", value: "0" },
              { label: "Open blind", value: "1" },
              { label: "Close blind", value: "2" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "35",
            label: "Managing lamellas in response to alarm",
            value: "1",
            size: "1",
            Help:
              "In Venetian Blind Mode (parameter 10 set to 2), the parameter determines how the lamellas will react upon alarm detection. In any other modes, the parameter value is not relevant.\n\t      Default setting: 1 Set lamellas to their extreme position",
            Item: [
              {
                label:
                  "Do not change lamellas position - lamellas return to the last set position",
                value: "0",
              },
              { label: "Set lamellas to their extreme position", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "40",
            label: "Power reports",
            value: "10",
            min: "0",
            max: "100",
            Help:
              "Power level change that will result in new power value report being sent. The parameter defines a change that needs to occur in order to trigger the report. The value is a percentage of the previous report.\n\t      Power report threshold available settings: 1-100 (1-100%).\n\t      Value of 0 means the reports are turned off.\n\t      Default setting: 10 (10%).",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "42",
            label: "Periodic power or energy reports",
            value: "3600",
            min: "1",
            max: "65534",
            Help:
              "The parameter defines a time period between consecutive reports.\n\t      Available settings: 1-65534 (1-65534 seconds)\n\t      Value of 0 means the reports are turned off.\n\t      Default setting: 3600 (3600 seconds / 60 minutes).",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "43",
            label: "Energy reports",
            value: "10",
            min: "1",
            max: "254",
            Help:
              "Energy level change which will result in new energy value report being sent. The parameter defines a change that needs to occur in order to trigger the report.\n\t      Energy threshold available settings: 1-254 (0,01 - 2,54kWh).\n\t      Value of 0 means the reports are turned off.\n\t      Default setting 10 (0,1kWh).",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "44",
            label: "Self-measurement.",
            value: "1",
            size: "1",
            Help:
              "A Roller Shutter may include power and energy used by itself in reports sent to the main controller\n\t      Default setting: 0-Self-measurement inactive",
            Item: [
              { label: "Self-measurement inactive", value: "0" },
              { label: "Self-measurement active", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "50",
            label: "Scenes / Associations activation",
            value: "0",
            size: "1",
            Help:
              "Parameter determines whether scenes or associations are activated by the switch keys.\n\t      Default setting: 0-Associations activation",
            Item: [
              { label: "Associations activation", value: "0" },
              { label: "Scenes activation", value: "1" },
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
      {
        id: "145",
        Value: [
          {
            genre: "user",
            type: "byte",
            instance: "1",
            index: "0",
            label: "Venetian Blind slat position",
            value: "0",
            min: "0",
            max: "100",
            units: "%",
          },
          {
            genre: "user",
            type: "byte",
            instance: "1",
            index: "1",
            label: "Venetian blind tilt position",
            value: "0",
            min: "0",
            max: "100",
            units: "%",
          },
        ],
      },
    ],
  },
};

export default config;
