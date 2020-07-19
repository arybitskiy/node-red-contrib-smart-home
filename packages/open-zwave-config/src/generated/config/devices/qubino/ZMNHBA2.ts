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
            label: "Input 1 switch type",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help: "",
            Item: [
              { label: "Mono-stable switch type (push button)", value: "0" },
              { label: "Bi-stable switch type", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Input 2 switch type",
            size: "1",
            min: "0",
            max: "1",
            value: "1",
            Help: "",
            Item: [
              { label: "Mono-stable switch type (push button)", value: "0" },
              { label: "Bi-stable switch type", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Activate / deactivate functions ALL ON/ALL OFF",
            size: "1",
            min: "0",
            max: "255",
            value: "255",
            Help:
              "Flush 2 relays module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.",
            Item: [
              { label: "ALL ON active, ALL OFF active", value: "255" },
              {
                label: "ALL ON is not active ALL OFF is not active",
                value: "0",
              },
              { label: "ALL ON is not active ALL OFF active", value: "1" },
              { label: "ALL ON active ALL OFF is not active", value: "2" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "11",
            label: "Automatic turning Off relay Q1 after set time",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "0 - Auto OFF disabled. 1 - 65535 => 0,01 second - 655,35 seconds. Auto OFF enabled with define time, step is 10mseconds.\n\t\t\t\tDefault value 0",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "12",
            label: "Automatic turning Off relay Q2 after set time",
            min: "0",
            max: "65535",
            value: "0",
            Help:
              "0 - Auto OFF disabled. 1 - 65535 => 0,01 second - 655,35 seconds. Auto OFF enabled with define time, step is 10 mseconds.\n\t\t\t\tDefault value 0",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "30",
            label: "Saving the state of the 2 relays after a power failure",
            size: "1",
            min: "0",
            max: "1",
            value: "0",
            Help: "",
            Item: [
              {
                label:
                  "Flush 2 relays module saves its state before power failure (it returns to the last position saved before a power failure)",
                value: "0",
              },
              {
                label:
                  "Flush 2 relays module does not save the state after a power failure, it returns to off position.",
                value: "1",
              },
            ],
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "40",
            label: "Power reporting in Watts on power change for Q1",
            size: "1",
            min: "0",
            max: "100",
            value: "1",
            Help:
              "Set value from 0 - 100 (0%- 100%).\n\t\t\t\t0 - Reporting Disabled. 1 - 100 = 1% - 100% Reporting enabled.\n\t\t\t\tPower report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%.\n\t\t\t\tDefault value 1",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "41",
            label: "Power reporting in Watts on power change for Q2",
            size: "1",
            min: "0",
            max: "100",
            value: "1",
            Help:
              "Set value from 0 - 100 (0%- 100%).\n\t\t\t0 - Reporting Disabled. 1 - 100 = 1% - 100% Reporting enabled.\n\t\t\tPower report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%.\n\t\t\tDefault value 1",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "42",
            label: "Power reporting in Watts by time interval for Q1",
            min: "0",
            max: "65535",
            value: "300",
            Help:
              "Set value means time interval (0 1 65535) in seconds, when power report is send.\n\t\t\t\t0 - Reporting Disabled. 1 - 65535 = 1 second - 65535 seconds.\n\t\t\t\tReporting enabled. Power report is send with time interval set by entered value.\n\t\t\t\tDefault value 300 (power report in Watts is send each 300s)",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "43",
            label: "Power reporting in Watts by time interval for Q2",
            min: "0",
            max: "65535",
            value: "300",
            Help:
              "Set value means time interval (0 1 65535) in seconds, when power report is send.\n\t\t\t\t0 - Reporting Disabled. 1 - 65535 = 1 second - 65535 seconds.\n\t\t\t\tReporting enabled. Power report is send with time interval set by entered value.\n\t\t\t\tDefault value 300 (power report in Watts is send each 300s)",
          },
        ],
      },
      {
        id: "37",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "37",
                RequestFlags: "0",
                Index: "0",
                Instance: "2",
              },
              {
                CommandClass: "37",
                RequestFlags: "0",
                Index: "0",
                Instance: "3",
              },
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
                max_associations: "5",
                label: "Output Q1 state",
                auto: "false",
              },
              { index: "2", max_associations: "5", label: "Output Q2 state" },
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
      { id: "32", action: "remove" },
    ],
  },
};

export default config;